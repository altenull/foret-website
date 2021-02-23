import { css } from '@emotion/core';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { HeaderLogo } from '../../components/foundation';
import { HamburgerIcon } from '../../components/icons';
import { useIsMounted } from '../../hooks/core';
import { useLogoImageQuery } from '../../hooks/foundation';
import { isDrawerShowingState } from '../../store/atoms/view.atoms';

const headerStyles = (theme, isScrolled, isDrawerShowing) => css`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 80px;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  z-index: ${theme.zIndexes.header};
  pointer-events: none;
  background-color: ${isDrawerShowing ? 'transparent' : isScrolled ? theme.colors.paper : 'transparent'};

  ${theme.mediaQueries.viewPort9} {
    width: calc(100% - 2rem);
    max-width: 1440px;
    top: 56px;
    padding: 0;
    background-color: transparent;
  }
`;

const hamburgerMenuStyles = css`
  width: 24px;
  height: 18px;
  padding: 8px 6px;
  margin: auto 0;
  pointer-events: all;
  cursor: pointer;
`;

const HeaderContainer = () => {
  const [isDrawerShowing, setIsDrawerShowing] = useRecoilState(isDrawerShowingState);
  const [isScrolled, setIsScrolled] = useState(false);

  const headerRef = useRef();

  const isMounted = useIsMounted();
  const getLogoImageResponse = useLogoImageQuery();

  const handleScroll = useCallback(() => {
    const newIsScrolled = window.scrollY >= headerRef.current.getBoundingClientRect().bottom;

    if (newIsScrolled !== isScrolled) {
      setIsScrolled(newIsScrolled);
    }
  }, [headerRef, isScrolled]);

  useEffect(() => {
    if (isMounted) {
      // Check whether logo wrapper should be animated or not at initial load
      handleScroll();
    }
  }, [isMounted, handleScroll]);

  useEffect(() => {
    if (isMounted) {
      document.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [isMounted, isScrolled, handleScroll]);

  const toggleDrawer = () => {
    setIsDrawerShowing(!isDrawerShowing);
  };

  return (
    <header css={(theme) => headerStyles(theme, isScrolled, isDrawerShowing)} ref={headerRef}>
      <HeaderLogo
        logoFixed={getLogoImageResponse.logoCircleImage}
        logoTitle={'Foret Design System'}
        shouldHideLogoTitle={isScrolled}
      />

      <span css={hamburgerMenuStyles} role={'toolbar'} onClick={toggleDrawer} onKeyDown={toggleDrawer}>
        <HamburgerIcon shouldTransformToCloseIcon={isDrawerShowing} />
      </span>
    </header>
  );
};

export default HeaderContainer;
