import { graphql, useStaticQuery } from 'gatsby';

const useSelectSectionQuery = () => {
  const {
    getImportSelectReact,
    getImportSelectNg,
    getDemoSelectReact,
    getDemoSelectNg,
    getDemoSelectGroupedReact,
    getDemoSelectGroupedNg,
    getDemoSelectWithPlaceholderReact,
    getDemoSelectWithPlaceholderNg,
    getDemoSelectDisabledReact,
    getDemoSelectDisabledNg,
  } = useStaticQuery(graphql`
    query {
      getImportSelectReact: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/import-select-react.md/" } }) {
        nodes {
          html
        }
      }
      getImportSelectNg: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/import-select-ng.md/" } }) {
        nodes {
          html
        }
      }
      getDemoSelectReact: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/demo-select-react.md/" } }) {
        nodes {
          html
        }
      }
      getDemoSelectGroupedReact: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-select-grouped-react.md/" } }
      ) {
        nodes {
          html
        }
      }
      getDemoSelectWithPlaceholderReact: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-select-with-placeholder-react.md/" } }
      ) {
        nodes {
          html
        }
      }
      getDemoSelectDisabledReact: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-select-disabled-react.md/" } }
      ) {
        nodes {
          html
        }
      }
      getDemoSelectNg: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/demo-select-ng.md/" } }) {
        nodes {
          html
        }
      }
      getDemoSelectGroupedNg: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-select-grouped-ng.md/" } }
      ) {
        nodes {
          html
        }
      }
      getDemoSelectWithPlaceholderNg: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-select-with-placeholder-ng.md/" } }
      ) {
        nodes {
          html
        }
      }
      getDemoSelectDisabledNg: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-select-disabled-ng.md/" } }
      ) {
        nodes {
          html
        }
      }
    }
  `);

  const selectSectionQueryResponse = {
    getImportSelectReact,
    getImportSelectNg,
    getDemoSelectReact,
    getDemoSelectNg,
    getDemoSelectGroupedReact,
    getDemoSelectGroupedNg,
    getDemoSelectWithPlaceholderReact,
    getDemoSelectWithPlaceholderNg,
    getDemoSelectDisabledReact,
    getDemoSelectDisabledNg,
  };

  return selectSectionQueryResponse;
};

export default useSelectSectionQuery;
