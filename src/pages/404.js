import { Heading1, Paragraph } from '@altenull/foret-react';
import { useIntl } from 'gatsby-plugin-intl';
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { PageLayout } from '../components/foundation';

export default function () {
  const intl = useIntl();

  return (
    <Fragment>
      <Helmet title={`404 Not Found | ${intl.formatMessage({ id: 'title' })}`} defer={false} />
      <PageLayout>
        <Heading1 enableResponsive>{intl.formatMessage({ id: '404.title' })}</Heading1>
        <Paragraph enableResponsive>{intl.formatMessage({ id: '404.description' })}</Paragraph>
      </PageLayout>
    </Fragment>
  );
}
