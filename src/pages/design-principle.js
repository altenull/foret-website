import { Color } from '@altenull/foret-core';
import { css } from '@emotion/core';
import { useIntl } from 'gatsby-plugin-intl';
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Layout, PageNavigationSection } from '../components/common';
import { ContentSection, HeroSection } from '../components/design-principle';
import { useGetSiteMetadata } from '../hooks';
import { getPageNavigationLinks, getPageTitle } from '../utils/page.utils';

const layoutStyles = css`
  background-color: ${Color.Paper};
`;

const DesignPrinciplePage = ({ location }) => {
  const intl = useIntl();
  const { siteMetadata } = useGetSiteMetadata();

  const currentPageRouteIndex = siteMetadata.pageRoutes.findIndex(({ key, ...rest }) =>
    location.pathname.includes(key)
  );

  const designPrincipleTitle = getPageTitle(intl, currentPageRouteIndex, siteMetadata.pageRoutes);
  const { prevLink, nextLink } = getPageNavigationLinks(intl, currentPageRouteIndex, siteMetadata.pageRoutes);

  return (
    <Fragment>
      <Helmet title={designPrincipleTitle} defer={false} />
      <Layout css={layoutStyles}>
        <HeroSection />
        <ContentSection />
        <PageNavigationSection prevLink={prevLink} nextLink={nextLink} />
      </Layout>
    </Fragment>
  );
};

export default DesignPrinciplePage;
