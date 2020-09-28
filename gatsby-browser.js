import { ThemeProvider } from '@altenull/foret-react';
import { css, Global } from '@emotion/core';
import 'prismjs/themes/prism-tomorrow.css';
import React from 'react';

// issue - https://github.com/altenull/foret-website/issues/1
export const wrapRootElement = ({ element }) => {
  const globalStyles = (theme) => css`
    body {
      margin: 0;
      padding: 0;
      min-height: 100vh;
      max-width: 100vw;
      background-color: ${theme.colors.paper};
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
        background: ${theme.colors.foretGreen};
      }
    }

    #___gatsby,
    #gatsby-focus-wrapper {
      height: 100vh;
    }
  `;

  return (
    <ThemeProvider>
      <Global styles={globalStyles} />
      {element}
    </ThemeProvider>
  );
};

// https://www.gatsbyjs.com/docs/browser-apis#shouldUpdateScroll
// Default behavior is persisting last known scrolling positions and scrolling back to them on navigation.
// Should return either an [x, y] Array of coordinates to scroll to,
// a string of the id or name of an element to scroll to,
// false to not update the scroll position, or true for the default behavior.
export const shouldUpdateScroll = () => false;
