import { Subtitle2 } from '@altenull/foret-react';
import { css, keyframes } from '@emotion/core';
import { useLocation } from '@reach/router';
import { Link } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import React, { useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '../../components/icons';
import { useSiteMetadataQuery } from '../../hooks/core';
import { getCurrentPageRouteIndex } from '../../utils/page.util';

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

const PageNavigationContainer = () => {
  const [isPrevLinkHovered, setIsPrevLinkHovered] = useState(false);
  const [isNextLinkHovered, setIsNextLinkHovered] = useState(false);

  const intl = useIntl();
  const location = useLocation();
  const { siteMetadata } = useSiteMetadataQuery();

  const handlePrevLinkMouseOver = () => {
    setIsPrevLinkHovered(true);
  };

  const handlePrevLinkMouseOut = () => {
    setIsPrevLinkHovered(false);
  };

  const handleNextLinkMouseOver = () => {
    setIsNextLinkHovered(true);
  };

  const handleNextLinkMouseOut = () => {
    setIsNextLinkHovered(false);
  };

  const getPageNavigationLinks = (intl, currentPageRouteIndex, pageRoutes) => {
    const prevPageNavigationIndex = currentPageRouteIndex - 1 < 0 ? pageRoutes.length - 1 : currentPageRouteIndex - 1;
    const nextPageNavigationIndex = currentPageRouteIndex + 1 > pageRoutes.length - 1 ? 0 : currentPageRouteIndex + 1;

    return {
      prevLink: {
        to: `/${pageRoutes[prevPageNavigationIndex].key}`,
        text: intl.formatMessage({
          id: `pages.${pageRoutes[prevPageNavigationIndex].camelCase}`,
        }),
      },
      nextLink: {
        to: `/${pageRoutes[nextPageNavigationIndex].key}`,
        text: intl.formatMessage({
          id: `pages.${pageRoutes[nextPageNavigationIndex].camelCase}`,
        }),
      },
    };
  };

  const currentPageRouteIndex = getCurrentPageRouteIndex(location.pathname, siteMetadata.pageRoutes);
  const { prevLink, nextLink } = getPageNavigationLinks(intl, currentPageRouteIndex, siteMetadata.pageRoutes);

  return (
    <nav css={navStyles}>
      <Link css={linkStyles} to={prevLink.to} onMouseOver={handlePrevLinkMouseOver} onMouseOut={handlePrevLinkMouseOut}>
        <ArrowLeftIcon css={arrowLeftIconStyles(isPrevLinkHovered)} />
        <Subtitle2>{prevLink.text}</Subtitle2>
      </Link>

      <Link
        css={nextPageLinkStyles}
        to={nextLink.to}
        onMouseOver={handleNextLinkMouseOver}
        onMouseOut={handleNextLinkMouseOut}>
        <Subtitle2>{nextLink.text}</Subtitle2>
        <ArrowRightIcon css={arrowRightIconStyles(isNextLinkHovered)} />
      </Link>
    </nav>
  );
};

export default PageNavigationContainer;
