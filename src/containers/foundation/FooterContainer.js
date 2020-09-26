import { Color } from '@altenull/foret-core';
import { SmallText } from '@altenull/foret-react';
import { css } from '@emotion/core';
import { IntlContextConsumer, useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { getLanguageLinks } from '../../utils/locale.util';

const footerStyles = css`
  padding: 64px 128px;
  box-sizing: border-box;
  border-top: 1px solid ${Color.Ink};
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
  margin-bottom: 24px;
`;

const leftColumnStyles = css``;

const rightColumnStyles = css`
  text-align: right;
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
                <SmallText>
                  <a href={'mailto:altenull@gmail.com'}>{intl.formatMessage({ id: 'footer.contactUs' })}</a>
                </SmallText>

                <SmallText>© 2020 · Foret Design System</SmallText>
              </div>
              <div css={rightColumnStyles}>
                <SmallText>@altenull/foret-react: v1.0.0</SmallText>
                <SmallText>@altenull/foret-ng: v1.0.0</SmallText>
              </div>
            </div>
          </div>
        </footer>
      )}
    </IntlContextConsumer>
  );
};

export default FooterContainer;
