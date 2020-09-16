import { graphql, useStaticQuery } from 'gatsby';

const useTabSectionQuery = () => {
  const { getImportTabReact, getImportTabNg, getDemoTabReact, getDemoTabNg } = useStaticQuery(graphql`
    query {
      getImportTabReact: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/import-tab-react.md/" } }) {
        nodes {
          html
        }
      }
      getImportTabNg: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/import-tab-ng.md/" } }) {
        nodes {
          html
        }
      }
      getDemoTabReact: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/demo-tab-react.md/" } }) {
        nodes {
          html
        }
      }
      getDemoTabNg: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/demo-tab-ng.md/" } }) {
        nodes {
          html
        }
      }
    }
  `);

  const tabSectionQueryResponse = {
    getImportTabReact,
    getImportTabNg,
    getDemoTabReact,
    getDemoTabNg,
  };

  return tabSectionQueryResponse;
};

export default useTabSectionQuery;
