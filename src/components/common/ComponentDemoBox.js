import { Color } from '@altenull/foret-core';
import { css } from '@emotion/core';
import React from 'react';
import CodeViewer from './CodeViewer';

const demoWrapperStyles = css`
  margin-bottom: -8px;
  background-color: ${Color.White};
  padding: 48px 24px;
`;

const ComponentDemoBox = ({ demo, codeInHtml }) => (
  <div>
    <div css={demoWrapperStyles}>{demo}</div>
    <CodeViewer codeInHtml={codeInHtml} />
  </div>
);

export default ComponentDemoBox;
