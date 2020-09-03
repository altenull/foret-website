import React from 'react';
import CodeViewer from './CodeViewer';
import { css } from '@emotion/core';
import { Color } from '@altenull/foret-core';

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
