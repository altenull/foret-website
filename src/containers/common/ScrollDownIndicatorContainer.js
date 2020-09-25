import { css, keyframes } from '@emotion/core';
import React from 'react';
import { ArrowDownIcon } from '../../components/icons';
import { useIsScrolled } from '../../hooks/core';

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

const scrollDownIndicatorStyles = (isScrolled) => css`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 40px;
  padding: 8px;
  margin: 0 auto;
  z-index: 500; /* TODO: Manage z-index in one place */
  transition: opacity 0.3s ease-in-out;
  opacity: ${isScrolled ? '0' : '1'};
  pointer-events: ${isScrolled && 'none'};
  animation: ${breatheDown} 3.2s infinite;
`;

const ScrollDownIndicatorContainer = () => {
  const isScrolled = useIsScrolled();

  const handleClick = () => {
    if (window !== undefined) {
      const HEADER_CONTAINER_BOTTOM = 136;

      window.scrollTo({
        top: window.innerHeight - HEADER_CONTAINER_BOTTOM,
        behavior: 'smooth',
      });
    }
  };

  return <ArrowDownIcon css={scrollDownIndicatorStyles(isScrolled)} onClick={() => handleClick()} />;
};

export default ScrollDownIndicatorContainer;
