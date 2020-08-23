// TODO: Set styles
import { Color } from '@altenull/foret-core';
import { Subtitle2 } from '@altenull/foret-react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import React from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '../icons';

const navStyles = css`
  display: flex;
`;

const linkStyles = css`
  display: flex;
  flex: 1;
  padding: 16px 0;
  text-decoration: none;
  background-color: ${Color.White};
`;

const nextPageLinkStyles = css`
  justify-content: flex-end;
`;

const PageNavigation = ({ prevLink, nextLink }) => {
  return (
    <nav css={navStyles}>
      <Link css={linkStyles} to={prevLink.to}>
        <ArrowLeftIcon />
        <Subtitle2>{prevLink.text}</Subtitle2>
      </Link>
      <Link css={[linkStyles, nextPageLinkStyles]} to={nextLink.to}>
        <Subtitle2>{nextLink.text}</Subtitle2>
        <ArrowRightIcon />
      </Link>
    </nav>
  );
};

export default PageNavigation;
