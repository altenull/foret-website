import { Color } from '@altenull/foret-core';
import { css, Global } from '@emotion/core';
import 'prismjs/themes/prism-tomorrow.css';
import React, { Fragment } from 'react';

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

// issue - https://github.com/altenull/foret-website/issues/1
export const wrapRootElement = ({ element }) => {
  return (
    <Fragment>
      <Global styles={globalStyles} />
      {element}
    </Fragment>
  );
};
