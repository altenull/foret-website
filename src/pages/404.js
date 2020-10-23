import { IntlContextConsumer, useIntl } from 'gatsby-plugin-intl';
import React, { Fragment } from 'react';
import { HeroSection } from '../components/404';
import { PageLayout } from '../components/foundation';
import { CustomHelmet } from '../components/seo';

export default function () {
  const intl = useIntl();
  const notFoundPageTitle = `Page Not Found | ${intl.formatMessage({ id: 'title' })}`;

  return (
    <IntlContextConsumer>
      {({ language }) => (
        <Fragment>
          <CustomHelmet title={notFoundPageTitle} language={language} />
          <PageLayout>
            <HeroSection />
          </PageLayout>
        </Fragment>
      )}
    </IntlContextConsumer>
  );
}
