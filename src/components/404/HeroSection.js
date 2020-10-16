import { Heading1, PrimaryButton, Subtitle1 } from '@altenull/foret-react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { useLogoImageQuery } from '../../hooks/foundation';
import { GrayscaleLogo, ResponsiveContentLayout } from '../foundation';

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

const twoColumnsCoverStyles = (theme) => css`
  display: flex;
  flex-direction: column;
  width: calc(100% - 4rem);
  height: calc(100% - 220px);
  max-width: 1440px;
  margin: 0 auto;

  ${theme.mediaQueries.viewPort9} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const subtitle1Styles = css`
  margin-bottom: 40px;
`;

const linkStyles = css`
  text-decoration: none;
`;

const leftColumnStyles = (theme) => css`
  margin-bottom: 64px;

  ${theme.mediaQueries.viewPort9} {
    margin-bottom: 0;
  }
`;

const rightColumnStyles = (theme) => css`
  display: flex;
  justify-content: center;

  ${theme.mediaQueries.viewPort9} {
    justify-content: initial;
    align-items: center;
  }
`;

const HeroSection = () => {
  const intl = useIntl();
  const getLogoImageResponse = useLogoImageQuery();

  return (
    <section css={sectionStyles}>
      <ResponsiveContentLayout css={responsiveContentLayoutStyles}>
        <div css={(theme) => twoColumnsCoverStyles(theme)}>
          <div css={(theme) => leftColumnStyles(theme)}>
            <Heading1 enableMargin enableResponsive>
              {intl.formatMessage({ id: '404.title' })}
            </Heading1>
            <Subtitle1 css={subtitle1Styles}>{intl.formatMessage({ id: '404.description' })}</Subtitle1>

            <Link to={'/'} css={linkStyles}>
              <PrimaryButton>Foret Home</PrimaryButton>
            </Link>
          </div>

          <div css={(theme) => rightColumnStyles(theme)}>
            <GrayscaleLogo logoFixed={getLogoImageResponse.logoCircleGrayscaleImage} />
          </div>
        </div>
      </ResponsiveContentLayout>
    </section>
  );
};

export default HeroSection;
