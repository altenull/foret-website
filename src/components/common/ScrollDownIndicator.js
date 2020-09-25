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

const scrollDownIndicatorStyles = (shouldHideScrollDownIndicator) => css`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 40px;
  padding: 8px;
  margin: 0 auto;
  z-index: 500; /* TODO: Manage z-index in one place */
  transition: opacity 0.3s ease-in-out;
  opacity: ${shouldHideScrollDownIndicator ? '0' : '1'};
  pointer-events: ${shouldHideScrollDownIndicator && 'none'};
  animation: ${breatheDown} 3.2s infinite;
`;

const ScrollDownIndicator = ({ shouldHideScrollDownIndicator = false, ...props }) => {
  return <ArrowDownIcon css={scrollDownIndicatorStyles(shouldHideScrollDownIndicator)} {...props} />;
};

export default ScrollDownIndicator;
