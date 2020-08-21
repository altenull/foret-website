import { Heading1, Subtitle1 } from '@altenull/foret-react';
import { css } from '@emotion/core';
import React from 'react';
import { ResponsiveContentLayout } from '../common';
import { useIntl } from 'gatsby-plugin-intl';

const sectionStyles = css`
  padding: 24rem 0 16rem;
`;

const HeroSection = () => {
  const intl = useIntl();

  return (
    <section css={sectionStyles}>
      <ResponsiveContentLayout>
        <Heading1>{intl.formatMessage({ id: 'getStarted.hero.title' })}</Heading1>
        <Subtitle1>Our components are served as an npm packages.</Subtitle1>
        <Subtitle1>Our components are served both angular and react versions</Subtitle1>
      </ResponsiveContentLayout>
    </section>
  );
};

export default HeroSection;
