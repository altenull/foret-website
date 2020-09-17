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

const HeroSection = React.forwardRef((props, ref) => {
  const intl = useIntl();

  return (
    <section css={sectionStyles} ref={ref} {...props}>
      <ResponsiveContentLayout css={responsiveContentLayoutStyles}>
        <MarginalHeading1>{intl.formatMessage({ id: 'components.hero.title' })}</MarginalHeading1>
        <Subtitle1>{intl.formatMessage({ id: 'components.hero.subtitle1' })}</Subtitle1>
        <Subtitle1>{intl.formatMessage({ id: 'components.hero.subtitle2' })}</Subtitle1>
      </ResponsiveContentLayout>
    </section>
  );
});

export default HeroSection;
