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
          rawMarkdownBody
        }
      }
      importRadioButtonNgCode: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/import-radio-button-ng.md/" } }
      ) {
        nodes {
          html
          rawMarkdownBody
        }
      }
      demoRadioButtonReactCode: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-radio-button-react.md/" } }
      ) {
        nodes {
          html
          rawMarkdownBody
        }
      }
      demoRadioButtonDisabledReactCode: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-radio-button-disabled-react.md/" } }
      ) {
        nodes {
          html
          rawMarkdownBody
        }
      }
      demoRadioButtonNgCode: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/demo-radio-button-ng.md/" } }) {
        nodes {
          html
          rawMarkdownBody
        }
      }
      demoRadioButtonDisabledNgCode: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-radio-button-disabled-ng.md/" } }
      ) {
        nodes {
          html
          rawMarkdownBody
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
