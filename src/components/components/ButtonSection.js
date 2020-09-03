import {
  MarginalHeading3,
  MarginalParagraph,
  PrimaryButton,
  SecondaryButton,
  Subtitle1,
  Subtitle2,
  Tab,
  TabGroup,
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

const contentWrapperStyles = css`
  padding: 32px 0;
`;

const ButtonSection = ({ headingHash }) => {
  const intl = useIntl();
  const {
    getImportButtonReact,
    getImportButtonNg,
    getDemoPrimaryButtonReact,
    getDemoPrimaryButtonDisabledReact,
    getDemoSecondaryButtonReact,
    getDemoSecondaryButtonDisabledReact,
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
      getDemoPrimaryButtonDisabledReact: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-primary-button-disabled-react.md/" } }
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
      getDemoSecondaryButtonDisabledReact: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-secondary-button-disabled-react.md/" } }
      ) {
        nodes {
          html
        }
      }
    }
  `);

  const getPrimaryButtonReactDemoBox = () => (
    <ComponentDemoBox
      demo={<PrimaryButton>primary button</PrimaryButton>}
      codeInHtml={getDemoPrimaryButtonReact.nodes[0].html}
    />
  );

  const getPrimaryButtonDisabledReactDemoBox = () => (
    <ComponentDemoBox
      demo={<PrimaryButton disabled>primary button(disabled)</PrimaryButton>}
      codeInHtml={getDemoPrimaryButtonDisabledReact.nodes[0].html}
    />
  );

  const getSecondaryButtonDemoReactBox = () => (
    <ComponentDemoBox
      demo={<SecondaryButton>secondary button</SecondaryButton>}
      codeInHtml={getDemoSecondaryButtonReact.nodes[0].html}
    />
  );

  const getSecondaryButtonDisabledReactDemoBox = () => (
    <ComponentDemoBox
      demo={<SecondaryButton disabled>secondary button(disabled)</SecondaryButton>}
      codeInHtml={getDemoSecondaryButtonDisabledReact.nodes[0].html}
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

  const getReactVersionContent = () => (
    <div css={contentWrapperStyles}>
      <MarginalHeading3>{intl.formatMessage({ id: 'components.shared.imports' })}</MarginalHeading3>
      <CodeViewer codeInHtml={getImportButtonReact.nodes[0].html} />

      <MarginalHeading3>{intl.formatMessage({ id: 'components.shared.liveDemo' })}</MarginalHeading3>
      {getPrimaryButtonReactDemoBox()}
      {getPrimaryButtonDisabledReactDemoBox()}
      {getSecondaryButtonDemoReactBox()}
      {getSecondaryButtonDisabledReactDemoBox()}

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
    </div>
  );

  const getAngularVersionContent = () => (
    <div css={contentWrapperStyles}>
      <MarginalHeading3>{intl.formatMessage({ id: 'components.shared.imports' })}</MarginalHeading3>
      <CodeViewer codeInHtml={getImportButtonNg.nodes[0].html} />

      <MarginalHeading3>{intl.formatMessage({ id: 'components.shared.liveDemo' })}</MarginalHeading3>

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
    </div>
  );

  return (
    <section css={sectionStyles}>
      <ResponsiveContentLayout>
        <AnchorMarginalHeading2 headingHash={headingHash}>
          {intl.formatMessage({ id: 'components.button.title' })}
        </AnchorMarginalHeading2>
        <MarginalParagraph>{intl.formatMessage({ id: 'components.button.description' })}</MarginalParagraph>

        <TabGroup selectedValue={'buttonSectionReactTap'} name={'button-section-tap'}>
          <Tab id={'button-section-react-tap'} labelText={'React'} value={'buttonSectionReactTap'}>
            {getReactVersionContent()}
          </Tab>

          <Tab id={'button-section-ng-tap'} labelText={'Angular'} value={'contentSectionNgTap'}>
            {getAngularVersionContent()}
          </Tab>
        </TabGroup>
      </ResponsiveContentLayout>
    </section>
  );
};

export default ButtonSection;
