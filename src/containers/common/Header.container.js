// TODO: Put language selector feature into sidebar or modal
import { Color } from '@altenull/foret-core';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import { HamburgerIcon } from '../../components/icons';
import Drawer from '../../components/common/Drawer';

const headerStyles = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 56px;
  position: fixed;
  top: 56px;
  z-index: 1100; /* TODO: Manage z-index in one place */
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

  const toggleDrawer = () => {
    setIsDrawerShowing(!isDrawerShowing);
  };

  const data = useStaticQuery(graphql`
    query {
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
      {isDrawerShowing && ReactDOM.createPortal(<Drawer />, document.body)}

      <header css={headerStyles}>
        <div css={logoWrapperStyles}>
          <Img fixed={data.logoImage.childImageSharp.fixed} css={logoStyles} />
          <span css={titleStyles(isDrawerShowing)}>Foret Design System</span>
        </div>

        <div css={hamburgerMenuStyles} onClick={() => toggleDrawer()}>
          <HamburgerIcon isDrawerShowing={isDrawerShowing} color={isDrawerShowing ? Color.Ink : Color.White} />
        </div>
      </header>
    </Fragment>
  );
};

export default HeaderContainer;
