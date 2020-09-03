import { PropsTableColumnEnum } from '../enums/components/props-table-column.enum';

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

export const getPropsOfComponentFactor = (intl, componentFactor) => {
  const propsTableColumns = [
    PropsTableColumnEnum.Name,
    PropsTableColumnEnum.Type,
    PropsTableColumnEnum.Default,
    PropsTableColumnEnum.Description,
  ];

  const numberOfProps =
    Object.keys(intl.messages).filter((key) => key.includes(`components.${componentFactor}.props.`)).length /
    propsTableColumns.length;

  // If we store any array data into locale file(ko.json or en.json), each item of array will be mapped to one key-value object item.
  // https://dev.to/louisbertin/multilingual-website-with-gatsby-and-contentful-part-2-25pf
  return Array.from(Array(numberOfProps), (x, index) => {
    const propsTableRow = propsTableColumns.reduce((acc, propsTableColumn) => {
      return {
        ...acc,
        [propsTableColumn]: intl.formatMessage({
          id: `components.${componentFactor}.props.${index}.${propsTableColumn}`,
        }),
      };
    }, {});

    return propsTableRow;
  });
};
