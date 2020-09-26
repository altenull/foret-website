import { css } from '@emotion/core';
import { useLocation } from '@reach/router';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { NextPageLink, PrevPageLink } from '../../components/common';
import { useSiteMetadataQuery } from '../../hooks/core';
import { getCurrentPageRouteIndex } from '../../utils/page.util';

const navStyles = css`
  display: flex;
  justify-content: space-between;
`;

const PageNavigationContainer = () => {
  const intl = useIntl();
  const location = useLocation();
  const { siteMetadata } = useSiteMetadataQuery();

  const getPageNavigationLinks = (intl, currentPageRouteIndex, pageRoutes) => {
    const prevPageNavigationIndex = currentPageRouteIndex - 1 < 0 ? pageRoutes.length - 1 : currentPageRouteIndex - 1;
    const nextPageNavigationIndex = currentPageRouteIndex + 1 > pageRoutes.length - 1 ? 0 : currentPageRouteIndex + 1;

    return {
      prevLink: {
        to: `/${pageRoutes[prevPageNavigationIndex].key}`,
        text: intl.formatMessage({
          id: `pages.${pageRoutes[prevPageNavigationIndex].camelCase}`,
        }),
      },
      nextLink: {
        to: `/${pageRoutes[nextPageNavigationIndex].key}`,
        text: intl.formatMessage({
          id: `pages.${pageRoutes[nextPageNavigationIndex].camelCase}`,
        }),
      },
    };
  };

  const currentPageRouteIndex = getCurrentPageRouteIndex(location.pathname, siteMetadata.pageRoutes);
  const { prevLink, nextLink } = getPageNavigationLinks(intl, currentPageRouteIndex, siteMetadata.pageRoutes);

  return (
    <nav css={navStyles}>
      <PrevPageLink to={prevLink.to} text={prevLink.text} />
      <NextPageLink to={nextLink.to} text={nextLink.text} />
    </nav>
  );
};

export default PageNavigationContainer;
