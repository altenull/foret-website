import { Color } from '@altenull/foret-core';
import { css } from '@emotion/core';
import { useIntl } from 'gatsby-plugin-intl';
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { ContentSection, HeroSection } from '../components/color';
import { PageNavigationSection } from '../components/common';
import { Layout } from '../components/foundation';
import { useSiteMetadataQuery } from '../hooks/core';
import { getCurrentPageRouteIndex, getPageTitle } from '../utils/page.util';

const layoutStyles = css`
  background-color: ${Color.Paper};
`;

const ColorPage = ({ location }) => {
  const intl = useIntl();
  const { siteMetadata } = useSiteMetadataQuery();

  const currentPageRouteIndex = getCurrentPageRouteIndex(location.pathname, siteMetadata.pageRoutes);
  const colorPageTitle = getPageTitle(intl, currentPageRouteIndex, siteMetadata.pageRoutes);

  return (
    <Fragment>
      <Helmet title={colorPageTitle} defer={false} />
      <Layout css={layoutStyles}>
        <HeroSection />
        <ContentSection />
        <PageNavigationSection />
      </Layout>
    </Fragment>
  );
};

export default ColorPage;
