import { useIntl } from 'gatsby-plugin-intl';
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { PageNavigationSection } from '../components/common';
import { PageLayout } from '../components/foundation';
import { ContributingSection, HeroSection, TabbableGetStarted } from '../components/get-started';
import { useSiteMetadataQuery } from '../hooks/core';
import { getPageTitle } from '../utils/page.util';

const GetStartedPage = ({ location }) => {
  const intl = useIntl();
  const { siteMetadata } = useSiteMetadataQuery();

  const getStartedPageTitle = getPageTitle(intl, location.pathname, siteMetadata.pageRoutes);

  return (
    <Fragment>
      <Helmet title={getStartedPageTitle} defer={false} />
      <PageLayout>
        <HeroSection />
        <TabbableGetStarted />
        <ContributingSection />
        <PageNavigationSection />
      </PageLayout>
    </Fragment>
  );
};

export default GetStartedPage;
