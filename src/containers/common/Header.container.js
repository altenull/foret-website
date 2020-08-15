import { Color } from '@altenull/foret-core';
import { css } from '@emotion/core';
import Img from 'gatsby-image';
import { useIntl } from 'gatsby-plugin-intl';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
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

const logoWrapperStyles = css`
  display: flex;
  align-items: center;
`;

const logoStyles = (isScrolled) => css`
  margin-right: 16px;
  transition: width 0.3s, height 0.3s;
  width: ${isScrolled ? '56px' : '80px'} !important;
  height: ${isScrolled ? '56px' : '80px'} !important;
`;

const titleStyles = (isDrawerShowing, isScrolled) => css`
  font-size: 1.5rem;
  white-space: nowrap;
  color: ${isDrawerShowing ? Color.Ink : Color.White};
  visibility: ${isScrolled ? 'hidden' : 'visible'};
  max-width: ${isScrolled ? '0' : 'initial'};
  opacity: ${isScrolled ? '0' : '1'};
  transition: ${isScrolled ? 'opacity 0.3s, visibility 0ms 0.3s, max-width 0ms 0.3s' : 'opacity 0.3s'};
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
        <div css={logoWrapperStyles}>
          <Img fixed={getLogoImageResponse.fixed} css={logoStyles(isScrolled)} />
          <span css={titleStyles(isDrawerShowing, isScrolled)}>{intl.formatMessage({ id: 'title' })}</span>
        </div>

        <div css={hamburgerMenuStyles} onClick={() => toggleDrawer()}>
          <HamburgerIcon isDrawerShowing={isDrawerShowing} color={isDrawerShowing ? Color.Ink : Color.White} />
        </div>
      </header>
    </Fragment>
  );
};

export default HeaderContainer;
