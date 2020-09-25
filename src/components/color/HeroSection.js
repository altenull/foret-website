import { MarginalHeading1, Subtitle1 } from '@altenull/foret-react';
import { css } from '@emotion/core';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { ScrollDownIndicatorContainer } from '../../containers/common';
import { ResponsiveContentLayout } from '../foundation';

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
        <MarginalHeading1>{intl.formatMessage({ id: 'color.hero.title' })}</MarginalHeading1>
        <Subtitle1>{intl.formatMessage({ id: 'color.hero.subtitle1' })}</Subtitle1>
      </ResponsiveContentLayout>

      <ScrollDownIndicatorContainer />
    </section>
  );
};

export default HeroSection;
