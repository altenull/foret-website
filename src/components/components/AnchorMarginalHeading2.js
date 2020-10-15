import { Heading2 } from '@altenull/foret-react';
import { css } from '@emotion/core';
import React from 'react';
import { LinkIcon } from '../icons';

const heading2Styles = css`
  position: relative;
`;

const linkIconStyles = css`
  position: absolute;
  left: -32px;
  top: 50%;
  transform: translateY(-50%);
`;

const AnchorMarginalHeading2 = ({ headingHash, children, ...props }) => {
  return (
    <Heading2 css={heading2Styles} id={headingHash} enableMargin {...props}>
      {/* TODO: LinkIcon should be visible when AnchorHeading2 is hovered */}
      <LinkIcon css={linkIconStyles} />
      {children}
    </Heading2>
  );
};

export default AnchorMarginalHeading2;
