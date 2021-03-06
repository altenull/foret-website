import { Paragraph } from '@altenull/foret-react';
import { css, Global } from '@emotion/core';
import { IntlContextConsumer, useIntl } from 'gatsby-plugin-intl';
import React, { Fragment } from 'react';
import { PageLink } from '../../components/foundation';
import { useSiteMetadataQuery } from '../../hooks/core';
import useIsMounted from '../../hooks/core/useIsMounted';
import { getLanguageLinks } from '../../utils/locale.util';

const drawerStyles = (theme, shouldStartAnimation) => css`
  overflow: auto;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transition: transform ${theme.duration.slow} ease-in-out, opacity ${theme.duration.normal};
  opacity: ${shouldStartAnimation ? '1' : '0'};
  transform: translateY(${shouldStartAnimation ? '0' : '-20%'});
  background-color: ${theme.colors.white};
  z-index: ${theme.zIndexes.drawer};
`;

const positionerStyles = (theme) => css`
  padding: 128px 16px 0;
  box-sizing: border-box;

  ${theme.mediaQueries.viewPort9} {
    padding: 160px 64px 0;
  }
`;

const pageLinkContainerStyles = (theme) => css`
  padding: 0;
  margin: 0 0 32px;

  ${theme.mediaQueries.viewPort9} {
    margin: 64px 0;
  }
`;

const pageLinkStyles = (theme) => css`
  & + & {
    margin-top: 2rem;
  }

  ${theme.mediaQueries.viewPort9} {
    & + & {
      margin-top: 3rem;
    }
  }
`;

const preferredLanguageWrapperStyles = css`
  max-width: 1440px;
  margin: 0 auto;
`;

const languageLinksWrapperStyles = css`
  display: flex;
`;

const globalStyles = css`
  body {
    /* To prevent scrolling when drawer is showing */
    overflow: hidden;
  }
`;

// BUG:
// If a component contains the Link component from gatsby module,
// it is re-rendered as many as the number of Link components.
// It's not solved issue yet.
const DrawerContainer = () => {
  const intl = useIntl();
  const isMounted = useIsMounted();
  const getSiteMetadataResponse = useSiteMetadataQuery();

  const pageLinks = getSiteMetadataResponse.siteMetadata.pageRoutes.map(({ key, camelCase }) => (
    <PageLink
      key={key}
      css={(theme) => pageLinkStyles(theme)}
      to={`/${key}`}
      text={intl.formatMessage({ id: `pages.${camelCase}` })}
    />
  ));

  return (
    <IntlContextConsumer>
      {({ language, languages }) => (
        <Fragment>
          <Global styles={globalStyles} />

          <div css={(theme) => drawerStyles(theme, isMounted)}>
            <div css={(theme) => positionerStyles(theme)}>
              <ul css={(theme) => pageLinkContainerStyles(theme)}>{pageLinks}</ul>

              <div css={preferredLanguageWrapperStyles}>
                <Paragraph enableMargin>{intl.formatMessage({ id: 'drawer.preferredLanguageTitle' })}</Paragraph>
                <div css={languageLinksWrapperStyles}>{getLanguageLinks(language, languages)}</div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </IntlContextConsumer>
  );
};

export default DrawerContainer;
