import { Foret } from '@altenull/foret-react';
import { Global } from '@emotion/core';
import React from 'react';
import { getCustomTheme, getGlobalStyles } from './src/utils/theme.util';

export const wrapRootElement = ({ element }) => {
  return (
    <Foret theme={getCustomTheme()}>
      <Global styles={(theme) => getGlobalStyles(theme)} />
      {element}
    </Foret>
  );
};
