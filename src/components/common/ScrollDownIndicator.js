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

const scrollDownIndicatorStyles = (theme, shouldHideScrollDownIndicator) => css`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 40px;
  padding: 8px;
  margin: 0 auto;
  z-index: ${theme.zIndexes.scrollDownIndicator};
  transition: opacity ${theme.duration.slow} ease-in-out;
  opacity: ${shouldHideScrollDownIndicator ? '0' : '1'};
  pointer-events: ${shouldHideScrollDownIndicator && 'none'};
  animation: ${breatheDown} 3.2s infinite;
`;

const ScrollDownIndicator = ({ shouldHideScrollDownIndicator = false, ...props }) => {
  return <ArrowDownIcon css={(theme) => scrollDownIndicatorStyles(theme, shouldHideScrollDownIndicator)} {...props} />;
};

export default ScrollDownIndicator;
