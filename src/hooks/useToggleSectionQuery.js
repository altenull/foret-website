import { graphql, useStaticQuery } from 'gatsby';

const useToggleSectionQuery = () => {
  const {
    getImportToggleReact,
    getImportToggleNg,
    getDemoToggleReact,
    getDemoToggleNg,
    getDemoToggleDisabledReact,
    getDemoToggleDisabledNg,
  } = useStaticQuery(graphql`
    query {
      getImportToggleReact: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/import-toggle-react.md/" } }) {
        nodes {
          html
        }
      }
      getImportToggleNg: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/import-toggle-ng.md/" } }) {
        nodes {
          html
        }
      }
      getDemoToggleReact: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/demo-toggle-react.md/" } }) {
        nodes {
          html
        }
      }
      getDemoToggleDisabledReact: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-toggle-disabled-react.md/" } }
      ) {
        nodes {
          html
        }
      }
      getDemoToggleNg: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/demo-toggle-ng.md/" } }) {
        nodes {
          html
        }
      }
      getDemoToggleDisabledNg: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-toggle-disabled-ng.md/" } }
      ) {
        nodes {
          html
        }
      }
    }
  `);

  const toggleSectionQueryResponse = {
    getImportToggleReact,
    getImportToggleNg,
    getDemoToggleReact,
    getDemoToggleNg,
    getDemoToggleDisabledReact,
    getDemoToggleDisabledNg,
  };

  return toggleSectionQueryResponse;
};

export default useToggleSectionQuery;
