import { Heading1, PrimaryButton, Subtitle1 } from '@altenull/foret-react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { PageRouteEnum } from '../../enums/core/page-route.enum';
import { BaseHeroSection } from '../common';

const mainTitleStyles = (theme) => css`
  font-size: 72px !important;
  margin-bottom: 16px;

  ${theme.mediaQueries.viewPort9} {
    font-size: 88px !important;
  }
`;

const subtitleStyles = (theme) => css`
  font-size: 20px !important;
  margin-bottom: 40px;

  ${theme.mediaQueries.viewPort9} {
    font-size: 24px !important;
    max-width: 762px;
  }
`;

const linkStyles = css`
  text-decoration: none;
`;

const HeroSection = () => {
  const intl = useIntl();

  return (
    <BaseHeroSection>
      <Heading1 css={(theme) => mainTitleStyles(theme)} enableResponsive>
        {intl.formatMessage({ id: 'home.hero.title' })}
      </Heading1>

      <Subtitle1 css={(theme) => subtitleStyles(theme)}>{intl.formatMessage({ id: 'home.hero.subtitle' })}</Subtitle1>

      <Link to={`/${PageRouteEnum.GetStarted}`} css={linkStyles}>
        <PrimaryButton>{intl.formatMessage({ id: 'home.hero.getStartedButton' })}</PrimaryButton>
      </Link>
    </BaseHeroSection>
  );
};

export default HeroSection;
