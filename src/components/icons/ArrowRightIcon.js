import { Color } from '@altenull/foret-core';
import { css } from '@emotion/core';
import React from 'react';

const arrowRightIconStyles = (size, color) => css`
  display: block;
  width: ${size}px;
  height: ${size}px;
  fill: ${color};
  cursor: pointer;
`;

const ArrowRightIcon = ({ size = 24, color = Color.Ink, ...props }) => {
  return (
    <svg
      css={arrowRightIconStyles(size, color)}
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 477.2 477.2'>
      <path d='M360.7 229.1l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5 -215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1C365.9 242.9 365.9 234.3 360.7 229.1z' />
    </svg>
  );
};

export default ArrowRightIcon;
