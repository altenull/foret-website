import { IntlContextConsumer, useIntl } from 'gatsby-plugin-intl';
import React, { Fragment } from 'react';
import { BrandColorSection, FeedbackColorSection, GrayscaleSection, HeroSection } from '../components/color';
import { PageNavigationSection } from '../components/common';
import { PageLayout } from '../components/foundation';
import { useSiteMetadataQuery } from '../hooks/core';
import { getPageTitle } from '../utils/page.util';
import { CustomHelmet } from '../components/seo';

const ColorPage = ({ location }) => {
  const intl = useIntl();
  const { siteMetadata } = useSiteMetadataQuery();

  const colorPageTitle = getPageTitle(intl, location.pathname, siteMetadata.pageRoutes);

  return (
    <IntlContextConsumer>
      {({ language }) => (
        <Fragment>
          <CustomHelmet title={colorPageTitle} language={language} />
          <PageLayout>
            <HeroSection />
            <BrandColorSection />
            <GrayscaleSection />
            <FeedbackColorSection />
            <PageNavigationSection />
          </PageLayout>
        </Fragment>
      )}
    </IntlContextConsumer>
  );
};

export default ColorPage;
