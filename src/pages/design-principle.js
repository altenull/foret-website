import { useIntl } from 'gatsby-plugin-intl';
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { PageNavigationSection } from '../components/common';
import { HeroSection, IntroDesignPrincipleSection } from '../components/design-principle';
import { PageLayout } from '../components/foundation';
import { useSiteMetadataQuery } from '../hooks/core';
import { getPageTitle } from '../utils/page.util';

const DesignPrinciplePage = ({ location }) => {
  const intl = useIntl();
  const { siteMetadata } = useSiteMetadataQuery();

  const designPrincipleTitle = getPageTitle(intl, location.pathname, siteMetadata.pageRoutes);

  return (
    <Fragment>
      <Helmet title={designPrincipleTitle} defer={false} />
      <PageLayout>
        <HeroSection />
        <IntroDesignPrincipleSection />
        <PageNavigationSection />
      </PageLayout>
    </Fragment>
  );
};

export default DesignPrinciplePage;
