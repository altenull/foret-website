import { Color } from '@altenull/foret-core';
import { css } from '@emotion/core';
import { useIntl } from 'gatsby-plugin-intl';
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Layout, PageNavigationSection } from '../components/common';
import { useGetSiteMetadata } from '../hooks';
import { getPageNavigationLinks, getPageTitle } from '../utils/page.utils';

const colorStyles = css`
  background-color: ${Color.Paper};
`;

const ColorPage = ({ location }) => {
  const intl = useIntl();
  const { siteMetadata } = useGetSiteMetadata();

  const currentPageRouteIndex = siteMetadata.pageRoutes.findIndex(({ key, ...rest }) =>
    location.pathname.includes(key)
  );

  const colorPageTitle = getPageTitle(intl, currentPageRouteIndex, siteMetadata.pageRoutes);
  const { prevLink, nextLink } = getPageNavigationLinks(intl, currentPageRouteIndex, siteMetadata.pageRoutes);

  return (
    <Fragment>
      <Helmet title={colorPageTitle} defer={false} />
      <Layout css={colorStyles}>
        <PageNavigationSection prevLink={prevLink} nextLink={nextLink} />
      </Layout>
    </Fragment>
  );
};

export default ColorPage;
