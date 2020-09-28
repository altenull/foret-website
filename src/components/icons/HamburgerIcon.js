import { Color } from '@altenull/foret-core';
import { css } from '@emotion/core';
import React from 'react';

const hamburgerIconStyles = css`
  display: block;
  width: 24px;
  height: 16px;
  position: relative;
  cursor: pointer;
`;

const lineStyles = (theme, color) => css`
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  border-radius: 1px;
  background-color: ${color};
  transition: top ${theme.duration.slow} ease-in-out, left ${theme.duration.normal} ease-in-out,
    right ${theme.duration.normal} ease-in-out, transform ${theme.duration.slow} ease-in-out;
`;

const topLineStyles = (shouldTransformToCloseIcon) => css`
  top: ${shouldTransformToCloseIcon ? '50%' : '0'};
  left: ${shouldTransformToCloseIcon ? '50%' : '0'};
  right: ${shouldTransformToCloseIcon ? '50%' : '0'};
`;

const middleLineStyles = (shouldTransformToCloseIcon, direction) => css`
  top: 50%;
  transform: rotate(${shouldTransformToCloseIcon ? 45 * direction + 'deg' : '0'});
`;

const bottomLineStyles = (shouldTransformToCloseIcon) => css`
  top: ${shouldTransformToCloseIcon ? '50%' : '100%'};
  left: ${shouldTransformToCloseIcon ? '50%' : '0'};
  right: ${shouldTransformToCloseIcon ? '50%' : '0'};
`;

const HamburgerIcon = ({ shouldTransformToCloseIcon, color = Color.Ink, ...props }) => {
  return (
    <span css={hamburgerIconStyles} {...props}>
      <span css={(theme) => [lineStyles(theme, color), topLineStyles(shouldTransformToCloseIcon)]} />
      <span css={(theme) => [lineStyles(theme, color), middleLineStyles(shouldTransformToCloseIcon, 1)]} />
      <span css={(theme) => [lineStyles(theme, color), middleLineStyles(shouldTransformToCloseIcon, -1)]} />
      <span css={(theme) => [lineStyles(theme, color), bottomLineStyles(shouldTransformToCloseIcon)]} />
    </span>
  );
};

export default HamburgerIcon;
