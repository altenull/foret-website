import { css } from '@emotion/core';
import React from 'react';
import TOCItem from './TOCItem';

const tocStyles = (theme) => css`
  position: fixed;
  right: 160px;
  top: 360px;
  border-left: 2px solid ${theme.colors.fog};
`;

const tocItemContainerStyles = css`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

const TOC = ({ items, currentHash, scrollTo }) => {
  const tocItems = items.map(({ to, text }) => (
    <TOCItem key={to} to={to} text={text} isActive={to === currentHash} onClick={() => scrollTo(to)} />
  ));

  return (
    <nav css={tocStyles}>
      <ul css={tocItemContainerStyles}>{tocItems}</ul>
    </nav>
  );
};

export default TOC;
