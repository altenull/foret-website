import { Color } from '@altenull/foret-core';
import { SmallText, Subtitle1 } from '@altenull/foret-react';
import { css } from '@emotion/core';
import { changeLocale } from 'gatsby-plugin-intl';
import React from 'react';
import { useGetLanguages } from '../../hooks';

const footerStyles = css`
  padding: 64px 128px;
  box-sizing: border-box;
  border-top: 1px solid ${Color.Ink};
  background-color: ${Color.Paper};
`;

const languageLinksWrapperStyles = css`
  display: flex;
  justify-content: center;
`;

const languageLinkStyles = css`
  cursor: pointer;
  & + & {
    margin-left: 16px;
  }
`;

const smallTextStyles = css`
  text-align: center;
`;

const FooterContainer = () => {
  const getLanguagesResponse = useGetLanguages();

  const languageLinks = getLanguagesResponse.languages.map((language) => {
    const translatedLanguageMap = {
      ko: '한국어',
      en: 'English',
    };

    return (
      <Subtitle1 key={language} onClick={() => changeLocale(language, null)} css={languageLinkStyles}>
        {translatedLanguageMap[language]}
      </Subtitle1>
    );
  });

  return (
    <footer css={footerStyles}>
      <div css={languageLinksWrapperStyles}>{languageLinks}</div>
      <SmallText css={smallTextStyles}>© 2020 Foret Design System. All rights reserved.</SmallText>
      <SmallText css={smallTextStyles}>TODO: Creator Heonyoung Kim. (github link or others...)</SmallText>
    </footer>
  );
};

export default FooterContainer;
