import { Color } from '@altenull/foret-core';
import { css } from '@emotion/core';
import { useIntl } from 'gatsby-plugin-intl';
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Layout, PageNavigationSection } from '../components/common';
import { ButtonSection, CheckboxSection, HeroSection } from '../components/components';
import { useGetSiteMetadata } from '../hooks';
import { getPageNavigationLinks, getPageTitle } from '../utils/page.utils';

const componentsStyles = css`
  background-color: ${Color.Paper};
`;

const ComponentsPage = ({ location }) => {
  const intl = useIntl();
  const { siteMetadata } = useGetSiteMetadata();

  const sectionComponentsWithHash = [
    {
      hash: '#button',
      component: ButtonSection,
    },
    {
      hash: '#checkbox',
      component: CheckboxSection,
    },
  ];

  const scrollTo = (hash) => {
    const targetElement = document.getElementById(hash);

    if (targetElement != null) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const currentPageRouteIndex = siteMetadata.pageRoutes.findIndex(({ key, ...rest }) =>
    location.pathname.includes(key)
  );

  const componentsTitle = getPageTitle(intl, currentPageRouteIndex, siteMetadata.pageRoutes);
  const { prevLink, nextLink } = getPageNavigationLinks(intl, currentPageRouteIndex, siteMetadata.pageRoutes);

  const getSections = () =>
    sectionComponentsWithHash.map(({ hash, component: SectionComponent }) => (
      <SectionComponent key={hash} headingHash={hash} />
    ));

  return (
    <Fragment>
      <Helmet title={componentsTitle} defer={false} />
      <Layout css={componentsStyles}>
        <HeroSection />
        {getSections()}
        <PageNavigationSection prevLink={prevLink} nextLink={nextLink} />
      </Layout>
    </Fragment>
  );
};

export default ComponentsPage;
