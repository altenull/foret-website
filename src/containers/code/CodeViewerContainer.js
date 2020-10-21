import { css } from '@emotion/core';
import React, { useEffect, useState } from 'react';
import { CopyIconWithCopiedMessage } from '../../components/common';
import { useIsHovered } from '../../hooks/core';
import { clipboardCopy } from '../../utils/clipboard.util';

const codeViewerStyles = css`
  position: relative;
`;

const copyIconWithCopiedMessageStyles = (theme) => css`
  position: absolute;
  top: 8px;
  right: 12px;
  cursor: pointer;
  display: none;

  ${theme.mediaQueries.viewPort9} {
    display: initial;
  }
`;

// What's dangerous about dangerouslySetInnerHTML?
// https://crwi.uk/2019/04/26/dangerously-set-inner-html.html
const CodeViewerContainer = React.memo(({ codeInHtml, codeInMarkdown = '' }) => {
  const [hasCodeCopied, setHasCodeCopied] = useState(false);

  const [copyIconWithCopiedMessageRef, isCopyIconWithCopiedMessageRefHovered] = useIsHovered();

  useEffect(() => {
    if (!isCopyIconWithCopiedMessageRefHovered && hasCodeCopied) {
      setHasCodeCopied(false);
    }
  }, [isCopyIconWithCopiedMessageRefHovered, hasCodeCopied]);

  const handleCopyIconClick = (codeInMarkdown) => {
    const markdownCodeBlockRegExp = /(`{3})[a-zA-Z]*\n|(`{3})/g;
    const isClipboardCopySuccesss = clipboardCopy(codeInMarkdown.replace(markdownCodeBlockRegExp, ''));

    if (isClipboardCopySuccesss) {
      setHasCodeCopied(true);
    }
  };

  return (
    <div css={codeViewerStyles}>
      <div
        className={'code-container'}
        dangerouslySetInnerHTML={{
          __html: codeInHtml,
        }}
      />

      {!!codeInMarkdown && (
        <CopyIconWithCopiedMessage
          css={(theme) => copyIconWithCopiedMessageStyles(theme)}
          ref={copyIconWithCopiedMessageRef}
          isHovered={isCopyIconWithCopiedMessageRefHovered}
          hasCopied={hasCodeCopied}
          onClick={() => handleCopyIconClick(codeInMarkdown)}
        />
      )}
    </div>
  );
});

export default CodeViewerContainer;
