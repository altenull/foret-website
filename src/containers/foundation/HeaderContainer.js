import { css } from '@emotion/core';
import { useIntl } from 'gatsby-plugin-intl';
import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { HeaderLogo } from '../../components/foundation';
import { HamburgerIcon } from '../../components/icons';
import { useIsMounted } from '../../hooks/core';
import { useLogoImageQuery } from '../../hooks/foundation';
import DrawerContainer from './DrawerContainer';

const headerStyles = (theme) => css`
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 2rem);
  height: 80px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  z-index: ${theme.zIndexes.header};
  pointer-events: none;
  ${theme.mediaQueries.viewPort9} {
    width: calc(100% - 4rem);
    max-width: 1440px;
    top: 56px;
  }
`;

const hamburgerMenuStyles = css`
  display: flex;
  align-items: center;
  pointer-events: all;
`;

const HeaderContainer = () => {
  const [isDrawerShowing, setIsDrawerShowing] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const headerRef = useRef();

  const intl = useIntl();
  const isMounted = useIsMounted();
  const getLogoImageResponse = useLogoImageQuery();

  const handleScroll = useCallback(() => {
    const newIsScrolled = window.scrollY >= headerRef.current.getBoundingClientRect().bottom;

    if (newIsScrolled !== isScrolled) {
      setIsScrolled(newIsScrolled);
    }
  }, [isScrolled]);

  const handleEscapeKeydown = useCallback(
    (event) => {
      // We use KeyboardEvent.code since KeyboardEvent.keyCode is deprecated.
      // https://developer.mozilla.org/ko/docs/Web/API/KeyboardEvent/keyCode
      if (event.code === 'Escape') {
        setIsDrawerShowing(false);
      }
    },
    [setIsDrawerShowing]
  );

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

  useEffect(() => {
    if (isMounted) {
      document.addEventListener('keydown', handleEscapeKeydown);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKeydown);
    };
  }, [isMounted, handleEscapeKeydown]);

  const toggleDrawer = () => {
    setIsDrawerShowing(!isDrawerShowing);
  };

  return (
    <Fragment>
      {isDrawerShowing && ReactDOM.createPortal(<DrawerContainer />, document.body)}

      <header css={headerStyles} ref={headerRef}>
        <HeaderLogo
          logoFixed={getLogoImageResponse.logoCircleImage}
          logoTitle={intl.formatMessage({ id: 'title' })}
          shouldHideLogoTitle={isScrolled}
        />

        <div css={hamburgerMenuStyles} onClick={() => toggleDrawer()}>
          <HamburgerIcon shouldTransformToCloseIcon={isDrawerShowing} />
        </div>
      </header>
    </Fragment>
  );
};

export default HeaderContainer;
