import { Subtitle1 } from '@altenull/foret-react';
import { css } from '@emotion/core';
import { changeLocale } from 'gatsby-plugin-intl';
import React from 'react';
import { LanguageEnum } from '../../enums/core/language.enum';

const languageLinkStyles = css`
  cursor: pointer;
  & + & {
    margin-left: 32px;
  }
`;

const LanguageLink = ({ language }) => {
  const translatedLanguageMap = {
    [LanguageEnum.Ko]: '한국어',
    [LanguageEnum.En]: 'English',
  };

  return (
    <Subtitle1 onClick={() => changeLocale(language)} css={languageLinkStyles}>
      {translatedLanguageMap[language]}
    </Subtitle1>
  );
};

export default LanguageLink;
