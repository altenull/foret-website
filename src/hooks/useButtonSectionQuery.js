import { graphql, useStaticQuery } from 'gatsby';

const useButtonSectionQuery = () => {
  const {
    getImportButtonReact,
    getImportButtonNg,
    getDemoPrimaryButtonReact,
    getDemoSecondaryButtonReact,
    getDemoPrimaryButtonNg,
    getDemoSecondaryButtonNg,
  } = useStaticQuery(graphql`
    query {
      getImportButtonReact: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/import-button-react.md/" } }) {
        nodes {
          html
        }
      }
      getImportButtonNg: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/import-button-ng.md/" } }) {
        nodes {
          html
        }
      }
      getDemoPrimaryButtonReact: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-primary-button-react.md/" } }
      ) {
        nodes {
          html
        }
      }
      getDemoSecondaryButtonReact: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-secondary-button-react.md/" } }
      ) {
        nodes {
          html
        }
      }
      getDemoPrimaryButtonNg: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-primary-button-ng.md/" } }
      ) {
        nodes {
          html
        }
      }
      getDemoSecondaryButtonNg: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-secondary-button-ng.md/" } }
      ) {
        nodes {
          html
        }
      }
    }
  `);

  const buttonSectionQueryResponse = {
    getImportButtonReact,
    getImportButtonNg,
    getDemoPrimaryButtonReact,
    getDemoSecondaryButtonReact,
    getDemoPrimaryButtonNg,
    getDemoSecondaryButtonNg,
  };

  return buttonSectionQueryResponse;
};

export default useButtonSectionQuery;
