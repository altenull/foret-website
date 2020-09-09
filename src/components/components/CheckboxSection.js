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
import { useIntl } from 'gatsby-plugin-intl';
import React, { Fragment } from 'react';
import { ComponentFactorEnum } from '../../enums/components/component-factor.enum';
import { useCheckboxSectionQuery } from '../../hooks';
import { marginTopForHeading2, marginTopForHeading3, marginTopForSubtitle2 } from '../../utils/margin.utils';
import { getPropsOfComponentFactor, getPropsTable } from '../../utils/page.utils';
import { CodeViewer, ComponentDemoBox, ResponsiveContentLayout, TabContentWrapper } from '../common';
import AnchorMarginalHeading2 from './AnchorMarginalHeading2';

const sectionStyles = css`
  position: relative;
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
  } = useCheckboxSectionQuery();

  const getSharedOverviewContent = () => (
    <Fragment>
      <MarginalHeading3>{intl.formatMessage({ id: 'components.shared.overview' })}</MarginalHeading3>
      <MarginalParagraph>{intl.formatMessage({ id: 'components.checkbox.overview.description' })}</MarginalParagraph>
    </Fragment>
  );

  const getDemoCheckbox = () => (
    <CheckboxGroup legendText={'Checkbox'}>
      <Checkbox id={'checkbox-1'} labelText={'option 1'} />
      <Checkbox id={'checkbox-2'} labelText={'option 2'} checked />
      <Checkbox id={'checkbox-3'} labelText={'option 3'} checked />
    </CheckboxGroup>
  );

  const getDemoCheckboxDisabled = () => (
    <CheckboxGroup legendText={'Checkbox'} disabled={true}>
      <Checkbox id={'disabled-checkbox-1'} labelText={'option 1'} />
      <Checkbox id={'disabled-checkbox-2'} labelText={'option 2'} checked />
      <Checkbox id={'disabled-checkbox-3'} labelText={'option 3'} checked />
    </CheckboxGroup>
  );

  const checkboxGroupProps = getPropsOfComponentFactor(
    intl,
    `components.${ComponentFactorEnum.Checkbox}.props.checkboxGroup.`
  );
  const checkboxProps = getPropsOfComponentFactor(intl, `components.${ComponentFactorEnum.Checkbox}.props.checkbox.`);

  const getReactVersionContent = () => (
    <TabContentWrapper>
      {getSharedOverviewContent()}

      <MarginalHeading3 css={marginTopForHeading3}>
        {intl.formatMessage({ id: 'components.shared.liveDemo' })}
      </MarginalHeading3>
      <Subtitle2>Default:</Subtitle2>
      <ComponentDemoBox demo={getDemoCheckbox()} codeInHtml={getDemoCheckboxReact.nodes[0].html} />
      <Subtitle2 css={marginTopForSubtitle2}>Disabled:</Subtitle2>
      <ComponentDemoBox demo={getDemoCheckboxDisabled()} codeInHtml={getDemoCheckboxDisabledReact.nodes[0].html} />

      <MarginalHeading3 css={marginTopForHeading3}>
        {intl.formatMessage({ id: 'components.shared.imports' })}
      </MarginalHeading3>
      <CodeViewer codeInHtml={getImportCheckboxReact.nodes[0].html} />

      <MarginalHeading3 css={marginTopForHeading3}>
        {intl.formatMessage({ id: 'components.shared.props' })}
      </MarginalHeading3>
      <Subtitle2>{'<CheckboxGroup>'}</Subtitle2>
      {getPropsTable(checkboxGroupProps)}
      <Subtitle2 css={marginTopForSubtitle2}>{'<Checkbox>'}</Subtitle2>
      {getPropsTable(checkboxProps)}
    </TabContentWrapper>
  );

  const getAngularVersionContent = () => (
    <TabContentWrapper>
      {getSharedOverviewContent()}

      <MarginalHeading3 css={marginTopForHeading3}>
        {intl.formatMessage({ id: 'components.shared.liveDemo' })}
      </MarginalHeading3>
      <Subtitle2>Default:</Subtitle2>
      <ComponentDemoBox demo={getDemoCheckbox()} codeInHtml={getDemoCheckboxNg.nodes[0].html} />
      <Subtitle2 css={marginTopForSubtitle2}>Disabled:</Subtitle2>
      <ComponentDemoBox demo={getDemoCheckboxDisabled()} codeInHtml={getDemoCheckboxDisabledNg.nodes[0].html} />

      <MarginalHeading3 css={marginTopForHeading3}>
        {intl.formatMessage({ id: 'components.shared.imports' })}
      </MarginalHeading3>
      <CodeViewer codeInHtml={getImportCheckboxNg.nodes[0].html} />
    </TabContentWrapper>
  );

  return (
    <section css={sectionStyles}>
      <ResponsiveContentLayout>
        <AnchorMarginalHeading2 css={marginTopForHeading2} headingHash={headingHash}>
          {intl.formatMessage({ id: 'components.checkbox.title' })}
        </AnchorMarginalHeading2>
        <MarginalParagraph>{intl.formatMessage({ id: 'components.checkbox.description' })}</MarginalParagraph>

        <TabGroup selectedValue={'checkboxSectionReactTap'} name={'checkbox-section-tap'}>
          <Tab id={'checkbox-section-react-tap'} labelText={'React'} value={'checkboxSectionReactTap'}>
            {getReactVersionContent()}
          </Tab>
          <Tab id={'checkbox-section-ng-tap'} labelText={'Angular'} value={'checkboxSectionNgTap'}>
            {getAngularVersionContent()}
          </Tab>
        </TabGroup>
      </ResponsiveContentLayout>
    </section>
  );
};

export default CheckboxSection;
