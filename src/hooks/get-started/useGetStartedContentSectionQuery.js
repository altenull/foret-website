import { graphql, useStaticQuery } from 'gatsby';

const useGetStartedContentSectionQuery = () => {
  const {
    getInstallViaNpmReact,
    getInstallViaYarnReact,
    getInstallViaNpmNg,
    getInstallViaYarnNg,
  } = useStaticQuery(graphql`
    query {
      getInstallViaNpmReact: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/install-via-npm-react.md/" } }) {
        nodes {
          html
          rawMarkdownBody
        }
      }
      getInstallViaYarnReact: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/install-via-yarn-react.md/" } }
      ) {
        nodes {
          html
          rawMarkdownBody
        }
      }
      getInstallViaNpmNg: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/install-via-npm-ng.md/" } }) {
        nodes {
          html
          rawMarkdownBody
        }
      }
      getInstallViaYarnNg: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/install-via-yarn-ng.md/" } }) {
        nodes {
          html
          rawMarkdownBody
        }
      }
    }
  `);

  const getStartedContentSectionQueryResponse = {
    getInstallViaNpmReact,
    getInstallViaYarnReact,
    getInstallViaNpmNg,
    getInstallViaYarnNg,
  };

  return getStartedContentSectionQueryResponse;
};

export default useGetStartedContentSectionQuery;
