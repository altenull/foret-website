import { graphql, useStaticQuery } from 'gatsby';

const useCheckboxSectionQuery = () => {
  const {
    importCheckboxReactCode,
    importCheckboxNgCode,
    demoCheckboxReactCode,
    demoCheckboxNgCode,
    demoCheckboxDisabledReactCode,
    demoCheckboxDisabledNgCode,
  } = useStaticQuery(graphql`
    query {
      importCheckboxReactCode: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/import-checkbox-react.md/" } }
      ) {
        nodes {
          html
        }
      }
      importCheckboxNgCode: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/import-checkbox-ng.md/" } }) {
        nodes {
          html
        }
      }
      demoCheckboxReactCode: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/demo-checkbox-react.md/" } }) {
        nodes {
          html
        }
      }
      demoCheckboxDisabledReactCode: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-checkbox-disabled-react.md/" } }
      ) {
        nodes {
          html
        }
      }
      demoCheckboxNgCode: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/demo-checkbox-ng.md/" } }) {
        nodes {
          html
        }
      }
      demoCheckboxDisabledNgCode: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-checkbox-disabled-ng.md/" } }
      ) {
        nodes {
          html
        }
      }
    }
  `);

  const checkboxSectionQueryResponse = {
    importCheckboxReactCode,
    importCheckboxNgCode,
    demoCheckboxReactCode,
    demoCheckboxNgCode,
    demoCheckboxDisabledReactCode,
    demoCheckboxDisabledNgCode,
  };

  return checkboxSectionQueryResponse;
};

export default useCheckboxSectionQuery;
