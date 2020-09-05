import {
  Checkbox,
  CheckboxGroup,
  MarginalHeading3,
  MarginalParagraph,
  Subtitle2,
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

const CheckboxSection = ({ headingHash }) => {
  const intl = useIntl();
  const {
    getImportCheckboxReact,
    getImportCheckboxNg,
    getDemoCheckboxReact,
    getDemoCheckboxNg,
    getDemoCheckboxDisabledReact,
    getDemoCheckboxDisabledNg,
  } = useStaticQuery(graphql`
    query {
      getImportCheckboxReact: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/import-checkbox-react.md/" } }) {
        nodes {
          html
        }
      }
      getImportCheckboxNg: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/import-checkbox-ng.md/" } }) {
        nodes {
          html
        }
      }
      getDemoCheckboxReact: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/demo-checkbox-react.md/" } }) {
        nodes {
          html
        }
      }
      getDemoCheckboxDisabledReact: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-checkbox-disabled-react.md/" } }
      ) {
        nodes {
          html
        }
      }
      getDemoCheckboxNg: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/demo-checkbox-ng.md/" } }) {
        nodes {
          html
        }
      }
      getDemoCheckboxDisabledNg: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/demo-checkbox-disabled-ng.md/" } }
      ) {
        nodes {
          html
        }
      }
    }
  `);

  const getDemoCheckbox = () => (
    <CheckboxGroup legendText={'checkbox'} name={'foret-react-checkbox'}>
      <Checkbox id={'checkbox-1'} labelText={'option 1'} value={'checkbox1'} />
      <Checkbox id={'checkbox-2'} labelText={'option 2'} value={'checkbox2'} checked />
      <Checkbox id={'checkbox-3'} labelText={'option 3'} value={'checkbox3'} checked />
    </CheckboxGroup>
  );

  const getDemoCheckboxDisabled = () => (
    <CheckboxGroup legendText={'checkbox'} name={'foret-react-checkbox'} disabled={true}>
      <Checkbox id={'checkbox-1'} labelText={'option 1'} value={'checkbox1'} />
      <Checkbox id={'checkbox-2'} labelText={'option 2'} value={'checkbox2'} checked />
      <Checkbox id={'checkbox-3'} labelText={'option 3'} value={'checkbox3'} checked />
    </CheckboxGroup>
  );

  const getCheckboxReactDemoBox = () => (
    <ComponentDemoBox demo={getDemoCheckbox()} codeInHtml={getDemoCheckboxReact.nodes[0].html} />
  );

  const getCheckboxDisabledReactDemoBox = () => (
    <ComponentDemoBox demo={getDemoCheckboxDisabled()} codeInHtml={getDemoCheckboxDisabledReact.nodes[0].html} />
  );

  const getCheckboxNgDemoBox = () => (
    <ComponentDemoBox demo={getDemoCheckbox()} codeInHtml={getDemoCheckboxNg.nodes[0].html} />
  );

  const getCheckboxDisabledNgDemoBox = () => (
    <ComponentDemoBox demo={getDemoCheckboxDisabled()} codeInHtml={getDemoCheckboxDisabledNg.nodes[0].html} />
  );

  const checkboxGroupProps = getPropsOfComponentFactor(
    intl,
    `components.${ComponentFactorEnum.Checkbox}.props.checkboxGroup.`
  );
  const checkboxProps = getPropsOfComponentFactor(intl, `components.${ComponentFactorEnum.Checkbox}.props.checkbox.`);

  const getReactVersionContent = () => (
    <div css={contentWrapperStyles}>
      <MarginalHeading3>{intl.formatMessage({ id: 'components.shared.imports' })}</MarginalHeading3>
      <CodeViewer codeInHtml={getImportCheckboxReact.nodes[0].html} />

      <MarginalHeading3>{intl.formatMessage({ id: 'components.shared.liveDemo' })}</MarginalHeading3>
      {getCheckboxReactDemoBox()}
      {getCheckboxDisabledReactDemoBox()}

      <MarginalHeading3>{intl.formatMessage({ id: 'components.shared.props' })}</MarginalHeading3>
      <Subtitle2>{'<CheckboxGroup>'}</Subtitle2>
      {getPropsTable(checkboxGroupProps)}
      <Subtitle2>{'<Checkbox>'}</Subtitle2>
      {getPropsTable(checkboxProps)}
    </div>
  );

  const getAngularVersionContent = () => (
    <div css={contentWrapperStyles}>
      <MarginalHeading3>{intl.formatMessage({ id: 'components.shared.imports' })}</MarginalHeading3>
      <CodeViewer codeInHtml={getImportCheckboxNg.nodes[0].html} />

      <MarginalHeading3>{intl.formatMessage({ id: 'components.shared.liveDemo' })}</MarginalHeading3>
      {getCheckboxNgDemoBox()}
      {getCheckboxDisabledNgDemoBox()}
    </div>
  );

  return (
    <section css={sectionStyles}>
      <ResponsiveContentLayout>
        <AnchorMarginalHeading2 headingHash={headingHash}>
          {intl.formatMessage({ id: 'components.checkbox.title' })}
        </AnchorMarginalHeading2>
        <MarginalParagraph>{intl.formatMessage({ id: 'components.checkbox.description' })}</MarginalParagraph>

        <TabGroup selectedValue={'checkboxSectionReactTap'} name={'checkbox-section-tap'}>
          <Tab id={'checkbox-section-react-tap'} labelText={'React'} value={'checkboxSectionReactTap'}>
            {getReactVersionContent()}
          </Tab>

          <Tab id={'checkbox-section-ng-tap'} labelText={'Angular'} value={'contentSectionNgTap'}>
            {getAngularVersionContent()}
          </Tab>
        </TabGroup>
      </ResponsiveContentLayout>
    </section>
  );
};

export default CheckboxSection;
