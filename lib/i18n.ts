export const locales = ['pl', 'ua', 'en'] as const;
export const defaultLocale = 'pl';
export type Locale = typeof locales[number];