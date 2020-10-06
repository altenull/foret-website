import { graphql, useStaticQuery } from 'gatsby';

const useTabSectionQuery = () => {
  const { importTabReactCode, importTabNgCode, demoTabReactCode, demoTabNgCode } = useStaticQuery(graphql`
    query {
      importTabReactCode: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/import-tab-react.md/" } }) {
        nodes {
          html
          rawMarkdownBody
        }
      }
      importTabNgCode: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/import-tab-ng.md/" } }) {
        nodes {
          html
          rawMarkdownBody
        }
      }
      demoTabReactCode: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/demo-tab-react.md/" } }) {
        nodes {
          html
          rawMarkdownBody
        }
      }
      demoTabNgCode: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/demo-tab-ng.md/" } }) {
        nodes {
          html
          rawMarkdownBody
        }
      }
    }
  `);

  const tabSectionQueryResponse = {
    importTabReactCode,
    importTabNgCode,
    demoTabReactCode,
    demoTabNgCode,
  };

  return tabSectionQueryResponse;
};

export default useTabSectionQuery;
