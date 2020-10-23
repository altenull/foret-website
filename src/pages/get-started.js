import { IntlContextConsumer, useIntl } from 'gatsby-plugin-intl';
import React, { Fragment } from 'react';
import { PageNavigationSection } from '../components/common';
import { PageLayout } from '../components/foundation';
import { ContributingSection, HeroSection, TabbableGetStarted } from '../components/get-started';
import { CustomHelmet } from '../components/seo';
import { useSiteMetadataQuery } from '../hooks/core';
import { getPageTitle } from '../utils/page.util';

const GetStartedPage = ({ location }) => {
  const intl = useIntl();
  const { siteMetadata } = useSiteMetadataQuery();

  const getStartedPageTitle = getPageTitle(intl, location.pathname, siteMetadata.pageRoutes);

  return (
    <IntlContextConsumer>
      {({ language }) => (
        <Fragment>
          <CustomHelmet title={getStartedPageTitle} language={language} />
          <PageLayout>
            <HeroSection />
            <TabbableGetStarted />
            <ContributingSection />
            <PageNavigationSection />
          </PageLayout>
        </Fragment>
      )}
    </IntlContextConsumer>
  );
};

export default GetStartedPage;
