import { Heading1, PrimaryButton, Subtitle1 } from '@altenull/foret-react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { PageRouteEnum } from '../../enums/core/page-route.enum';

const sectionStyles = css`
  position: relative;
  height: 100vh;
`;

const coverPositionerStyles = css`
  position: absolute;
  left: 50%;
  top: 30%;
`;

const mainTitleStyles = css`
  margin-bottom: 16px;
`;

const subtitleStyles = css`
  max-width: 592px;
  margin-bottom: 40px;
`;

const linkStyles = css`
  text-decoration: none;
`;

const HeroSection = () => {
  const intl = useIntl();

  return (
    <section css={sectionStyles}>
      <div css={coverPositionerStyles}>
        <Heading1 css={mainTitleStyles}>{intl.formatMessage({ id: 'home.hero.title' })}</Heading1>
        <Subtitle1 css={subtitleStyles}>{intl.formatMessage({ id: 'home.hero.subtitle' })}</Subtitle1>
        <Link to={`/${PageRouteEnum.GetStarted}`} css={linkStyles}>
          <PrimaryButton>{intl.formatMessage({ id: 'home.hero.getStartedButton' })}</PrimaryButton>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
