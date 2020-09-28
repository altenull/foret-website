import { MarginalParagraph } from '@altenull/foret-react';
import { css, Global } from '@emotion/core';
import { IntlContextConsumer, useIntl } from 'gatsby-plugin-intl';
import React, { Fragment } from 'react';
import { PageLink } from '../../components/foundation';
import { useSiteMetadataQuery } from '../../hooks/core';
import useIsMounted from '../../hooks/core/useIsMounted';
import { getLanguageLinks } from '../../utils/locale.util';

const drawerStyles = (theme, shouldStartAnimation) => css`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transition: transform ${theme.duration.slow} ease-in-out, opacity ${theme.duration.normal};
  opacity: ${shouldStartAnimation ? '1' : '0'};
  transform: translateY(${shouldStartAnimation ? '0' : '-10%'});
  background-color: ${theme.colors.white};
  z-index: 1000; /* TODO: Manage z-index in one place */
`;

const positionerStyles = css`
  padding: 160px 64px 0;
  box-sizing: border-box;
`;

const pageLinkContainerStyles = css`
  margin: 64px 0;
  padding: 0;
`;

const pageLinkStyles = css`
  & + & {
    margin-top: 3rem;
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

const DrawerContainer = () => {
  const intl = useIntl();
  const isMounted = useIsMounted();
  const getSiteMetadataResponse = useSiteMetadataQuery();

  const pageLinks = getSiteMetadataResponse.siteMetadata.pageRoutes.map(({ key, camelCase }) => (
    <PageLink key={key} css={pageLinkStyles} to={`/${key}`} text={intl.formatMessage({ id: `pages.${camelCase}` })} />
  ));

  return (
    <IntlContextConsumer>
      {({ language, languages }) => (
        <Fragment>
          <Global styles={globalStyles} />

          <div css={(theme) => drawerStyles(theme, isMounted)}>
            <div css={positionerStyles}>
              <ul css={pageLinkContainerStyles}>{pageLinks}</ul>

              <div css={preferredLanguageWrapperStyles}>
                <MarginalParagraph>{intl.formatMessage({ id: 'drawer.preferredLanguageTitle' })}</MarginalParagraph>
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
