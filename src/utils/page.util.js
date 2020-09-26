import { PROPS_TABLE_COLUMNS } from '../constants/components.constant';

export const getCurrentPageRouteIndex = (pathname, pageRoutes) =>
  pageRoutes.findIndex((pageRoute) => pathname.includes(pageRoute.key));

export const getPageTitle = (intl, currentPageRouteIndex, pageRoutes) =>
  `${intl.formatMessage({
    id: `pages.${pageRoutes[currentPageRouteIndex].camelCase}`,
  })} | ${intl.formatMessage({ id: 'title' })}`;

export const getPropsOfComponentFactor = (intl, intlMessageSubKey) => {
  const numberOfProps =
    Object.keys(intl.messages).filter((key) => key.includes(intlMessageSubKey)).length / PROPS_TABLE_COLUMNS.length;

  // If we store any array data into locale file(ko.json or en.json), each item of array will be mapped to one key-value object item.
  // https://dev.to/louisbertin/multilingual-website-with-gatsby-and-contentful-part-2-25pf
  return Array.from(Array(numberOfProps), (x, index) => {
    const propsTableRow = PROPS_TABLE_COLUMNS.reduce((acc, propsTableColumn) => {
      return {
        ...acc,
        [propsTableColumn]: intl.formatMessage({
          id: `${intlMessageSubKey}${index}.${propsTableColumn}`,
        }),
      };
    }, {});

    return propsTableRow;
  });
};
