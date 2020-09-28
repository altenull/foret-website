import { Color, FontWeight } from '@altenull/foret-core';
import { SmallText } from '@altenull/foret-react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import React from 'react';

const tocStyles = css`
  position: fixed;
  right: 160px;
  top: 360px;
  padding-left: 12px;
  border-left: 2px solid ${Color.Fog};
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

const linkTextStyles = (isActivated) => css`
  font-weight: ${isActivated ? FontWeight.SemiBold : FontWeight.Light};
  color: ${isActivated ? Color.ForetGreen : Color.Stone};
`;

const TOC = ({ items, currentHash, scrollTo }) => {
  return (
    <nav css={tocStyles}>
      <ul css={tocItemContainerStyles}>
        {items.map(({ to, text }) => (
          <Link key={to} css={tocItemStyles} to={to} onClick={() => scrollTo(to)}>
            <SmallText css={linkTextStyles(to === currentHash)}>{text}</SmallText>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default TOC;
