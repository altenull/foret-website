import { Heading2, Paragraph, PrimaryButton, SecondaryButton } from '@altenull/foret-react';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { ComponentDemoBox, ResponsiveContentLayout } from '../common';

const sectionStyles = css`
  position: relative;
`;

const ButtonSection = () => {
  const intl = useIntl();
  const {
    getDemoPrimaryButton,
    getDemoPrimaryButtonDisabled,
    getDemoSecondaryButton,
    getDemoSecondaryButtonDisabled,
  } = useStaticQuery(graphql`
    query {
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
        <Heading2>{intl.formatMessage({ id: 'components.button.title' })}</Heading2>
        <Paragraph>{intl.formatMessage({ id: 'components.button.description' })}</Paragraph>

        {getPrimaryButtonDemoBox()}
        {getPrimaryButtonDisabledDemoBox()}
        {getSecondaryButtonDemoBox()}
        {getSecondaryButtonDisabledDemoBox()}
      </ResponsiveContentLayout>
    </section>
  );
};

export default ButtonSection;
