import { SmallText } from '@altenull/foret-react';
import { css } from '@emotion/core';
import { IntlContextConsumer, useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { useGetNpmPackageVersion } from '../../hooks/api/useGetNpmPackageVersion';
import { getLanguageLinks } from '../../utils/locale.util';

const footerStyles = (theme) => css`
  padding: 32px 0;
  box-sizing: border-box;
  border-top: 1px solid ${theme.colors.ink};

  ${theme.mediaQueries.viewPort9} {
    padding: 64px 0;
  }
`;

const footerContentWrapperStyles = css`
  width: calc(100% - 2rem);
  max-width: 792px;
  margin: 0 auto;
`;

const twoColumnStyles = (theme) => css`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;

  ${theme.mediaQueries.viewPort4} {
    flex-direction: row;
  }
`;

const languageLinksWrapperStyles = css`
  display: flex;
  margin-bottom: 48px;
`;

const rightColumnStyles = (theme) => css`
  margin-bottom: 24px;

  ${theme.mediaQueries.viewPort4} {
    text-align: right;
    margin-bottom: 0;
  }
`;

const smallTextStyles = css`
  & + & {
    margin-top: 8px;
  }
`;

const FooterContainer = () => {
  const intl = useIntl();

  const foretReactVersion = useGetNpmPackageVersion('@altenull/foret-react');
  const foretNgVersion = useGetNpmPackageVersion('@altenull/foret-ng');

  return (
    <IntlContextConsumer>
      {({ language, languages }) => (
        <footer css={footerStyles}>
          <div css={footerContentWrapperStyles}>
            <div css={languageLinksWrapperStyles}>{getLanguageLinks(language, languages)}</div>
            <div css={(theme) => twoColumnStyles(theme)}>
              <div>
                <SmallText css={smallTextStyles}>
                  <a href={'mailto:altenull@gmail.com'}>{intl.formatMessage({ id: 'footer.contactUs' })}</a>
                </SmallText>
                <SmallText css={smallTextStyles}>© 2020 · Foret Design System</SmallText>
              </div>
              <div css={(theme) => rightColumnStyles(theme)}>
                <SmallText css={smallTextStyles}>@altenull/foret-react: {foretReactVersion}</SmallText>
                <SmallText css={smallTextStyles}>@altenull/foret-ng: {foretNgVersion}</SmallText>
              </div>
            </div>
          </div>
        </footer>
      )}
    </IntlContextConsumer>
  );
};

export default FooterContainer;
