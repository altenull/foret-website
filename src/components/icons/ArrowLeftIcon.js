import { Color } from '@altenull/foret-core';
import { css } from '@emotion/core';
import React from 'react';

const arrowLeftIconStyles = (size) => css`
  display: block;
  width: ${size}px;
  height: ${size}px;
  fill: ${Color.Ink};
  cursor: pointer;
`;

const ArrowLeftIcon = ({ size = 24 }) => {
  return (
    <svg css={arrowLeftIconStyles(size)} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 477.2 477.2'>
      <path d='M145.2 238.6l215.5-215.5c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0l-225.1 225.1c-5.3 5.3-5.3 13.8 0 19.1l225.1 225c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1L145.2 238.6z' />
    </svg>
  );
};

export default ArrowLeftIcon;
