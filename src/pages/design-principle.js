import { useIntl } from 'gatsby-plugin-intl';
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { PageNavigationSection } from '../components/common';
import { ContentSection, HeroSection } from '../components/design-principle';
import { Layout } from '../components/foundation';
import { useSiteMetadataQuery } from '../hooks/core';
import { getCurrentPageRouteIndex, getPageTitle } from '../utils/page.util';

const DesignPrinciplePage = ({ location }) => {
  const intl = useIntl();
  const { siteMetadata } = useSiteMetadataQuery();

  const currentPageRouteIndex = getCurrentPageRouteIndex(location.pathname, siteMetadata.pageRoutes);
  const designPrincipleTitle = getPageTitle(intl, currentPageRouteIndex, siteMetadata.pageRoutes);

  return (
    <Fragment>
      <Helmet title={designPrincipleTitle} defer={false} />
      <Layout>
        <HeroSection />
        <ContentSection />
        <PageNavigationSection />
      </Layout>
    </Fragment>
  );
};

export default DesignPrinciplePage;
