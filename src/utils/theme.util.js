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

  * {
    &::selection {
      background-color: ${theme.colors.foretGreen};
    }
  }

  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100vh;
  }
`;
