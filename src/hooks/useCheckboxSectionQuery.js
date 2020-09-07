import { graphql, useStaticQuery } from 'gatsby';

const useCheckboxSectionQuery = () => {
  const {
    getImportCheckboxReact,
    getImportCheckboxNg,
    getDemoCheckboxReact,
    getDemoCheckboxNg,
    getDemoCheckboxDisabledReact,
    getDemoCheckboxDisabledNg,
  } = useStaticQuery(graphql`
    query {
      getImportCheckboxReact: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/import-checkbox-react.md/" } }) {
        nodes {
          html
        }
      }
      getImportCheckboxNg: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/import-checkbox-ng.md/" } }) {
        nodes {
          html
        }
      }
      getDemoCheckboxReact: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/demo-checkbox-react.md/" } }) {
        nodes {
          html
        }
      }
      getDemoCheckboxDisabledReact: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-checkbox-disabled-react.md/" } }
      ) {
        nodes {
          html
        }
      }
      getDemoCheckboxNg: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/demo-checkbox-ng.md/" } }) {
        nodes {
          html
        }
      }
      getDemoCheckboxDisabledNg: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-checkbox-disabled-ng.md/" } }
      ) {
        nodes {
          html
        }
      }
    }
  `);

  const checkboxSectionQueryResponse = {
    getImportCheckboxReact,
    getImportCheckboxNg,
    getDemoCheckboxReact,
    getDemoCheckboxNg,
    getDemoCheckboxDisabledReact,
    getDemoCheckboxDisabledNg,
  };

  return checkboxSectionQueryResponse;
};

export default useCheckboxSectionQuery;
