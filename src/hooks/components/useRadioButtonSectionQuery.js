import { graphql, useStaticQuery } from 'gatsby';

const useRadioButtonSectionQuery = () => {
  const {
    importRadioButtonReactCode,
    importRadioButtonNgCode,
    demoRadioButtonReactCode,
    demoRadioButtonNgCode,
    demoRadioButtonDisabledReactCode,
    demoRadioButtonDisabledNgCode,
  } = useStaticQuery(graphql`
    query {
      importRadioButtonReactCode: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/import-radio-button-react.md/" } }
      ) {
        nodes {
          html
        }
      }
      importRadioButtonNgCode: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/import-radio-button-ng.md/" } }
      ) {
        nodes {
          html
        }
      }
      demoRadioButtonReactCode: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-radio-button-react.md/" } }
      ) {
        nodes {
          html
        }
      }
      demoRadioButtonDisabledReactCode: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-radio-button-disabled-react.md/" } }
      ) {
        nodes {
          html
        }
      }
      demoRadioButtonNgCode: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/demo-radio-button-ng.md/" } }) {
        nodes {
          html
        }
      }
      demoRadioButtonDisabledNgCode: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-radio-button-disabled-ng.md/" } }
      ) {
        nodes {
          html
        }
      }
    }
  `);

  const radioButtonSectionQueryResponse = {
    importRadioButtonReactCode,
    importRadioButtonNgCode,
    demoRadioButtonReactCode,
    demoRadioButtonNgCode,
    demoRadioButtonDisabledReactCode,
    demoRadioButtonDisabledNgCode,
  };

  return radioButtonSectionQueryResponse;
};

export default useRadioButtonSectionQuery;
