import { useState, type FormEvent } from 'react';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const FORM_NAME = 'contact';

const field =
  'w-full rounded-xl border border-line bg-ink px-4 py-3 text-bone placeholder:text-muted/60 outline-none transition focus:border-accent';

/**
 * Submits to Netlify Forms. Netlify detects the form from the static HTML at build time
 * (data-netlify + the hidden form-name input). Locally the POST has nowhere to go, so
 * you'll see the error state until the site is deployed on Netlify.
 */
export default function ContactForm({ fallbackEmail }: { fallbackEmail: string }) {
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
      <div className="rounded-2xl border border-accent/40 bg-accent/10 p-8">
        <p className="font-display text-3xl uppercase">Thanks!</p>
        <p className="mt-2 text-bone/80">We got your message and will get back to you soon.</p>
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
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-bone/80">Name</span>
          <input name="name" required autoComplete="name" className={field} placeholder="Your name" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-bone/80">Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className={field}
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-bone/80">What’s it about?</span>
        <select name="topic" className={field} defaultValue="Booking">
          <option>Booking</option>
          <option>Press</option>
          <option>Collaboration</option>
          <option>Just saying hi</option>
        </select>
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-bone/80">Message</span>
        <textarea name="message" required rows={5} className={field} placeholder="Tell us more…" />
      </label>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="rounded-full bg-accent px-8 py-3 font-semibold text-ink transition hover:bg-bone disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>
        {status === 'error' && (
          <p className="text-sm text-accent" role="alert">
            Something went wrong. Email us at{' '}
            <a className="underline" href={`mailto:${fallbackEmail}`}>
              {fallbackEmail}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
