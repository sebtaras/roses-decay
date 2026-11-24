import { useState, type CSSProperties, type FormEvent } from 'react';
import type { Dictionary } from '../i18n';

type Status = 'idle' | 'sending' | 'sent' | 'error';
type Strings = Dictionary['contact']['form'];

const field =
  'w-full border-0 border-b-2 border-ink bg-transparent px-1 py-2 font-hand text-2xl text-ink placeholder:text-ink/40 outline-none transition focus:border-accent focus:bg-hl/20';
const label = 'block font-marker text-sm tracking-wide uppercase';

const sketch = (fill: string, color = fill) =>
  ({ '--sketch-fill': fill, '--sketch-color': color }) as CSSProperties;

/**
 * Sends messages through Web3Forms (https://web3forms.com), which emails them to the address
 * the access key was created for. Works on any static host, including GitHub Pages and localhost.
 * The access key is meant to be public, so it lives in src/data/site.ts.
 * Without a key, sending fails and the form shows the "email us instead" message.
 */
export default function ContactForm({
  accessKey,
  fallbackEmail,
  t,
}: {
  accessKey: string;
  fallbackEmail: string;
  t: Strings;
}) {
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setStatus('sending');
    try {
      if (!accessKey) throw new Error('No Web3Forms access key set in src/data/site.ts');
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...data,
          access_key: accessKey,
          subject: `Roses Decay website: ${data.topic}`,
          from_name: 'Roses Decay website',
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.success) throw new Error(json.message || String(res.status));
      form.reset();
      setStatus('sent');
    } catch (err) {
      console.error('Contact form failed:', err);
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
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Spam trap: real people never see or tick this; Web3Forms drops submissions where it's checked */}
      <p hidden>
        <label>
          {t.honeypot} <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" />
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
