import { graphql, useStaticQuery } from 'gatsby';

const useDatePickerSectionQuery = () => {
  const {
    importDatePickerReactCode,
    demoDatePickerReactCode,
    demoDatePickerSelectedDateReactCode,
    demoDatePickerLocaleReactCode,
  } = useStaticQuery(graphql`
    query {
      importDatePickerReactCode: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/import-date-picker-react.md/" } }
      ) {
        nodes {
          html
          rawMarkdownBody
        }
      }
      demoDatePickerReactCode: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-date-picker-react.md/" } }
      ) {
        nodes {
          html
          rawMarkdownBody
        }
      }
      demoDatePickerSelectedDateReactCode: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-date-picker-selected-date-react.md/" } }
      ) {
        nodes {
          html
          rawMarkdownBody
        }
      }
      demoDatePickerLocaleReactCode: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-date-picker-locale-react.md/" } }
      ) {
        nodes {
          html
          rawMarkdownBody
        }
      }
    }
  `);

  const datePickerSectionQueryResponse = {
    importDatePickerReactCode,
    demoDatePickerReactCode,
    demoDatePickerSelectedDateReactCode,
    demoDatePickerLocaleReactCode,
  };

  return datePickerSectionQueryResponse;
};

export default useDatePickerSectionQuery;
