import { Color } from '@altenull/foret-core';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { useIntl } from 'gatsby-plugin-intl';
import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import { HamburgerIcon } from '../../components/icons';
import { BreakpointEnum } from '../../enums/core/breakpoint.enum';
import { mediaQuery } from '../../utils/media-query.utils';
import DrawerContainer from './Drawer.container';

const headerStyles = css`
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 2rem);
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

const logoStyles = css`
  margin-right: 16px;
`;

const titleStyles = (isDrawerShowing) => css`
  font-size: 1.5rem;
  color: ${isDrawerShowing ? Color.Ink : Color.White};
`;

const hamburgerMenuStyles = css`
  display: flex;
  align-items: center;
`;

const HeaderContainer = () => {
  const [isDrawerShowing, setIsDrawerShowing] = useState(false);
  const intl = useIntl();

  const toggleDrawer = () => {
    setIsDrawerShowing(!isDrawerShowing);
  };

  const data = useStaticQuery(graphql`
    query getLogoImage {
      logoImage: file(relativePath: { eq: "logo-temp.png" }) {
        childImageSharp {
          fixed(width: 64, height: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Fragment>
      {isDrawerShowing && ReactDOM.createPortal(<DrawerContainer />, document.body)}

      <header css={headerStyles}>
        <div css={logoWrapperStyles}>
          <Img fixed={data.logoImage.childImageSharp.fixed} css={logoStyles} />
          <span css={titleStyles(isDrawerShowing)}>{intl.formatMessage({ id: 'header.title' })}</span>
        </div>

        <div css={hamburgerMenuStyles} onClick={() => toggleDrawer()}>
          <HamburgerIcon isDrawerShowing={isDrawerShowing} color={isDrawerShowing ? Color.Ink : Color.White} />
        </div>
      </header>
    </Fragment>
  );
};

export default HeaderContainer;
