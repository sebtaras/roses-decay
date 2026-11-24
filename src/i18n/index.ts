import en, { type Dictionary } from './en';
import hr from './hr';

export type { Dictionary };

/** Croatian lives at "/", English at "/en/". Order here is the order in the language switcher. */
export const languages = {
  hr: { label: 'HR', name: 'Hrvatski', path: '/' },
  en: { label: 'EN', name: 'English', path: '/en/' },
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'hr';

const dictionaries: Record<Lang, Dictionary> = { hr, en };

export function getDictionary(lang: Lang): Dictionary {
  return dictionaries[lang];
}
