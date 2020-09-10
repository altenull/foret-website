import { graphql, useStaticQuery } from 'gatsby';

const useRadioButtonSectionQuery = () => {
  const {
    getImportRadioButtonReact,
    getImportRadioButtonNg,
    getDemoRadioButtonReact,
    getDemoRadioButtonNg,
    getDemoRadioButtonDisabledReact,
    getDemoRadioButtonDisabledNg,
  } = useStaticQuery(graphql`
    query {
      getImportRadioButtonReact: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/import-radio-button-react.md/" } }
      ) {
        nodes {
          html
        }
      }
      getImportRadioButtonNg: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/import-radio-button-ng.md/" } }
      ) {
        nodes {
          html
        }
      }
      getDemoRadioButtonReact: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-radio-button-react.md/" } }
      ) {
        nodes {
          html
        }
      }
      getDemoRadioButtonDisabledReact: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-radio-button-disabled-react.md/" } }
      ) {
        nodes {
          html
        }
      }
      getDemoRadioButtonNg: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/demo-radio-button-ng.md/" } }) {
        nodes {
          html
        }
      }
      getDemoRadioButtonDisabledNg: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-radio-button-disabled-ng.md/" } }
      ) {
        nodes {
          html
        }
      }
    }
  `);

  const radioButtonSectionQueryResponse = {
    getImportRadioButtonReact,
    getImportRadioButtonNg,
    getDemoRadioButtonReact,
    getDemoRadioButtonNg,
    getDemoRadioButtonDisabledReact,
    getDemoRadioButtonDisabledNg,
  };

  return radioButtonSectionQueryResponse;
};

export default useRadioButtonSectionQuery;
