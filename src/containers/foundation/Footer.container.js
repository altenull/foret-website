import { Color } from '@altenull/foret-core';
import { SmallText } from '@altenull/foret-react';
import { css } from '@emotion/core';
import { IntlContextConsumer } from 'gatsby-plugin-intl';
import React from 'react';
import { LanguageLink } from '../../components/foundation';

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

const smallTextStyles = css`
  text-align: center;
`;

const FooterContainer = () => {
  const getLanguageLinks = (languages) =>
    languages.map((language) => <LanguageLink key={language} language={language} />);

  return (
    <IntlContextConsumer>
      {({ languages }) => (
        <footer css={footerStyles}>
          <div css={languageLinksWrapperStyles}>{getLanguageLinks(languages)}</div>
          <SmallText css={smallTextStyles}>© 2020 Foret Design System. All rights reserved.</SmallText>
          <SmallText css={smallTextStyles}>TODO: Creator Heonyoung Kim. (github link or others...)</SmallText>
        </footer>
      )}
    </IntlContextConsumer>
  );
};

export default FooterContainer;
