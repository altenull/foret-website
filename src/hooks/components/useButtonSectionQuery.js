import { graphql, useStaticQuery } from 'gatsby';

const useButtonSectionQuery = () => {
  const {
    importButtonReactCode,
    importButtonNgCode,
    demoPrimaryButtonReactCode,
    demoSecondaryButtonReactCode,
    demoPrimaryButtonNgCode,
    demoSecondaryButtonNgCode,
  } = useStaticQuery(graphql`
    query {
      importButtonReactCode: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/import-button-react.md/" } }) {
        nodes {
          html
          rawMarkdownBody
        }
      }
      importButtonNgCode: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/import-button-ng.md/" } }) {
        nodes {
          html
          rawMarkdownBody
        }
      }
      demoPrimaryButtonReactCode: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-primary-button-react.md/" } }
      ) {
        nodes {
          html
          rawMarkdownBody
        }
      }
      demoSecondaryButtonReactCode: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-secondary-button-react.md/" } }
      ) {
        nodes {
          html
          rawMarkdownBody
        }
      }
      demoPrimaryButtonNgCode: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-primary-button-ng.md/" } }
      ) {
        nodes {
          html
          rawMarkdownBody
        }
      }
      demoSecondaryButtonNgCode: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-secondary-button-ng.md/" } }
      ) {
        nodes {
          html
          rawMarkdownBody
        }
      }
    }
  `);

  const buttonSectionQueryResponse = {
    importButtonReactCode,
    importButtonNgCode,
    demoPrimaryButtonReactCode,
    demoSecondaryButtonReactCode,
    demoPrimaryButtonNgCode,
    demoSecondaryButtonNgCode,
  };

  return buttonSectionQueryResponse;
};

export default useButtonSectionQuery;
