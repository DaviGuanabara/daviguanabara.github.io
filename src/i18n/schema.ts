export const locales = ["en", "pt"] as const;

export type Locale = (typeof locales)[number];

export type Localized<T> = Record<Locale, T>;

export type LocalizedString = Localized<string>;
