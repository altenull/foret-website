import { Subtitle2 } from '@altenull/foret-react';
import { css, keyframes } from '@emotion/core';
import { Link } from 'gatsby';
import React from 'react';
import { useIsHovered } from '../../hooks/core';
import { ArrowRightIcon } from '../icons';

const rightBounce = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(8px);
  }
  100% {
    transform: translateX(0);
  }
`;

const nextPageLinkStyles = css`
  display: flex;
  padding: 8px 0;
  text-decoration: none;
  justify-content: flex-end;
`;

const arrowRightIconStyles = (isHovered) => css`
  margin: 0 8px 0 16px;
  animation: ${isHovered && rightBounce} 0.4s linear;
`;

const NextPageLink = ({ to, text, ...props }) => {
  const [nextPageLinkRef, isNextPageLinkHovered] = useIsHovered();

  return (
    <Link css={nextPageLinkStyles} ref={nextPageLinkRef} to={to} {...props}>
      <Subtitle2>{text}</Subtitle2>
      <ArrowRightIcon css={arrowRightIconStyles(isNextPageLinkHovered)} />
    </Link>
  );
};

export default NextPageLink;
