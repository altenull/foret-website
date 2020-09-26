import { Color } from '@altenull/foret-core';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

const headerLogoStyles = css`
  display: flex;
  align-items: center;
  text-decoration: none;
  pointer-events: all;
`;

const logoStyles = (shouldHideLogoTitle) => css`
  margin-right: 16px;
  transition: width 0.3s, height 0.3s;
  width: ${shouldHideLogoTitle ? '56px' : '80px'} !important;
  height: ${shouldHideLogoTitle ? '56px' : '80px'} !important;
`;

const logoTitleStyles = (shouldHideLogoTitle) => css`
  font-size: 1.5rem;
  white-space: nowrap;
  color: ${Color.Ink};
  visibility: ${shouldHideLogoTitle ? 'hidden' : 'visible'};
  max-width: ${shouldHideLogoTitle ? '0' : 'initial'};
  opacity: ${shouldHideLogoTitle ? '0' : '1'};
  transition: ${shouldHideLogoTitle ? 'opacity 0.3s, visibility 0ms 0.3s, max-width 0ms 0.3s' : 'opacity 0.3s'};
`;

const HeaderLogo = ({ logoFixed, logoTitle, shouldHideLogoTitle }) => {
  return (
    <Link to={'/'} css={headerLogoStyles}>
      <Img fixed={logoFixed} css={logoStyles(shouldHideLogoTitle)} />
      <span css={logoTitleStyles(shouldHideLogoTitle)}>{logoTitle}</span>
    </Link>
  );
};

export default HeaderLogo;
