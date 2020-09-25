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

const HamburgerIcon = ({ shouldTransformToCloseIcon, ...props }) => {
  return (
    <span css={hamburgerIconStyles} {...props}>
      <span css={[lineStyles, topLineStyles(shouldTransformToCloseIcon)]} />
      <span css={[lineStyles, middleLineStyles(shouldTransformToCloseIcon, 1)]} />
      <span css={[lineStyles, middleLineStyles(shouldTransformToCloseIcon, -1)]} />
      <span css={[lineStyles, bottomLineStyles(shouldTransformToCloseIcon)]} />
    </span>
  );
};

export default HamburgerIcon;
