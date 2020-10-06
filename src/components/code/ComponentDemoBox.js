import { css } from '@emotion/core';
import React from 'react';
import { CodeViewerContainer } from '../../containers/code';

const demoWrapperStyles = (theme) => css`
  margin-bottom: -8px;
  background-color: ${theme.colors.white};
  padding: 40px 24px;
`;

const ComponentDemoBox = ({ demo, codeInHtml, codeInMarkdown, ...props }) => (
  <div {...props}>
    <div css={demoWrapperStyles}>{demo}</div>
    <CodeViewerContainer codeInHtml={codeInHtml} codeInMarkdown={codeInMarkdown} />
  </div>
);

export default ComponentDemoBox;
