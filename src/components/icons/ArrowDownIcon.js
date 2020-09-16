import { Color } from '@altenull/foret-core';
import { css } from '@emotion/core';
import React from 'react';

const arrowDownIconStyles = (size) => css`
  display: block;
  width: ${size}px;
  height: ${size}px;
  fill: ${Color.Ink};
  cursor: pointer;
`;

const ArrowDownIcon = ({ size = 24, ...props }) => {
  return (
    <svg css={arrowDownIconStyles(size)} {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
      <path d='M505.8 123.6c-8.3-8.3-21.8-8.3-30.2 0L256 343.2 36.4 123.6c-8.3-8.3-21.8-8.3-30.2 0s-8.3 21.8 0 30.2l234.7 234.7c4.2 4.2 9.6 6.3 15.1 6.3 5.5 0 10.9-2.1 15.1-6.3l234.7-234.7C514.1 145.4 514.1 131.9 505.8 123.6z' />
    </svg>
  );
};

export default ArrowDownIcon;
