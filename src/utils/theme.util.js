import { css } from '@emotion/core';

export const getCustomTheme = () => ({
  zIndexes: {
    scrollDownIndicator: 900,
    drawer: 1000,
    header: 1100,
  },
});

export const getGlobalStyles = (theme) => css`
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
