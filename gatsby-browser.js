import { Color } from '@altenull/foret-core';
import { css, Global } from '@emotion/core';
import 'prismjs/themes/prism-tomorrow.css';
import React, { Fragment } from 'react';

// issue - https://github.com/altenull/foret-website/issues/1
export const wrapRootElement = ({ element }) => {
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

    a {
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }

    #___gatsby,
    #gatsby-focus-wrapper {
      height: 100vh;
    }
  `;

  return (
    <Fragment>
      <Global styles={globalStyles} />
      {element}
    </Fragment>
  );
};

// https://www.gatsbyjs.com/docs/browser-apis#shouldUpdateScroll
// Default behavior is persisting last known scrolling positions and scrolling back to them on navigation.
// Should return either an [x, y] Array of coordinates to scroll to,
// a string of the id or name of an element to scroll to,
// false to not update the scroll position, or true for the default behavior.
export const shouldUpdateScroll = () => false;
