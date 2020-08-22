// TODO: Set styles
import { Color } from '@altenull/foret-core';
import { Subtitle1 } from '@altenull/foret-react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import React from 'react';

const navStyles = css`
  display: flex;
`;

const linkStyles = css`
  flex: 1;
  padding: 16px 0;
  background-color: ${Color.White};
`;

const nextPageLinkStyles = css`
  text-align: right;
`;

const PageNavigation = ({ prevLink, nextLink }) => {
  return (
    <nav css={navStyles}>
      <Link css={linkStyles} to={prevLink.to}>
        <Subtitle1>{prevLink.text}</Subtitle1>
      </Link>
      <Link css={[linkStyles, nextPageLinkStyles]} to={nextLink.to}>
        <Subtitle1>{nextLink.text}</Subtitle1>
      </Link>
    </nav>
  );
};

export default PageNavigation;
