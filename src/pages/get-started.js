import { useIntl } from 'gatsby-plugin-intl';
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { PageNavigationSection } from '../components/common';
import { PageLayout } from '../components/foundation';
import { ContentSection, HeroSection } from '../components/get-started';
import { useSiteMetadataQuery } from '../hooks/core';
import { getCurrentPageRouteIndex, getPageTitle } from '../utils/page.util';

const GetStartedPage = ({ location }) => {
  const intl = useIntl();
  const { siteMetadata } = useSiteMetadataQuery();

  const currentPageRouteIndex = getCurrentPageRouteIndex(location.pathname, siteMetadata.pageRoutes);
  const getStartedPageTitle = getPageTitle(intl, currentPageRouteIndex, siteMetadata.pageRoutes);

  return (
    <Fragment>
      <Helmet title={getStartedPageTitle} defer={false} />
      <PageLayout>
        <HeroSection />
        <ContentSection />
        <PageNavigationSection />
      </PageLayout>
    </Fragment>
  );
};

export default GetStartedPage;
