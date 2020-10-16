import { useIntl } from 'gatsby-plugin-intl';
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { PageLayout } from '../components/foundation';
import { HeroSection, IntroForetSection } from '../components/home';

const HomePage = () => {
  const intl = useIntl();
  const homePageTitle = intl.formatMessage({ id: 'title' });

  return (
    <Fragment>
      <Helmet title={homePageTitle} defer={false} />
      <PageLayout>
        <HeroSection />
        <IntroForetSection />
      </PageLayout>
    </Fragment>
  );
};

export default HomePage;
