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

const logoStyles = (isScrolled) => css`
  margin-right: 16px;
  transition: width 0.3s, height 0.3s;
  width: ${isScrolled ? '56px' : '80px'} !important;
  height: ${isScrolled ? '56px' : '80px'} !important;
`;

const logoTitleStyles = (isScrolled) => css`
  font-size: 1.5rem;
  white-space: nowrap;
  color: ${Color.Ink};
  visibility: ${isScrolled ? 'hidden' : 'visible'};
  max-width: ${isScrolled ? '0' : 'initial'};
  opacity: ${isScrolled ? '0' : '1'};
  transition: ${isScrolled ? 'opacity 0.3s, visibility 0ms 0.3s, max-width 0ms 0.3s' : 'opacity 0.3s'};
`;

const HeaderLogo = ({ logoFixed, logoTitle, isScrolled }) => {
  return (
    <Link to={'/'} css={headerLogoStyles}>
      <Img fixed={logoFixed} css={logoStyles(isScrolled)} />
      <span css={logoTitleStyles(isScrolled)}>{logoTitle}</span>
    </Link>
  );
};

export default HeaderLogo;
