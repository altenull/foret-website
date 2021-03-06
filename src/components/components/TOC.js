import { css } from '@emotion/core';
import React from 'react';
import TOCItem from './TOCItem';

const tocStyles = (theme) => css`
  display: none;
  position: fixed;
  left: calc(50% + 440px);
  top: 408px;
  border-left: 2px solid ${theme.colors.fog};

  ${theme.mediaQueries.viewPort9} {
    display: initial;
  }
`;

const tocItemContainerStyles = css`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

const TOC = ({ items, currentHash, onTOCItemClick }) => {
  const tocItems = items.map(({ to, text }) => (
    <TOCItem key={to} to={to} text={text} isActive={to === currentHash} onClick={() => onTOCItemClick(to)} />
  ));

  return (
    <nav css={tocStyles}>
      <ul css={tocItemContainerStyles}>{tocItems}</ul>
    </nav>
  );
};

export default TOC;
