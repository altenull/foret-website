// TODO: Set styles
import { Subtitle2 } from '@altenull/foret-react';
import { css, keyframes } from '@emotion/core';
import { Link } from 'gatsby';
import React, { useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '../icons';

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

const navStyles = css`
  display: flex;
  justify-content: space-between;
`;

const linkStyles = css`
  display: flex;
  padding: 8px 0;
  text-decoration: none;
`;

const nextPageLinkStyles = css`
  ${linkStyles};
  justify-content: flex-end;
`;

const arrowLeftIconStyles = (isPrevLinkHovered) => css`
  margin: 0 16px 0 8px;
  animation: ${isPrevLinkHovered && leftBounce} 0.4s linear;
`;

const arrowRightIconStyles = (isPrevRightHovered) => css`
  margin: 0 8px 0 16px;
  animation: ${isPrevRightHovered && rightBounce} 0.4s linear;
`;

const PageNavigation = ({ prevLink, nextLink }) => {
  const [isPrevLinkHovered, setIsPrevLinkHovered] = useState(false);
  const [isNextLinkHovered, setIsNextLinkHovered] = useState(false);

  const handlePrevLinkeMouseOver = () => {
    setIsPrevLinkHovered(true);
  };

  const handlePrevLinkeMouseOut = () => {
    setIsPrevLinkHovered(false);
  };

  const handleNextLinkeMouseOver = () => {
    setIsNextLinkHovered(true);
  };

  const handleNextLinkeMouseOut = () => {
    setIsNextLinkHovered(false);
  };

  return (
    <nav css={navStyles}>
      <Link
        css={linkStyles}
        to={prevLink.to}
        onMouseOver={handlePrevLinkeMouseOver}
        onMouseOut={handlePrevLinkeMouseOut}>
        <ArrowLeftIcon css={arrowLeftIconStyles(isPrevLinkHovered)} />
        <Subtitle2>{prevLink.text}</Subtitle2>
      </Link>
      <Link
        css={nextPageLinkStyles}
        to={nextLink.to}
        onMouseOver={handleNextLinkeMouseOver}
        onMouseOut={handleNextLinkeMouseOut}>
        <Subtitle2>{nextLink.text}</Subtitle2>
        <ArrowRightIcon css={arrowRightIconStyles(isNextLinkHovered)} />
      </Link>
    </nav>
  );
};

export default PageNavigation;
