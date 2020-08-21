import { css } from '@emotion/core';
import React from 'react';
import { FooterContainer, HeaderContainer } from '../../containers/common';

const layoutStyles = css``;

const Layout = ({ children, ...props }) => {
  return (
    <div css={layoutStyles} {...props}>
      <HeaderContainer />
      {children}
      <FooterContainer />
    </div>
  );
};

export default Layout;
