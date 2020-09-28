import { SmallText } from '@altenull/foret-react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import React from 'react';

const tocStyles = (theme) => css`
  position: fixed;
  right: 160px;
  top: 360px;
  padding-left: 12px;
  border-left: 2px solid ${theme.colors.fog};
`;

const tocItemContainerStyles = css`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

const tocItemStyles = css`
  display: inline-block;
  text-decoration: none;
  & + & {
    margin-top: 8px;
  }
`;

const linkTextStyles = (theme, isActive) => css`
  font-weight: ${isActive ? theme.fontWeights.semiBold : theme.fontWeights.light};
  color: ${isActive ? theme.colors.foretGreen : theme.colors.stone};
`;

const TOC = ({ items, currentHash, scrollTo }) => {
  return (
    <nav css={tocStyles}>
      <ul css={tocItemContainerStyles}>
        {items.map(({ to, text }) => (
          <Link key={to} css={tocItemStyles} to={to} onClick={() => scrollTo(to)}>
            <SmallText css={(theme) => linkTextStyles(theme, to === currentHash)}>{text}</SmallText>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default TOC;
