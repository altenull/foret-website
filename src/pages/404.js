import { Heading1, Paragraph } from '@altenull/foret-react';
import { useIntl } from 'gatsby-plugin-intl';
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Layout } from '../components/foundation';

export default function () {
  const intl = useIntl();

  return (
    <Fragment>
      <Helmet title={`404 Not Found | ${intl.formatMessage({ id: 'title' })}`} defer={false} />
      <Layout>
        <Heading1>{intl.formatMessage({ id: '404.title' })}</Heading1>
        <Paragraph>{intl.formatMessage({ id: '404.description' })}</Paragraph>
      </Layout>
    </Fragment>
  );
}
