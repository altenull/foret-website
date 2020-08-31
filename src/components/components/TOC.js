import { SmallText, Subtitle2 } from '@altenull/foret-react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import React from 'react';

const tocStyles = css`
  display: inline-block;
  position: fixed;
  right: 160px;
  top: 400px;
`;

const tocItemContainerStyles = css`
  margin: 0;
  padding: 0;
`;

const linkStyles = css`
  text-decoration: none;
`;

const TOC = ({ items, currentHash, scrollTo }) => {
  return (
    <nav css={tocStyles}>
      <ul css={tocItemContainerStyles}>
        {items.map(({ to, text }) => (
          <Link key={to} css={linkStyles} to={to} onClick={() => scrollTo(to)}>
            {to === currentHash ? <Subtitle2>{text}</Subtitle2> : <SmallText>{text}</SmallText>}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default TOC;
