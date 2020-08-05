import React from 'react';
import { Global, css } from '@emotion/core';

const globalStyles = css`
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    max-width: 100vw;
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
