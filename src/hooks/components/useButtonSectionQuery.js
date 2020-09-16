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
        }
      }
      importButtonNgCode: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/import-button-ng.md/" } }) {
        nodes {
          html
        }
      }
      demoPrimaryButtonReactCode: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-primary-button-react.md/" } }
      ) {
        nodes {
          html
        }
      }
      demoSecondaryButtonReactCode: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-secondary-button-react.md/" } }
      ) {
        nodes {
          html
        }
      }
      demoPrimaryButtonNgCode: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-primary-button-ng.md/" } }
      ) {
        nodes {
          html
        }
      }
      demoSecondaryButtonNgCode: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-secondary-button-ng.md/" } }
      ) {
        nodes {
          html
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
