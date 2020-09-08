import { Color } from '@altenull/foret-core';
import { css } from '@emotion/core';
import { useIntl } from 'gatsby-plugin-intl';
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Layout, PageNavigationSection } from '../components/common';
import { ContentSection, HeroSection } from '../components/get-started';
import { useSiteMetadataQuery } from '../hooks';
import { getCurrentPageRouteIndex, getPageNavigationLinks, getPageTitle } from '../utils/page.utils';

const layoutStyles = css`
  background-color: ${Color.Paper};
`;

const GetStartedPage = ({ location }) => {
  const intl = useIntl();
  const { siteMetadata } = useSiteMetadataQuery();

  const currentPageRouteIndex = getCurrentPageRouteIndex(location.pathname, siteMetadata.pageRoutes);
  const getStartedPageTitle = getPageTitle(intl, currentPageRouteIndex, siteMetadata.pageRoutes);
  const { prevLink, nextLink } = getPageNavigationLinks(intl, currentPageRouteIndex, siteMetadata.pageRoutes);

  return (
    <Fragment>
      <Helmet title={getStartedPageTitle} defer={false} />
      <Layout css={layoutStyles}>
        <HeroSection />
        <ContentSection />
        <PageNavigationSection prevLink={prevLink} nextLink={nextLink} />
      </Layout>
    </Fragment>
  );
};

export default GetStartedPage;
