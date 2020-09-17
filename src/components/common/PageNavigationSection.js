import { css } from '@emotion/core';
import React from 'react';
import { ResponsiveContentLayout } from '../foundation';
import PageNavigation from './PageNavigation';

const sectionStyles = css`
  margin: 64px 0 104px;
`;

const PageNavigationSection = ({ prevLink, nextLink }) => {
  return (
    <section css={sectionStyles}>
      <ResponsiveContentLayout>
        <PageNavigation prevLink={prevLink} nextLink={nextLink} />
      </ResponsiveContentLayout>
    </section>
  );
};

export default PageNavigationSection;
