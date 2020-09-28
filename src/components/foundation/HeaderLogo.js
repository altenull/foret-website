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

const logoStyles = (theme, shouldHideLogoTitle) => css`
  margin-right: 16px;
  transition: width ${theme.duration.slow}, height ${theme.duration.slow};
  width: ${shouldHideLogoTitle ? '56px' : '80px'} !important;
  height: ${shouldHideLogoTitle ? '56px' : '80px'} !important;
`;

const logoTitleStyles = (theme, shouldHideLogoTitle) => css`
  font-size: 1.5rem;
  white-space: nowrap;
  color: ${theme.colors.ink};
  visibility: ${shouldHideLogoTitle ? 'hidden' : 'visible'};
  max-width: ${shouldHideLogoTitle ? '0' : 'initial'};
  opacity: ${shouldHideLogoTitle ? '0' : '1'};
  transition: ${shouldHideLogoTitle
    ? `opacity ${theme.duration.slow}, visibility 0ms ${theme.duration.slow}, max-width 0ms ${theme.duration.slow}`
    : `opacity ${theme.duration.slow}`};
`;

const HeaderLogo = ({ logoFixed, logoTitle, shouldHideLogoTitle }) => {
  return (
    <Link to={'/'} css={headerLogoStyles}>
      <Img fixed={logoFixed} css={(theme) => logoStyles(theme, shouldHideLogoTitle)} />
      <span css={(theme) => logoTitleStyles(theme, shouldHideLogoTitle)}>{logoTitle}</span>
    </Link>
  );
};

export default HeaderLogo;
