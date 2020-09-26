import { css } from '@emotion/core';
import React from 'react';
import { PageNavigationContainer } from '../../containers/common';
import { ResponsiveContentLayout } from '../foundation';

const sectionStyles = css`
  margin: 64px 0 104px;
`;

const PageNavigationSection = () => {
  return (
    <section css={sectionStyles}>
      <ResponsiveContentLayout>
        <PageNavigationContainer />
      </ResponsiveContentLayout>
    </section>
  );
};

export default PageNavigationSection;
