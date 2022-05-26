export type LanguageType = {
  code: string;
  name: string;
  native?: string;
}

export type ContinentType = {
  code: string;
  name: string;
}

export type CountryType = {
  code: string;
  name: string;
  native: string;
  currency: string;
  emoji: string;
  capital: string;
  languages: LanguageType;
  continent: ContinentType;
}