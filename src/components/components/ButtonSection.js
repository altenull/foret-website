import {
  MarginalHeading3,
  MarginalParagraph,
  PrimaryButton,
  SecondaryButton,
  Subtitle1,
  Subtitle2,
} from '@altenull/foret-react';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { ComponentFactorEnum } from '../../enums/components/component-factor.enum';
import { getPropsOfComponentFactor } from '../../utils/page.utils';
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
      demo={<SecondaryButton>secondary button</SecondaryButton>}
      codeInHtml={getDemoSecondaryButton.nodes[0].html}
    />
  );

  const getSecondaryButtonDisabledDemoBox = () => (
    <ComponentDemoBox
      demo={<SecondaryButton disabled>secondary button(disabled)</SecondaryButton>}
      codeInHtml={getDemoSecondaryButtonDisabled.nodes[0].html}
    />
  );

  const buttonProps = getPropsOfComponentFactor(intl, ComponentFactorEnum.Button);
  const buttonPropsTableRows = buttonProps.map((buttonProp, index) => (
    <tr key={index}>
      <td>{buttonProp.name}</td>
      <td>{buttonProp.type}</td>
      <td>{buttonProp.default}</td>
      <td>{buttonProp.description}</td>
    </tr>
  ));

  return (
    <section css={sectionStyles}>
      <ResponsiveContentLayout>
        <AnchorMarginalHeading2 headingHash={headingHash}>
          {intl.formatMessage({ id: 'components.button.title' })}
        </AnchorMarginalHeading2>
        <MarginalParagraph>{intl.formatMessage({ id: 'components.button.description' })}</MarginalParagraph>

        <MarginalHeading3>{intl.formatMessage({ id: 'components.shared.imports' })}</MarginalHeading3>
        <Subtitle1>React</Subtitle1>
        <CodeViewer codeInHtml={getImportButtonReact.nodes[0].html} />
        <Subtitle2>Angular</Subtitle2>
        <CodeViewer codeInHtml={getImportButtonNg.nodes[0].html} />

        <MarginalHeading3>{intl.formatMessage({ id: 'components.shared.liveDemo' })}</MarginalHeading3>
        {getPrimaryButtonDemoBox()}
        {getPrimaryButtonDisabledDemoBox()}
        {getSecondaryButtonDemoBox()}
        {getSecondaryButtonDisabledDemoBox()}

        <MarginalHeading3>{intl.formatMessage({ id: 'components.shared.props' })}</MarginalHeading3>
        {buttonProps.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>{buttonPropsTableRows}</tbody>
          </table>
        )}
      </ResponsiveContentLayout>
    </section>
  );
};

export default ButtonSection;
