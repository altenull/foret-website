import { Foret } from '@altenull/foret-react';
import { Global } from '@emotion/core';
import 'prismjs/themes/prism-tomorrow.css';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { DefaultHelmet } from './src/components/seo';
import { HeaderContainer } from './src/containers/foundation';
import { getCustomTheme, getGlobalStyles } from './src/utils/theme.util';

// issue - https://github.com/altenull/foret-website/issues/1
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

// https://www.gatsbyjs.com/docs/browser-apis#shouldUpdateScroll
// Default behavior is persisting last known scrolling positions and scrolling back to them on navigation.
// Should return either an [x, y] Array of coordinates to scroll to,
// a string of the id or name of an element to scroll to,
// false to not update the scroll position, or true for the default behavior.
export const shouldUpdateScroll = () => false;
