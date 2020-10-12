import { Heading3 } from '@altenull/foret-react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import React from 'react';

const pageLinkStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
`;

const linkStyles = css`
  text-decoration: none;
`;

const heading3Styles = (theme) => css`
  font-size: 28px;

  ${theme.mediaQueries.viewPort9} {
    font-size: 36px;
  }
`;

const PageLink = ({ to, text, ...props }) => {
  return (
    <li css={pageLinkStyles} {...props}>
      <Link to={to} css={linkStyles}>
        <Heading3 css={(theme) => heading3Styles(theme)}>{text}</Heading3>
      </Link>
    </li>
  );
};

export default PageLink;
