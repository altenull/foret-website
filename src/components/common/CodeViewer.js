import React from 'react';

// About dangerouslySetInnerHTML:
// https://crwi.uk/2019/04/26/dangerously-set-inner-html.html
const CodeViewer = ({ codeInHtml, ...props }) => (
  <div
    className={'code-container'}
    dangerouslySetInnerHTML={{
      __html: codeInHtml,
    }}
    {...props}
  />
);

export default CodeViewer;
