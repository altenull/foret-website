import { graphql, useStaticQuery } from 'gatsby';

const useGetStartedPageQuery = () => {
  const {
    installViaNpmReact,
    installViaYarnReact,
    installViaNpmNg,
    installViaYarnNg,
    settingUpWithForet,
    customizingTheme,
    defaultTheme,
    importForetSass,
  } = useStaticQuery(graphql`
    query {
      installViaNpmReact: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/install-via-npm-react.md/" } }) {
        nodes {
          html
          rawMarkdownBody
        }
      }
      installViaYarnReact: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/install-via-yarn-react.md/" } }) {
        nodes {
          html
          rawMarkdownBody
        }
      }
      installViaNpmNg: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/install-via-npm-ng.md/" } }) {
        nodes {
          html
          rawMarkdownBody
        }
      }
      installViaYarnNg: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/install-via-yarn-ng.md/" } }) {
        nodes {
          html
          rawMarkdownBody
        }
      }
      settingUpWithForet: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/setting-up-with-foret.md/" } }) {
        nodes {
          html
          rawMarkdownBody
        }
      }
      customizingTheme: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/customizing-theme.md/" } }) {
        nodes {
          html
          rawMarkdownBody
        }
      }
      defaultTheme: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/default-theme.md/" } }) {
        nodes {
          html
          rawMarkdownBody
        }
      }
      importForetSass: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/import-foret-sass.md/" } }) {
        nodes {
          html
          rawMarkdownBody
        }
      }
    }
  `);

  const getStartedContentSectionQueryResponse = {
    installViaNpmReact,
    installViaYarnReact,
    installViaNpmNg,
    installViaYarnNg,
    settingUpWithForet,
    customizingTheme,
    defaultTheme,
    importForetSass,
  };

  return getStartedContentSectionQueryResponse;
};

export default useGetStartedPageQuery;
