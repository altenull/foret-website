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

const lineStyles = css`
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  border-radius: 1px;
  background-color: ${Color.Ink};
  transition: top 0.3s ease-in-out, left 0.15s ease-in-out, right 0.15s ease-in-out, transform 0.3s ease-in-out;
`;

const topLineStyles = (isDrawerShowing) => css`
  ${lineStyles};
  top: ${isDrawerShowing ? '50%' : '0'};
  left: ${isDrawerShowing ? '50%' : '0'};
  right: ${isDrawerShowing ? '50%' : '0'};
`;

const middleLineStyles = (isDrawerShowing, direction) => css`
  ${lineStyles};
  top: 50%;
  transform: rotate(${isDrawerShowing ? 45 * direction + 'deg' : '0'});
`;

const bottomLineStyles = (isDrawerShowing) => css`
  ${lineStyles};
  top: ${isDrawerShowing ? '50%' : '100%'};
  left: ${isDrawerShowing ? '50%' : '0'};
  right: ${isDrawerShowing ? '50%' : '0'};
`;

const HamburgerIcon = ({ isDrawerShowing }) => {
  return (
    <span css={hamburgerIconStyles}>
      <span css={topLineStyles(isDrawerShowing)} />
      <span css={middleLineStyles(isDrawerShowing, 1)} />
      <span css={middleLineStyles(isDrawerShowing, -1)} />
      <span css={bottomLineStyles(isDrawerShowing)} />
    </span>
  );
};

export default HamburgerIcon;
