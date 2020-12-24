import { graphql, useStaticQuery } from 'gatsby';

const useDatePickerSectionQuery = () => {
  const {
    importDatePickerReactCode,
    demoDatePickerCodeReact,
    demoDatePickerSelectedDateCodeReact,
    demoDatePickerLocaleCodeReact,
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
      demoDatePickerCodeReact: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-date-picker-react.md/" } }
      ) {
        nodes {
          html
          rawMarkdownBody
        }
      }
      demoDatePickerSelectedDateCodeReact: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-date-picker-selected-date-react.md/" } }
      ) {
        nodes {
          html
          rawMarkdownBody
        }
      }
      demoDatePickerLocaleCodeReact: allMarkdownRemark(
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
    demoDatePickerCodeReact,
    demoDatePickerSelectedDateCodeReact,
    demoDatePickerLocaleCodeReact,
  };

  return datePickerSectionQueryResponse;
};

export default useDatePickerSectionQuery;
