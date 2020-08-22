import { Heading1, Subtitle1 } from '@altenull/foret-react';
import { css } from '@emotion/core';
import React from 'react';
import { ResponsiveContentLayout } from '../common';
import { useIntl } from 'gatsby-plugin-intl';

const sectionStyles = css`
  position: relative;
  height: 100vh;
`;

const responsiveContentLayoutStyles = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const HeroSection = () => {
  const intl = useIntl();

  return (
    <section css={sectionStyles}>
      <ResponsiveContentLayout css={responsiveContentLayoutStyles}>
        <Heading1>{intl.formatMessage({ id: 'getStarted.hero.title' })}</Heading1>
        <Subtitle1>Our components are served as an npm packages.</Subtitle1>
        <Subtitle1>Our components are served both angular and react versions</Subtitle1>
      </ResponsiveContentLayout>
    </section>
  );
};

export default HeroSection;
