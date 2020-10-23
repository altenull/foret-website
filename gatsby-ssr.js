import { Foret } from '@altenull/foret-react';
import { Global } from '@emotion/core';
import React from 'react';
import DefaultHelmet from './src/components/seo/DefaultHelmet';
import { getCustomTheme, getGlobalStyles } from './src/utils/theme.util';

export const wrapRootElement = ({ element }) => {
  return (
    <Foret theme={getCustomTheme()}>
      <DefaultHelmet />
      <Global styles={(theme) => getGlobalStyles(theme)} />
      {element}
    </Foret>
  );
};
