import { useState, type CSSProperties, type FormEvent } from 'react';
import type { Dictionary } from '../i18n';

type Status = 'idle' | 'sending' | 'sent' | 'error';
type Strings = Dictionary['contact']['form'];

// Same form name on every language page, so all messages land in one Netlify inbox.
const FORM_NAME = 'contact';

const field =
  'w-full border-0 border-b-2 border-ink bg-transparent px-1 py-2 font-hand text-2xl text-ink placeholder:text-ink/40 outline-none transition focus:border-accent focus:bg-hl/20';
const label = 'block font-marker text-sm tracking-wide uppercase';

const sketch = (fill: string, color = fill) =>
  ({ '--sketch-fill': fill, '--sketch-color': color }) as CSSProperties;

/**
 * Submits to Netlify Forms. Netlify detects the form from the static HTML at build time
 * (data-netlify + the hidden form-name input). Locally the POST has nowhere to go, so
 * you'll see the error state until the site is deployed on Netlify.
 */
export default function ContactForm({ fallbackEmail, t }: { fallbackEmail: string; t: Strings }) {
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('sending');
    try {
      const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>);
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="sketch -rotate-1 p-8 text-night" style={sketch('var(--color-hl)', 'var(--color-night)')} role="status">
        <p className="font-marker text-4xl uppercase">{t.thanksTitle}</p>
        <p className="mt-2 font-hand text-2xl">{t.thanksBody}</p>
      </div>
    );
  }

  return (
    <form
      name={FORM_NAME}
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={onSubmit}
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p hidden>
        <label>
          {t.honeypot} <input name="bot-field" />
        </label>
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className={label}>{t.name}</span>
          <input name="name" required autoComplete="name" className={field} placeholder={t.namePlaceholder} />
        </label>
        <label className="block">
          <span className={label}>{t.email}</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className={field}
            placeholder={t.emailPlaceholder}
          />
        </label>
      </div>

      <label className="block">
        <span className={label}>{t.topic}</span>
        <select name="topic" className={`${field} cursor-pointer`} defaultValue={t.topics[0].value}>
          {t.topics.map((topic) => (
            <option key={topic.value} value={topic.value} className="bg-paper text-ink">
              {topic.label}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className={label}>{t.message}</span>
        <textarea name="message" required rows={4} className={field} placeholder={t.messagePlaceholder} />
      </label>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="sketch hover-wiggle px-9 py-3 font-marker text-xl text-bone uppercase disabled:opacity-60"
          style={sketch('var(--color-accent)')}
        >
          {status === 'sending' ? t.sending : t.send}
        </button>
        {status === 'error' && (
          <p className="font-hand text-xl text-accent" role="alert">
            {t.errorBefore}{' '}
            <a className="underline" href={`mailto:${fallbackEmail}`}>
              {fallbackEmail}
            </a>
            {t.errorAfter}
          </p>
        )}
      </div>
    </form>
  );
}
