import { Color } from '@altenull/foret-core';
import { css } from '@emotion/core';
import { useIntl } from 'gatsby-plugin-intl';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { HeaderLogo } from '../../components/common';
import { HamburgerIcon } from '../../components/icons';
import { BreakpointEnum } from '../../enums/core/breakpoint.enum';
import { useGetLogoImage, useIsMounted } from '../../hooks';
import { mediaQuery } from '../../utils/media-query.utils';
import DrawerContainer from './Drawer.container';

const headerStyles = css`
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 2rem);
  height: 80px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  z-index: 1100; /* TODO: Manage z-index in one place */
  ${mediaQuery(BreakpointEnum.ViewPort9)} {
    width: calc(100% - 4rem);
    max-width: 1440px;
    top: 56px;
  }
`;

const hamburgerMenuStyles = css`
  display: flex;
  align-items: center;
`;

const HeaderContainer = () => {
  const [isDrawerShowing, setIsDrawerShowing] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isMounted = useIsMounted();
  const intl = useIntl();
  const getLogoImageResponse = useGetLogoImage();

  const headerRef = useRef();

  const handleScroll = () => {
    const newIsScrolled = window.scrollY >= headerRef.current.getBoundingClientRect().bottom;

    if (newIsScrolled !== isScrolled) {
      setIsScrolled(newIsScrolled);
    }
  };

  useEffect(() => {
    if (isMounted) {
      // Check whether logo wrapper should be animated or not at initial load
      handleScroll();
    }
  }, [isMounted]);

  useEffect(() => {
    if (isMounted) {
      document.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [isMounted, isScrolled]);

  const toggleDrawer = () => {
    setIsDrawerShowing(!isDrawerShowing);
  };

  return (
    <Fragment>
      {isDrawerShowing && ReactDOM.createPortal(<DrawerContainer />, document.body)}

      <header css={headerStyles} ref={headerRef}>
        <HeaderLogo
          logoFixed={getLogoImageResponse.fixed}
          logoTitle={intl.formatMessage({ id: 'title' })}
          isScrolled={isScrolled}
          isDrawerShowing={isDrawerShowing}
        />

        <div css={hamburgerMenuStyles} onClick={() => toggleDrawer()}>
          <HamburgerIcon isDrawerShowing={isDrawerShowing} color={isDrawerShowing ? Color.Ink : Color.White} />
        </div>
      </header>
    </Fragment>
  );
};

export default HeaderContainer;
