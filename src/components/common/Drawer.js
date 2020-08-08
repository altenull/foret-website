import { Color } from '@altenull/foret-core';
import { css, Global } from '@emotion/core';
import React, { Fragment } from 'react';

const drawerStyles = css`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: ${Color.Paper};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* TODO: Manage z-index in one place */
`;

const globalStyles = css`
  body {
    /* To prevent scrolling when drawer is showing */
    overflow: hidden;
  }
`;

const Drawer = () => {
  return (
    <Fragment>
      <Global styles={globalStyles} />
      <div css={drawerStyles}>Drawer here</div>
    </Fragment>
  );
};

export default Drawer;
