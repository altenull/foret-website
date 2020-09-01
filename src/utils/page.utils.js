export const getCurrentPageRouteIndex = (pathname, pageRoutes) => {
  return pageRoutes.findIndex(({ key, ...rest }) => pathname.includes(key));
};

export const getPageTitle = (intl, currentPageRouteIndex, pageRoutes) => {
  return `${intl.formatMessage({
    id: `pages.${pageRoutes[currentPageRouteIndex].camelCase}`,
  })} | ${intl.formatMessage({ id: 'title' })}`;
};

export const getPageNavigationLinks = (intl, currentPageRouteIndex, pageRoutes) => {
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
