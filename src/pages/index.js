import { IntlContextConsumer, useIntl } from 'gatsby-plugin-intl';
import React, { Fragment } from 'react';
import { PageLayout } from '../components/foundation';
import { HeroSection, IntroForetSection } from '../components/home';
import { CustomHelmet } from '../components/seo';

const HomePage = () => {
  const intl = useIntl();

  const homePageTitle = intl.formatMessage({ id: 'title' });

  return (
    <IntlContextConsumer>
      {({ language }) => (
        <Fragment>
          <CustomHelmet title={homePageTitle} language={language} />
          <PageLayout>
            <HeroSection />
            <IntroForetSection />
          </PageLayout>
        </Fragment>
      )}
    </IntlContextConsumer>
  );
};

export default HomePage;
