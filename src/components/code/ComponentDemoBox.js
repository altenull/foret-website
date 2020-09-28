import { css } from '@emotion/core';
import React from 'react';
import CodeViewer from './CodeViewer';

const demoWrapperStyles = (theme) => css`
  margin-bottom: -8px;
  background-color: ${theme.colors.white};
  padding: 40px 24px;
`;

const ComponentDemoBox = ({ demo, codeInHtml, ...props }) => (
  <div {...props}>
    <div css={demoWrapperStyles}>{demo}</div>
    <CodeViewer codeInHtml={codeInHtml} />
  </div>
);

export default ComponentDemoBox;
