import { Heading2 } from '@altenull/foret-react';
import { css } from '@emotion/core';
import React from 'react';
import { LinkIcon } from '../icons';

const heading2Styles = css`
  position: relative;
`;

const linkIconStyles = css`
  position: absolute;
  left: -36px;
  top: 50%;
  padding: 8px;
  transform: translateY(-50%);
`;

const AnchorHeading2 = ({ componentHash, children, onAnchorHeading2Click, ...props }) => {
  return (
    <Heading2 css={heading2Styles} id={componentHash} enableMargin enableResponsive {...props}>
      <LinkIcon css={linkIconStyles} onClick={() => onAnchorHeading2Click(componentHash)} />
      {children}
    </Heading2>
  );
};

export default AnchorHeading2;
