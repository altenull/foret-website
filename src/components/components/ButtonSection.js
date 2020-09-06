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
import React, { Fragment } from 'react';
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

  const getDemoPrimaryButton = () => (
    <Fragment>
      <PrimaryButton>primary button</PrimaryButton>
      <br />
      <br />
      <br />
      <PrimaryButton disabled>primary button(disabled)</PrimaryButton>
    </Fragment>
  );

  const getDemoSecondaryButton = () => (
    <Fragment>
      <SecondaryButton>secondary button</SecondaryButton>
      <br />
      <br />
      <br />
      <SecondaryButton disabled>secondary button(disabled)</SecondaryButton>
    </Fragment>
  );

  const buttonProps = getPropsOfComponentFactor(intl, `components.${ComponentFactorEnum.Button}.props.`);

  const getReactVersionContent = () => (
    <div css={contentWrapperStyles}>
      <MarginalHeading3>{intl.formatMessage({ id: 'components.shared.imports' })}</MarginalHeading3>
      <CodeViewer codeInHtml={getImportButtonReact.nodes[0].html} />

      <MarginalHeading3>{intl.formatMessage({ id: 'components.shared.liveDemo' })}</MarginalHeading3>
      <Subtitle1>Primary Button:</Subtitle1>
      <ComponentDemoBox demo={getDemoPrimaryButton()} codeInHtml={getDemoPrimaryButtonReact.nodes[0].html} />
      <Subtitle2>Secondary Button:</Subtitle2>
      <ComponentDemoBox demo={getDemoSecondaryButton()} codeInHtml={getDemoSecondaryButtonReact.nodes[0].html} />

      <MarginalHeading3>{intl.formatMessage({ id: 'components.shared.props' })}</MarginalHeading3>
      {getPropsTable(buttonProps)}
    </div>
  );

  const getAngularVersionContent = () => (
    <div css={contentWrapperStyles}>
      <MarginalHeading3>{intl.formatMessage({ id: 'components.shared.imports' })}</MarginalHeading3>
      <CodeViewer codeInHtml={getImportButtonNg.nodes[0].html} />

      <MarginalHeading3>{intl.formatMessage({ id: 'components.shared.liveDemo' })}</MarginalHeading3>
      <Subtitle2>Primary Button:</Subtitle2>
      <ComponentDemoBox demo={getDemoPrimaryButton()} codeInHtml={getDemoPrimaryButtonNg.nodes[0].html} />
      <Subtitle2>Secondary Button:</Subtitle2>
      <ComponentDemoBox demo={getDemoSecondaryButton()} codeInHtml={getDemoSecondaryButtonNg.nodes[0].html} />
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
