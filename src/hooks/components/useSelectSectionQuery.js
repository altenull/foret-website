import { graphql, useStaticQuery } from 'gatsby';

const useSelectSectionQuery = () => {
  const {
    importSelectReactCode,
    importSelectNgCode,
    demoSelectReactCode,
    demoSelectNgCode,
    demoSelectGroupedReactCode,
    demoSelectGroupedNgCode,
    demoSelectWithPlaceholderReactCode,
    demoSelectWithPlaceholderNgCode,
    demoSelectDisabledReactCode,
    demoSelectDisabledNgCode,
  } = useStaticQuery(graphql`
    query {
      importSelectReactCode: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/import-select-react.md/" } }) {
        nodes {
          html
        }
      }
      importSelectNgCode: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/import-select-ng.md/" } }) {
        nodes {
          html
        }
      }
      demoSelectReactCode: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/demo-select-react.md/" } }) {
        nodes {
          html
        }
      }
      demoSelectGroupedReactCode: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-select-grouped-react.md/" } }
      ) {
        nodes {
          html
        }
      }
      demoSelectWithPlaceholderReactCode: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-select-with-placeholder-react.md/" } }
      ) {
        nodes {
          html
        }
      }
      demoSelectDisabledReactCode: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-select-disabled-react.md/" } }
      ) {
        nodes {
          html
        }
      }
      demoSelectNgCode: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/demo-select-ng.md/" } }) {
        nodes {
          html
        }
      }
      demoSelectGroupedNgCode: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-select-grouped-ng.md/" } }
      ) {
        nodes {
          html
        }
      }
      demoSelectWithPlaceholderNgCode: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-select-with-placeholder-ng.md/" } }
      ) {
        nodes {
          html
        }
      }
      demoSelectDisabledNgCode: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-select-disabled-ng.md/" } }
      ) {
        nodes {
          html
        }
      }
    }
  `);

  const selectSectionQueryResponse = {
    importSelectReactCode,
    importSelectNgCode,
    demoSelectReactCode,
    demoSelectNgCode,
    demoSelectGroupedReactCode,
    demoSelectGroupedNgCode,
    demoSelectWithPlaceholderReactCode,
    demoSelectWithPlaceholderNgCode,
    demoSelectDisabledReactCode,
    demoSelectDisabledNgCode,
  };

  return selectSectionQueryResponse;
};

export default useSelectSectionQuery;
