import { useIntl } from 'gatsby-plugin-intl';
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { HeroSection, IntroColorSection } from '../components/color';
import { PageNavigationSection } from '../components/common';
import { PageLayout } from '../components/foundation';
import { useSiteMetadataQuery } from '../hooks/core';
import { getCurrentPageRouteIndex, getPageTitle } from '../utils/page.util';

const ColorPage = ({ location }) => {
  const intl = useIntl();
  const { siteMetadata } = useSiteMetadataQuery();

  const currentPageRouteIndex = getCurrentPageRouteIndex(location.pathname, siteMetadata.pageRoutes);
  const colorPageTitle = getPageTitle(intl, currentPageRouteIndex, siteMetadata.pageRoutes);

  return (
    <Fragment>
      <Helmet title={colorPageTitle} defer={false} />
      <PageLayout>
        <HeroSection />
        <IntroColorSection />
        <PageNavigationSection />
      </PageLayout>
    </Fragment>
  );
};

export default ColorPage;
