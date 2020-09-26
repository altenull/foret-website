import { Subtitle2 } from '@altenull/foret-react';
import { css, keyframes } from '@emotion/core';
import { Link } from 'gatsby';
import React from 'react';
import useIsHovered from '../../hooks/core/useIsHovered';
import { ArrowLeftIcon } from '../icons';

const leftBounce = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-8px);
  }
  100% {
    transform: translateX(0);
  }
`;

const prevPageLinkStyles = css`
  display: flex;
  padding: 8px 0;
  text-decoration: none;
`;

const arrowLeftIconStyles = (isHovered) => css`
  margin: 0 16px 0 8px;
  animation: ${isHovered && leftBounce} 0.4s linear;
`;

const PrevPageLink = ({ to, text, ...props }) => {
  const [prevPageLinkRef, isPrevPageLinkHovered] = useIsHovered();

  return (
    <Link css={prevPageLinkStyles} ref={prevPageLinkRef} to={to} {...props}>
      <ArrowLeftIcon css={arrowLeftIconStyles(isPrevPageLinkHovered)} />
      <Subtitle2>{text}</Subtitle2>
    </Link>
  );
};

export default PrevPageLink;
