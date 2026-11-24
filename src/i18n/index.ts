import en, { type Dictionary } from './en';
import hr from './hr';

export type { Dictionary };

/** Prefix a site path with the deploy base (e.g. "/roses-decay/"), so links work on GitHub Pages. */
export function withBase(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

/** Croatian lives at the site root, English at "en/". Order here is the order in the language switcher. */
export const languages = {
  hr: { label: 'HR', name: 'Hrvatski', path: withBase('') },
  en: { label: 'EN', name: 'English', path: withBase('en/') },
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'hr';

const dictionaries: Record<Lang, Dictionary> = { hr, en };

export function getDictionary(lang: Lang): Dictionary {
  return dictionaries[lang];
}
