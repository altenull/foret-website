import { css } from '@emotion/core';
import React from 'react';
import { ScrollDownIndicatorContainer } from '../../containers/common';
import { ResponsiveContentLayout } from '../foundation';
import { fadeInSalAttributes } from '../../utils/animation.util';

const sectionStyles = css`
  position: relative;
  height: 100vh;
`;

const responsiveContentLayoutPositionerStyles = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const BaseHeroSection = ({ children, hasScrollDownIndicator = false }) => {
  return (
    <section css={sectionStyles} {...fadeInSalAttributes()}>
      <ResponsiveContentLayout css={responsiveContentLayoutPositionerStyles}>{children}</ResponsiveContentLayout>
      {hasScrollDownIndicator && <ScrollDownIndicatorContainer />}
    </section>
  );
};

export default BaseHeroSection;
