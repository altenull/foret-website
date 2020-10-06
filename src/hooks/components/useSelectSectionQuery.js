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
          rawMarkdownBody
        }
      }
      importSelectNgCode: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/import-select-ng.md/" } }) {
        nodes {
          html
          rawMarkdownBody
        }
      }
      demoSelectReactCode: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/demo-select-react.md/" } }) {
        nodes {
          html
          rawMarkdownBody
        }
      }
      demoSelectGroupedReactCode: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-select-grouped-react.md/" } }
      ) {
        nodes {
          html
          rawMarkdownBody
        }
      }
      demoSelectWithPlaceholderReactCode: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-select-with-placeholder-react.md/" } }
      ) {
        nodes {
          html
          rawMarkdownBody
        }
      }
      demoSelectDisabledReactCode: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-select-disabled-react.md/" } }
      ) {
        nodes {
          html
          rawMarkdownBody
        }
      }
      demoSelectNgCode: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/demo-select-ng.md/" } }) {
        nodes {
          html
          rawMarkdownBody
        }
      }
      demoSelectGroupedNgCode: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-select-grouped-ng.md/" } }
      ) {
        nodes {
          html
          rawMarkdownBody
        }
      }
      demoSelectWithPlaceholderNgCode: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-select-with-placeholder-ng.md/" } }
      ) {
        nodes {
          html
          rawMarkdownBody
        }
      }
      demoSelectDisabledNgCode: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-select-disabled-ng.md/" } }
      ) {
        nodes {
          html
          rawMarkdownBody
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
