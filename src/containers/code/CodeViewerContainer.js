import { css } from '@emotion/core';
import React, { useEffect, useState } from 'react';
import { useIsHovered } from '../../hooks/core';
import { clipboardCopy } from '../../utils/clipboard.util';
import { CopyIconWithCopiedMessage } from '../../components/common';

const codeViewerStyles = css`
  position: relative;
`;

const copyIconWithCopiedMessageStyles = css`
  position: absolute;
  top: 8px;
  right: 12px;
  cursor: pointer;
`;

// What's dangerous about dangerouslySetInnerHTML?
// https://crwi.uk/2019/04/26/dangerously-set-inner-html.html
const CodeViewerContainer = ({ codeInHtml, ...props }) => {
  const [hasCodeCopied, setHasCodeCopied] = useState(false);

  const [copyIconWithCopiedMessageRef, isCopyIconWithCopiedMessageRefHovered] = useIsHovered();

  useEffect(() => {
    if (!isCopyIconWithCopiedMessageRefHovered && hasCodeCopied) {
      setHasCodeCopied(false);
    }
  }, [isCopyIconWithCopiedMessageRefHovered, hasCodeCopied]);

  const handleCopyIconClick = (code) => {
    const isClipboardCopySuccesss = clipboardCopy(code);

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
        {...props}
      />

      <CopyIconWithCopiedMessage
        css={copyIconWithCopiedMessageStyles}
        ref={copyIconWithCopiedMessageRef}
        isHovered={isCopyIconWithCopiedMessageRefHovered}
        hasCopied={hasCodeCopied}
        onClick={() => handleCopyIconClick('TODO: Inject raw code')}
      />
    </div>
  );
};

export default CodeViewerContainer;
