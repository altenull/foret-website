import { Foret } from '@altenull/foret-react';
import { Global } from '@emotion/core';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { DefaultHelmet } from './src/components/seo';
import { HeaderContainer } from './src/containers/foundation';
import { getCustomTheme, getGlobalStyles } from './src/utils/theme.util';

export const wrapRootElement = ({ element }) => {
  return (
    <RecoilRoot>
      <Foret theme={getCustomTheme()}>
        <DefaultHelmet />
        <HeaderContainer />
        <Global styles={(theme) => getGlobalStyles(theme)} />
        {element}
      </Foret>
    </RecoilRoot>
  );
};
