import React from 'react';
import { css } from '@emotion/core';

const tabContentWrapperStyles = css`
  padding: 64px 0 0;
`;

const TabContentWrapper = ({ children }) => {
  return <div css={tabContentWrapperStyles}>{children}</div>;
};

export default TabContentWrapper;
