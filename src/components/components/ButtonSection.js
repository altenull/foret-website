import { MarginalHeading3, MarginalParagraph, PrimaryButton, SecondaryButton } from '@altenull/foret-react';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { CodeViewer, ComponentDemoBox, ResponsiveContentLayout } from '../common';
import AnchorMarginalHeading2 from './AnchorMarginalHeading2';

const sectionStyles = css`
  position: relative;
`;

const ButtonSection = ({ headingHash }) => {
  const intl = useIntl();
  const {
    getImportButtonReact,
    getImportButtonNg,
    getDemoPrimaryButton,
    getDemoPrimaryButtonDisabled,
    getDemoSecondaryButton,
    getDemoSecondaryButtonDisabled,
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
      getDemoPrimaryButton: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/demo-primary-button.md/" } }) {
        nodes {
          html
        }
      }
      getDemoPrimaryButtonDisabled: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-primary-button-disabled.md/" } }
      ) {
        nodes {
          html
        }
      }
      getDemoSecondaryButton: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/demo-secondary-button.md/" } }) {
        nodes {
          html
        }
      }
      getDemoSecondaryButtonDisabled: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-secondary-button-disabled.md/" } }
      ) {
        nodes {
          html
        }
      }
    }
  `);

  const getPrimaryButtonDemoBox = () => (
    <ComponentDemoBox
      demo={<PrimaryButton>primary button</PrimaryButton>}
      codeInHtml={getDemoPrimaryButton.nodes[0].html}
    />
  );

  const getPrimaryButtonDisabledDemoBox = () => (
    <ComponentDemoBox
      demo={<PrimaryButton disabled>primary button(disabled)</PrimaryButton>}
      codeInHtml={getDemoPrimaryButtonDisabled.nodes[0].html}
    />
  );

  const getSecondaryButtonDemoBox = () => (
    <ComponentDemoBox
      demo={<SecondaryButton>primary button</SecondaryButton>}
      codeInHtml={getDemoSecondaryButton.nodes[0].html}
    />
  );

  const getSecondaryButtonDisabledDemoBox = () => (
    <ComponentDemoBox
      demo={<SecondaryButton disabled>primary button(disabled)</SecondaryButton>}
      codeInHtml={getDemoSecondaryButtonDisabled.nodes[0].html}
    />
  );

  return (
    <section css={sectionStyles}>
      <ResponsiveContentLayout>
        <AnchorMarginalHeading2 headingHash={headingHash}>
          {intl.formatMessage({ id: 'components.button.title' })}
        </AnchorMarginalHeading2>
        <MarginalParagraph>{intl.formatMessage({ id: 'components.button.description' })}</MarginalParagraph>
        <MarginalHeading3>Imports</MarginalHeading3>
        React
        <CodeViewer codeInHtml={getImportButtonReact.nodes[0].html} />
        Angular
        <CodeViewer codeInHtml={getImportButtonNg.nodes[0].html} />
        {getPrimaryButtonDemoBox()}
        {getPrimaryButtonDisabledDemoBox()}
        {getSecondaryButtonDemoBox()}
        {getSecondaryButtonDisabledDemoBox()}
      </ResponsiveContentLayout>
    </section>
  );
};

export default ButtonSection;
