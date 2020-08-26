import { css } from '@emotion/core';
import React from 'react';
import PageNavigation from './PageNavigation';
import ResponsiveContentLayout from './ResponsiveContentLayout';

const sectionStyles = css`
  margin-bottom: 64px;
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
