import { Color } from '@altenull/foret-core';
import { css } from '@emotion/core';
import React from 'react';

const hamburgerIconStyles = css`
  height: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const lineStyles = css`
  min-width: 24px;
  min-height: 1px;
  background-color: ${Color.Ink};
`;

const HamburgerIcon = () => {
  return (
    <span css={hamburgerIconStyles}>
      <span css={lineStyles} />
      <span css={lineStyles} />
      <span css={lineStyles} />
    </span>
  );
};

export default HamburgerIcon;
