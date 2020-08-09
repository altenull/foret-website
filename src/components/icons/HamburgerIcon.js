import { css } from '@emotion/core';
import React from 'react';

const hamburgerIconStyles = css`
  display: block;
  width: 24px;
  height: 16px;
  position: relative;
  cursor: pointer;
`;

const lineStyles = (color) => css`
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  border-radius: 1px;
  background-color: ${color};
  transition: top 0.3s ease-in-out, left 0.15s ease-in-out, right 0.15s ease-in-out, transform 0.3s ease-in-out;
`;

const topLineStyles = (isDrawerShowing) => css`
  top: ${isDrawerShowing ? '50%' : '0'};
  left: ${isDrawerShowing ? '50%' : '0'};
  right: ${isDrawerShowing ? '50%' : '0'};
`;

const middleLineStyles = (isDrawerShowing, direction) => css`
  top: 50%;
  transform: rotate(${isDrawerShowing ? 45 * direction + 'deg' : '0'});
`;

const bottomLineStyles = (isDrawerShowing) => css`
  top: ${isDrawerShowing ? '50%' : '100%'};
  left: ${isDrawerShowing ? '50%' : '0'};
  right: ${isDrawerShowing ? '50%' : '0'};
`;

const HamburgerIcon = ({ isDrawerShowing, color }) => {
  return (
    <span css={hamburgerIconStyles}>
      <span css={[lineStyles(color), topLineStyles(isDrawerShowing)]} />
      <span css={[lineStyles(color), middleLineStyles(isDrawerShowing, 1)]} />
      <span css={[lineStyles(color), middleLineStyles(isDrawerShowing, -1)]} />
      <span css={[lineStyles(color), bottomLineStyles(isDrawerShowing)]} />
    </span>
  );
};

export default HamburgerIcon;
