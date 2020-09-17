import { Color } from '@altenull/foret-core';
import { css } from '@emotion/core';
import { useIntl } from 'gatsby-plugin-intl';
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { PageNavigationSection } from '../components/common';
import { ContentSection, HeroSection } from '../components/design-principle';
import { Layout } from '../components/foundation';
import { useSiteMetadataQuery } from '../hooks/core';
import { getCurrentPageRouteIndex, getPageNavigationLinks, getPageTitle } from '../utils/page.util';

const layoutStyles = css`
  background-color: ${Color.Paper};
`;

const DesignPrinciplePage = ({ location }) => {
  const intl = useIntl();
  const { siteMetadata } = useSiteMetadataQuery();

  const currentPageRouteIndex = getCurrentPageRouteIndex(location.pathname, siteMetadata.pageRoutes);
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
