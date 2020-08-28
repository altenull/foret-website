import { Heading1, Subtitle1 } from '@altenull/foret-react';
import { css } from '@emotion/core';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { ResponsiveContentLayout } from '../common';

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
        <Heading1>{intl.formatMessage({ id: 'designPrinciple.hero.title' })}</Heading1>
        <Subtitle1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Subtitle1>
        <Subtitle1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Subtitle1>
      </ResponsiveContentLayout>
    </section>
  );
};

export default HeroSection;