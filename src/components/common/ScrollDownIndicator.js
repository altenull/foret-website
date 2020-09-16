import { css, keyframes } from '@emotion/core';
import React from 'react';
import { ArrowDownIcon } from '../icons';

const breatheDown = keyframes`
  0% {
    transform: translateY(0) scale(1.1);
  }
  40% {
    transform: translateY(14px) scale(0.8);
  }
  55% {
    transform: translateY(14px) scale(0.8);
  }
  100% {
    transform: translateY(0) scale(1.1);
  }
`;

const scrollDownIndicatorStyles = (hasScrolledDown) => css`
  padding: 8px;
  animation: ${!hasScrolledDown && breatheDown} 3.2s infinite;
`;

const ScrollDownIndicator = ({ hasScrolledDown = false }) => {
  return <ArrowDownIcon css={scrollDownIndicatorStyles(hasScrolledDown)} />;
};

export default ScrollDownIndicator;
