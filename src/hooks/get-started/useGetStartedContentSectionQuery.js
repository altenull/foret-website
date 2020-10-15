import { graphql, useStaticQuery } from 'gatsby';

const useGetStartedContentSectionQuery = () => {
  const {
    getInstallViaNpmReact,
    getInstallViaYarnReact,
    getInstallViaNpmNg,
    getInstallViaYarnNg,
    getSettingUpWithForet,
    getCustomizingTheme,
    getDefaultTheme,
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
      getSettingUpWithForet: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/setting-up-with-foret.md/" } }) {
        nodes {
          html
          rawMarkdownBody
        }
      }
      getCustomizingTheme: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/customizing-theme.md/" } }) {
        nodes {
          html
          rawMarkdownBody
        }
      }
      getDefaultTheme: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/default-theme.md/" } }) {
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
    getSettingUpWithForet,
    getCustomizingTheme,
    getDefaultTheme,
  };

  return getStartedContentSectionQueryResponse;
};

export default useGetStartedContentSectionQuery;
