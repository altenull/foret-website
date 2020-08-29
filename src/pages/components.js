import { Color } from '@altenull/foret-core';
import { css } from '@emotion/core';
import { useIntl } from 'gatsby-plugin-intl';
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Layout, PageNavigationSection } from '../components/common';
import { useGetSiteMetadata } from '../hooks';
import { getPageNavigationLinks, getPageTitle } from '../utils/page.utils';

const componentsStyles = css`
  background-color: ${Color.Paper};
`;

const ComponentsPage = ({ location }) => {
  const intl = useIntl();
  const { siteMetadata } = useGetSiteMetadata();

  const currentPageRouteIndex = siteMetadata.pageRoutes.findIndex(({ key, ...rest }) =>
    location.pathname.includes(key)
  );

  const componentsTitle = getPageTitle(intl, currentPageRouteIndex, siteMetadata.pageRoutes);
  const { prevLink, nextLink } = getPageNavigationLinks(intl, currentPageRouteIndex, siteMetadata.pageRoutes);

  return (
    <Fragment>
      <Helmet title={componentsTitle} defer={false} />
      <Layout css={componentsStyles}>
        <PageNavigationSection prevLink={prevLink} nextLink={nextLink} />
      </Layout>
    </Fragment>
  );
};

export default ComponentsPage;
