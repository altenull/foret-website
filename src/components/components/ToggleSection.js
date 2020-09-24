import { MarginalHeading3, MarginalParagraph, Subtitle2, Tab, TabGroup, Toggle } from '@altenull/foret-react';
import { css } from '@emotion/core';
import { useIntl } from 'gatsby-plugin-intl';
import React, { Fragment } from 'react';
import {
  TOGGLE_PROPERTIES_WITHOUT_DESCRIPTION,
  TOGGLE_PROPS_WITHOUT_DESCRIPTION,
} from '../../constants/components.constant';
import { ComponentFactorEnum } from '../../enums/components/component-factor.enum';
import { useToggleSectionQuery } from '../../hooks/components';
import { getPropertiesOfComponentFactor, getPropsOfComponentFactor, getPropsTable } from '../../utils/components.util';
import { marginTopForHeading2, marginTopForHeading3, marginTopForSubtitle2 } from '../../utils/margin.util';
import { CodeViewer, ComponentDemoBox, DemoDivider } from '../code';
import { TabContentWrapper } from '../common';
import { ResponsiveContentLayout } from '../foundation';
import AnchorMarginalHeading2 from './AnchorMarginalHeading2';

const sectionStyles = css`
  position: relative;
`;

const ToggleSection = ({ headingHash }) => {
  const intl = useIntl();
  const {
    importToggleReactCode,
    importToggleNgCode,
    demoToggleReactCode,
    demoToggleNgCode,
    demoToggleDisabledReactCode,
    demoToggleDisabledNgCode,
  } = useToggleSectionQuery();

  const getDemoToggle = () => (
    <Fragment>
      <Toggle id={'toggle-1'} checked={true} />
      <DemoDivider />
      <Toggle id={'toggle-2'} checked={false} />
    </Fragment>
  );

  const getDemoToggleDisabled = () => (
    <Fragment>
      <Toggle id={'disabled-toggle-1'} checked={true} disabled={true} />
      <DemoDivider />
      <Toggle id={'disabled-toggle-2'} checked={false} disabled={true} />
    </Fragment>
  );

  const getReactVersionContent = () => {
    const toggleProps = getPropsOfComponentFactor(
      intl,
      ComponentFactorEnum.Toggle,
      'toggle',
      TOGGLE_PROPS_WITHOUT_DESCRIPTION
    );

    return (
      <TabContentWrapper>
        <MarginalHeading3>{intl.formatMessage({ id: 'components.shared.liveDemo' })}</MarginalHeading3>
        <Subtitle2>Default:</Subtitle2>
        <ComponentDemoBox demo={getDemoToggle()} codeInHtml={demoToggleReactCode.nodes[0].html} />
        <Subtitle2 css={marginTopForSubtitle2}>Disabled:</Subtitle2>
        <ComponentDemoBox demo={getDemoToggleDisabled()} codeInHtml={demoToggleDisabledReactCode.nodes[0].html} />

        <MarginalHeading3 css={marginTopForHeading3}>
          {intl.formatMessage({ id: 'components.shared.imports' })}
        </MarginalHeading3>
        <CodeViewer codeInHtml={importToggleReactCode.nodes[0].html} />

        <MarginalHeading3 css={marginTopForHeading3}>
          {intl.formatMessage({ id: 'components.shared.props' })}
        </MarginalHeading3>
        {getPropsTable(toggleProps)}
      </TabContentWrapper>
    );
  };

  const getAngularVersionContent = () => {
    const toggleProperties = getPropertiesOfComponentFactor(
      intl,
      ComponentFactorEnum.Toggle,
      'toggle',
      TOGGLE_PROPERTIES_WITHOUT_DESCRIPTION
    );

    return (
      <TabContentWrapper>
        <MarginalHeading3>{intl.formatMessage({ id: 'components.shared.liveDemo' })}</MarginalHeading3>
        <Subtitle2>Default:</Subtitle2>
        <ComponentDemoBox demo={getDemoToggle()} codeInHtml={demoToggleNgCode.nodes[0].html} />
        <Subtitle2 css={marginTopForSubtitle2}>Disabled:</Subtitle2>
        <ComponentDemoBox demo={getDemoToggleDisabled()} codeInHtml={demoToggleDisabledNgCode.nodes[0].html} />

        <MarginalHeading3 css={marginTopForHeading3}>
          {intl.formatMessage({ id: 'components.shared.imports' })}
        </MarginalHeading3>
        <CodeViewer codeInHtml={importToggleNgCode.nodes[0].html} />

        <MarginalHeading3 css={marginTopForHeading3}>
          {intl.formatMessage({ id: 'components.shared.properties' })}
        </MarginalHeading3>
        {getPropsTable(toggleProperties)}
      </TabContentWrapper>
    );
  };

  return (
    <section css={sectionStyles}>
      <ResponsiveContentLayout>
        <AnchorMarginalHeading2 css={marginTopForHeading2} headingHash={headingHash}>
          {intl.formatMessage({ id: 'components.toggle.title' })}
        </AnchorMarginalHeading2>
        <MarginalParagraph>{intl.formatMessage({ id: 'components.toggle.description' })}</MarginalParagraph>

        <TabGroup selectedValue={'toggleSectionReactTap'} name={'toggle-section-tap'}>
          <Tab id={'toggle-section-react-tap'} labelText={'React'} value={'toggleSectionReactTap'}>
            {getReactVersionContent()}
          </Tab>
          <Tab id={'toggle-section-ng-tap'} labelText={'Angular'} value={'toggleSectionNgTap'}>
            {getAngularVersionContent()}
          </Tab>
        </TabGroup>
      </ResponsiveContentLayout>
    </section>
  );
};

export default ToggleSection;
