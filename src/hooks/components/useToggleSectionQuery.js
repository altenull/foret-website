import { graphql, useStaticQuery } from 'gatsby';

const useToggleSectionQuery = () => {
  const {
    importToggleReactCode,
    importToggleNgCode,
    demoToggleReactCode,
    demoToggleNgCode,
    demoToggleDisabledReactCode,
    demoToggleDisabledNgCode,
  } = useStaticQuery(graphql`
    query {
      importToggleReactCode: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/import-toggle-react.md/" } }) {
        nodes {
          html
        }
      }
      importToggleNgCode: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/import-toggle-ng.md/" } }) {
        nodes {
          html
        }
      }
      demoToggleReactCode: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/demo-toggle-react.md/" } }) {
        nodes {
          html
        }
      }
      demoToggleDisabledReactCode: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-toggle-disabled-react.md/" } }
      ) {
        nodes {
          html
        }
      }
      demoToggleNgCode: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/demo-toggle-ng.md/" } }) {
        nodes {
          html
        }
      }
      demoToggleDisabledNgCode: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-toggle-disabled-ng.md/" } }
      ) {
        nodes {
          html
        }
      }
    }
  `);

  const toggleSectionQueryResponse = {
    importToggleReactCode,
    importToggleNgCode,
    demoToggleReactCode,
    demoToggleNgCode,
    demoToggleDisabledReactCode,
    demoToggleDisabledNgCode,
  };

  return toggleSectionQueryResponse;
};

export default useToggleSectionQuery;
