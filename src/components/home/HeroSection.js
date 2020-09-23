import { Color } from '@altenull/foret-core';
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

const twoColumnsCoverStyles = css`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 4rem);
  height: calc(100% - 220px);
  max-width: 1440px;
  padding-top: 220px;
  margin: 0 auto;
`;

const columnStyles = css`
  flex: 1;
`;

const leftColumnContentPositionerStyles = css`
  margin: 220px 0 0 96px;
`;

const dividerStyles = css`
  flex-basis: 2px;
  min-height: 100%;
  background-color: ${Color.ForetGreen};
`;

const mainTitleStyles = css`
  margin-bottom: 16px;
`;

const subtitleStyles = css`
  max-width: 488px;
  margin-bottom: 40px;
`;

const linkStyles = css`
  text-decoration: none;
`;

const HeroSection = () => {
  const intl = useIntl();

  return (
    <section css={sectionStyles}>
      <div css={twoColumnsCoverStyles}>
        <div css={columnStyles}>
          <div css={leftColumnContentPositionerStyles}>
            <Heading1 css={mainTitleStyles}>{intl.formatMessage({ id: 'home.hero.title' })}</Heading1>
            <Subtitle1 css={subtitleStyles}>{intl.formatMessage({ id: 'home.hero.subtitle' })}</Subtitle1>
            <Link to={`/${PageRouteEnum.GetStarted}`} css={linkStyles}>
              <PrimaryButton>{intl.formatMessage({ id: 'home.hero.getStartedButton' })}</PrimaryButton>
            </Link>
          </div>
        </div>

        <div css={dividerStyles} />

        <div css={columnStyles}></div>
      </div>
    </section>
  );
};

export default HeroSection;
