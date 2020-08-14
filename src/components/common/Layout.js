import { css } from '@emotion/core';
import React from 'react';

const layoutStyles = css``;

const Layout = ({ children, ...props }) => {
  return (
    <div css={layoutStyles} {...props}>
      {children}
    </div>
  );
};

export default Layout;
