import { SmallText } from '@altenull/foret-react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import React from 'react';

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

const tocItemStyles = (theme, isActive, isFirstItem) => css`
  display: inline-block;
  text-decoration: none;
  padding-left: 14px;
  margin-left: -2px;
  border-left: 2px solid;
  border-left-color: ${isActive ? theme.colors.foretGreen : 'transparent'};
  margin-top: ${isFirstItem ? '0' : '8px'};
`;

const linkTextStyles = (theme, isActive) => css`
  color: ${isActive ? theme.colors.foretGreen : theme.colors.stone};
`;

const TOC = ({ items, currentHash, scrollTo }) => {
  const tocItems = items.map(({ to, text }, index) => {
    const isActive = to === currentHash;
    const isFirstItem = index <= 0;

    return (
      <Link key={to} css={(theme) => tocItemStyles(theme, isActive, isFirstItem)} to={to} onClick={() => scrollTo(to)}>
        <SmallText css={(theme) => linkTextStyles(theme, isActive)}>{text}</SmallText>
      </Link>
    );
  });

  return (
    <nav css={tocStyles}>
      <ul css={tocItemContainerStyles}>{tocItems}</ul>
    </nav>
  );
};

export default TOC;
