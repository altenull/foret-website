import React from 'react';
import { Global, css } from '@emotion/core';
import { Color } from '@altenull/foret-core';

const globalStyles = css`
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    max-width: 100vw;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span,
  div {
    &::selection {
      background: ${Color.ForetGreen};
    }
  }

  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100vh;
  }
`;

const layoutStyles = css`
  height: 100%;
`;

const Layout = ({ children, ...props }) => {
  return (
    <div css={layoutStyles} {...props}>
      <Global styles={globalStyles} />
      {children}
    </div>
  );
};

export default Layout;
