import { IntlContextConsumer, useIntl } from 'gatsby-plugin-intl';
import React, { Fragment } from 'react';
import { PageNavigationSection } from '../components/common';
import { HeroSection, IntroDesignPrincipleSection } from '../components/design-principle';
import { PageLayout } from '../components/foundation';
import { CustomHelmet } from '../components/seo';
import { useSiteMetadataQuery } from '../hooks/core';
import { getPageTitle } from '../utils/page.util';

const DesignPrinciplePage = ({ location }) => {
  const intl = useIntl();
  const { siteMetadata } = useSiteMetadataQuery();

  const designPrincipleTitle = getPageTitle(intl, location.pathname, siteMetadata.pageRoutes);

  return (
    <IntlContextConsumer>
      {({ language }) => (
        <Fragment>
          <CustomHelmet title={designPrincipleTitle} language={language} />
          <PageLayout>
            <HeroSection />
            <IntroDesignPrincipleSection />
            <PageNavigationSection />
          </PageLayout>
        </Fragment>
      )}
    </IntlContextConsumer>
  );
};

export default DesignPrinciplePage;
