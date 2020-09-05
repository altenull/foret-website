import {
  MarginalHeading3,
  MarginalParagraph,
  PrimaryButton,
  SecondaryButton,
  Tab,
  TabGroup,
} from '@altenull/foret-react';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { ComponentFactorEnum } from '../../enums/components/component-factor.enum';
import { getPropsOfComponentFactor, getPropsTable } from '../../utils/page.utils';
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
    getDemoPrimaryButtonNg,
    getDemoPrimaryButtonDisabledNg,
    getDemoSecondaryButtonNg,
    getDemoSecondaryButtonDisabledNg,
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
      getDemoPrimaryButtonNg: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-primary-button-ng.md/" } }
      ) {
        nodes {
          html
        }
      }
      getDemoPrimaryButtonDisabledNg: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-primary-button-disabled-ng.md/" } }
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
      getDemoSecondaryButtonDisabledNg: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-secondary-button-disabled-ng.md/" } }
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

  const getPrimaryButtonNgDemoBox = () => (
    <ComponentDemoBox
      demo={<PrimaryButton>primary button</PrimaryButton>}
      codeInHtml={getDemoPrimaryButtonNg.nodes[0].html}
    />
  );

  const getPrimaryButtonDisabledNgDemoBox = () => (
    <ComponentDemoBox
      demo={<PrimaryButton disabled>primary button(disabled)</PrimaryButton>}
      codeInHtml={getDemoPrimaryButtonDisabledNg.nodes[0].html}
    />
  );

  const getSecondaryButtonDemoNgBox = () => (
    <ComponentDemoBox
      demo={<SecondaryButton>secondary button</SecondaryButton>}
      codeInHtml={getDemoSecondaryButtonNg.nodes[0].html}
    />
  );

  const getSecondaryButtonDisabledNgDemoBox = () => (
    <ComponentDemoBox
      demo={<SecondaryButton disabled>secondary button(disabled)</SecondaryButton>}
      codeInHtml={getDemoSecondaryButtonDisabledNg.nodes[0].html}
    />
  );

  const buttonProps = getPropsOfComponentFactor(intl, `components.${ComponentFactorEnum.Button}.props.`);

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
      {getPropsTable(buttonProps)}
    </div>
  );

  const getAngularVersionContent = () => (
    <div css={contentWrapperStyles}>
      <MarginalHeading3>{intl.formatMessage({ id: 'components.shared.imports' })}</MarginalHeading3>
      <CodeViewer codeInHtml={getImportButtonNg.nodes[0].html} />
      <MarginalHeading3>{intl.formatMessage({ id: 'components.shared.liveDemo' })}</MarginalHeading3>
      {getPrimaryButtonNgDemoBox()}
      {getPrimaryButtonDisabledNgDemoBox()}
      {getSecondaryButtonDemoNgBox()}
      {getSecondaryButtonDisabledNgDemoBox()}
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

          <Tab id={'button-section-ng-tap'} labelText={'Angular'} value={'buttonSectionNgTap'}>
            {getAngularVersionContent()}
          </Tab>
        </TabGroup>
      </ResponsiveContentLayout>
    </section>
  );
};

export default ButtonSection;
