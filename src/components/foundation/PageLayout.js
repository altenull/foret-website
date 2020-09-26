import React from 'react';
import { FooterContainer, HeaderContainer } from '../../containers/foundation';

const PageLayout = ({ children, ...props }) => {
  return (
    <div {...props}>
      <HeaderContainer />
      {children}
      <FooterContainer />
    </div>
  );
};

export default PageLayout;
