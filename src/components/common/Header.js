import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { HamburgerIcon } from '../icons';

const headerStyles = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const logoWrapperStyles = css`
  display: flex;
  align-items: center;
`;

const logoStyles = css`
  margin-right: 16px;
`;

const titleStyles = css`
  font-size: 1.5rem;
`;

const hamburgerMenuStyles = css`
  display: flex;
  align-items: center;
`;

const Header = () => {
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
    <header css={headerStyles}>
      <div css={logoWrapperStyles}>
        <Img fixed={data.logoImage.childImageSharp.fixed} css={logoStyles} />
        <span css={titleStyles}>Foret Design System</span>
      </div>

      <div css={hamburgerMenuStyles}>
        <HamburgerIcon />
      </div>
    </header>
  );
};

export default Header;
