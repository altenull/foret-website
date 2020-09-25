import React from 'react';
import { ScrollDownIndicator } from '../../components/common';
import { useIsScrolled } from '../../hooks/core';

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

  return <ScrollDownIndicator shouldHideScrollDownIndicator={isScrolled} onClick={() => handleClick()} />;
};

export default ScrollDownIndicatorContainer;
