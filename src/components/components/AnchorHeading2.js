import { Heading2 } from '@altenull/foret-react';
import { css } from '@emotion/core';
import React from 'react';
import { LinkIcon } from '../icons';

const heading2Styles = css`
  position: relative;
`;

const linkIconStyles = (theme) => css`
  display: none;
  position: absolute;
  left: -36px;
  top: 50%;
  padding: 8px;
  transform: translateY(-50%);

  ${theme.mediaQueries.viewPort9} {
    display: initial;
  }
`;

const AnchorHeading2 = ({ componentHash, children, onAnchorHeading2Click, ...props }) => {
  return (
    <Heading2 css={heading2Styles} id={componentHash} enableMargin enableResponsive {...props}>
      <LinkIcon css={(theme) => linkIconStyles(theme)} onClick={() => onAnchorHeading2Click(componentHash)} />
      {children}
    </Heading2>
  );
};

export default AnchorHeading2;
