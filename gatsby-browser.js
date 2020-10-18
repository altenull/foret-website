import { Foret } from '@altenull/foret-react';
import { Global } from '@emotion/core';
import 'prismjs/themes/prism-tomorrow.css';
import React from 'react';
import { getCustomTheme, getGlobalStyles } from './src/utils/theme.util';

// issue - https://github.com/altenull/foret-website/issues/1
export const wrapRootElement = ({ element }) => {
  return (
    <Foret theme={getCustomTheme()}>
      <Global styles={(theme) => getGlobalStyles(theme)} />
      {element}
    </Foret>
  );
};
