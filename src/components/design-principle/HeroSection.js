import { MarginalHeading1, Subtitle1 } from '@altenull/foret-react';
import { css } from '@emotion/core';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
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
        <MarginalHeading1>{intl.formatMessage({ id: 'designPrinciple.hero.title' })}</MarginalHeading1>
        <Subtitle1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Subtitle1>
        <Subtitle1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Subtitle1>
      </ResponsiveContentLayout>
    </section>
  );
};

export default HeroSection;
