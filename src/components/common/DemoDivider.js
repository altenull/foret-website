import React from 'react';
import { css } from '@emotion/core';

const demoDividerStyles = css`
  min-height: 32px;
`;

const DemoDivider = () => {
  return <div css={demoDividerStyles} />;
};

export default DemoDivider;
