import { Subtitle1 } from '@altenull/foret-react';
import { css } from '@emotion/core';
import { changeLocale } from 'gatsby-plugin-intl';
import React from 'react';

const languageLinkStyles = css`
  cursor: pointer;
  & + & {
    margin-left: 16px;
  }
`;

const LanguageLink = ({ language }) => {
  const translatedLanguageMap = {
    ko: '한국어',
    en: 'English',
  };

  return (
    <Subtitle1 onClick={() => changeLocale(language, null)} css={languageLinkStyles}>
      {translatedLanguageMap[language]}
    </Subtitle1>
  );
};

export default LanguageLink;
