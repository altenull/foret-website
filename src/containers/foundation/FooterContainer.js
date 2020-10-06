import { SmallText } from '@altenull/foret-react';
import { css } from '@emotion/core';
import { IntlContextConsumer, useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { getLanguageLinks } from '../../utils/locale.util';

const footerStyles = (theme) => css`
  padding: 64px 128px;
  box-sizing: border-box;
  border-top: 1px solid ${theme.colors.ink};
`;

const footerContentWrapperStyles = css`
  width: calc(100% - 2rem);
  max-width: 792px;
  margin: 0 auto;
`;

const twoColumnStyles = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const languageLinksWrapperStyles = css`
  display: flex;
  margin-bottom: 32px;
`;

const leftColumnStyles = css``;

const rightColumnStyles = css`
  text-align: right;
`;

const smallTextStyles = css`
  & + & {
    margin-top: 8px;
  }
`;

const FooterContainer = () => {
  const intl = useIntl();

  return (
    <IntlContextConsumer>
      {({ language, languages }) => (
        <footer css={footerStyles}>
          <div css={footerContentWrapperStyles}>
            <div css={languageLinksWrapperStyles}>{getLanguageLinks(language, languages)}</div>
            <div css={twoColumnStyles}>
              <div css={leftColumnStyles}>
                <SmallText css={smallTextStyles}>
                  <a href={'mailto:altenull@gmail.com'}>{intl.formatMessage({ id: 'footer.contactUs' })}</a>
                </SmallText>
                <SmallText css={smallTextStyles}>© 2020 · Foret Design System</SmallText>
              </div>
              <div css={rightColumnStyles}>
                <SmallText css={smallTextStyles}>@altenull/foret-react: v1.0.0</SmallText>
                <SmallText css={smallTextStyles}>@altenull/foret-ng: v1.0.0</SmallText>
              </div>
            </div>
          </div>
        </footer>
      )}
    </IntlContextConsumer>
  );
};

export default FooterContainer;
