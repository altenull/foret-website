import { Color } from '@altenull/foret-core';
import { css } from '@emotion/core';
import { useIntl } from 'gatsby-plugin-intl';
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Layout, PageNavigationSection } from '../components/common';
import { ContentSection, HeroSection } from '../components/get-started';
import { useGetSiteMetadata } from '../hooks';

const getStartedStyles = css`
  background-color: ${Color.Paper};
`;

const GetStartedPage = ({ location }) => {
  const intl = useIntl();
  const { siteMetadata } = useGetSiteMetadata();

  const currentPageRouteIndex = siteMetadata.pageRoutes.findIndex(({ key, ...rest }) =>
    location.pathname.includes(key)
  );

  const getStartedPageTitle = `${intl.formatMessage({
    id: `pages.${siteMetadata.pageRoutes[currentPageRouteIndex].camelCase}`,
  })} | ${intl.formatMessage({ id: 'title' })}`;

  const getPageNavigationLinks = (currentPageRouteIndex, pageRoutes) => {
    const prevPageNavigationIndex = currentPageRouteIndex - 1 < 0 ? pageRoutes.length - 1 : currentPageRouteIndex - 1;
    const nextPageNavigationIndex = currentPageRouteIndex + 1 > pageRoutes.length - 1 ? 0 : currentPageRouteIndex + 1;

    return {
      prevLink: {
        to: pageRoutes[prevPageNavigationIndex].key,
        text: intl.formatMessage({
          id: `pages.${pageRoutes[prevPageNavigationIndex].camelCase}`,
        }),
      },
      nextLink: {
        to: siteMetadata.pageRoutes[nextPageNavigationIndex].key,
        text: intl.formatMessage({
          id: `pages.${siteMetadata.pageRoutes[nextPageNavigationIndex].camelCase}`,
        }),
      },
    };
  };

  const { prevLink, nextLink } = getPageNavigationLinks(currentPageRouteIndex, siteMetadata.pageRoutes);

  return (
    <Fragment>
      <Helmet title={getStartedPageTitle} defer={false} />
      <Layout css={getStartedStyles}>
        <HeroSection />
        <ContentSection />
        <PageNavigationSection prevLink={prevLink} nextLink={nextLink} />
      </Layout>
    </Fragment>
  );
};

export default GetStartedPage;
