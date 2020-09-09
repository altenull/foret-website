import { MarginalHeading3, MarginalParagraph, Tab, TabGroup, Toggle, Subtitle2 } from '@altenull/foret-react';
import { css } from '@emotion/core';
import { useIntl } from 'gatsby-plugin-intl';
import React, { Fragment } from 'react';
import { ComponentFactorEnum } from '../../enums/components/component-factor.enum';
import { useToggleSectionQuery } from '../../hooks';
import { marginTopForHeading2, marginTopForHeading3, marginTopForSubtitle2 } from '../../utils/margin.utils';
import { getPropsOfComponentFactor, getPropsTable } from '../../utils/page.utils';
import { CodeViewer, ComponentDemoBox, DemoDivider, ResponsiveContentLayout, TabContentWrapper } from '../common';
import AnchorMarginalHeading2 from './AnchorMarginalHeading2';

const sectionStyles = css`
  position: relative;
`;

const ToggleSection = ({ headingHash }) => {
  const intl = useIntl();
  const {
    getImportToggleReact,
    getImportToggleNg,
    getDemoToggleReact,
    getDemoToggleNg,
    getDemoToggleDisabledReact,
    getDemoToggleDisabledNg,
  } = useToggleSectionQuery();

  const getSharedOverviewContent = () => (
    <Fragment>
      <MarginalHeading3>{intl.formatMessage({ id: 'components.shared.overview' })}</MarginalHeading3>
      <MarginalParagraph>{intl.formatMessage({ id: 'components.toggle.overview.description' })}</MarginalParagraph>
    </Fragment>
  );

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

  const toggleProps = getPropsOfComponentFactor(intl, `components.${ComponentFactorEnum.Toggle}.props.`);

  const getReactVersionContent = () => (
    <TabContentWrapper>
      {getSharedOverviewContent()}

      <MarginalHeading3 css={marginTopForHeading3}>
        {intl.formatMessage({ id: 'components.shared.liveDemo' })}
      </MarginalHeading3>
      <Subtitle2>Default:</Subtitle2>
      <ComponentDemoBox demo={getDemoToggle()} codeInHtml={getDemoToggleReact.nodes[0].html} />
      <Subtitle2 css={marginTopForSubtitle2}>Disabled:</Subtitle2>
      <ComponentDemoBox demo={getDemoToggleDisabled()} codeInHtml={getDemoToggleDisabledReact.nodes[0].html} />

      <MarginalHeading3 css={marginTopForHeading3}>
        {intl.formatMessage({ id: 'components.shared.imports' })}
      </MarginalHeading3>
      <CodeViewer codeInHtml={getImportToggleReact.nodes[0].html} />

      <MarginalHeading3 css={marginTopForHeading3}>
        {intl.formatMessage({ id: 'components.shared.props' })}
      </MarginalHeading3>
      {getPropsTable(toggleProps)}
    </TabContentWrapper>
  );

  const getAngularVersionContent = () => (
    <TabContentWrapper>
      {getSharedOverviewContent()}

      <MarginalHeading3 css={marginTopForHeading3}>
        {intl.formatMessage({ id: 'components.shared.liveDemo' })}
      </MarginalHeading3>
      <Subtitle2>Default:</Subtitle2>
      <ComponentDemoBox demo={getDemoToggle()} codeInHtml={getDemoToggleNg.nodes[0].html} />
      <Subtitle2 css={marginTopForSubtitle2}>Disabled:</Subtitle2>
      <ComponentDemoBox demo={getDemoToggleDisabled()} codeInHtml={getDemoToggleDisabledNg.nodes[0].html} />

      <MarginalHeading3 css={marginTopForHeading3}>
        {intl.formatMessage({ id: 'components.shared.imports' })}
      </MarginalHeading3>
      <CodeViewer codeInHtml={getImportToggleNg.nodes[0].html} />
    </TabContentWrapper>
  );

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
