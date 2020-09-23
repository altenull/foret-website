import React from 'react';
import { LanguageLink } from '../components/foundation';

export const getLanguageLinks = (language, languages) => {
  const currentLocaleFirstLanguages = [language, ...languages.filter((lang) => lang !== language)];

  return currentLocaleFirstLanguages.map((language) => <LanguageLink key={language} language={language} />);
};
