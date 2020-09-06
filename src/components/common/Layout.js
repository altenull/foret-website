import React from 'react';
import { FooterContainer, HeaderContainer } from '../../containers/common';

const Layout = ({ children, ...props }) => {
  return (
    <div {...props}>
      <HeaderContainer />
      {children}
      <FooterContainer />
    </div>
  );
};

export default Layout;
