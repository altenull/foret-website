import { Heading1, Subtitle1 } from '@altenull/foret-react';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { BaseHeroSection } from '../common';

const HeroSection = () => {
  const intl = useIntl();

  return (
    <BaseHeroSection hasScrollDownIndicator={true}>
      <Heading1 enableMargin enableResponsive>
        {intl.formatMessage({ id: 'color.hero.title' })}
      </Heading1>
      <Subtitle1>{intl.formatMessage({ id: 'color.hero.subtitle1' })}</Subtitle1>
    </BaseHeroSection>
  );
};

export default HeroSection;
