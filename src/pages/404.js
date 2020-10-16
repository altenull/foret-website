import { useIntl } from 'gatsby-plugin-intl';
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { HeroSection } from '../components/404';
import { PageLayout } from '../components/foundation';

export default function () {
  const intl = useIntl();

  return (
    <Fragment>
      <Helmet title={`Page Not Found | ${intl.formatMessage({ id: 'title' })}`} defer={false} />
      <PageLayout>
        <HeroSection />
      </PageLayout>
    </Fragment>
  );
}
