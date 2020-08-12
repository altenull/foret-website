import { Color } from '@altenull/foret-core';
import { css, Global } from '@emotion/core';
import { useIntl } from 'gatsby-plugin-intl';
import React, { Fragment } from 'react';
import { useSiteMetadata } from '../../hooks';

const drawerStyles = css`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: ${Color.Paper};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* TODO: Manage z-index in one place */
`;

const globalStyles = css`
  body {
    /* To prevent scrolling when drawer is showing */
    overflow: hidden;
  }
`;

const DrawerContainer = () => {
  const { pageRoutes } = useSiteMetadata();
  const intl = useIntl();

  const pages = pageRoutes.map((pageRoute) => (
    <div key={pageRoute.key}>{intl.formatMessage({ id: `pages.${pageRoute.camelCase}` })}</div>
  ));

  return (
    <Fragment>
      <Global styles={globalStyles} />
      <div css={drawerStyles}>{pages}</div>
    </Fragment>
  );
};

export default DrawerContainer;
