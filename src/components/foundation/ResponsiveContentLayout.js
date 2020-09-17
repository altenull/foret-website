import { css } from '@emotion/core';
import React from 'react';

const layoutStyles = css`
  width: calc(100% - 2rem);
  max-width: 792px;
  margin: auto;
`;

const ResponsiveContentLayout = ({ children, ...props }) => {
  return (
    <div css={layoutStyles} {...props}>
      {children}
    </div>
  );
};

export default ResponsiveContentLayout;
