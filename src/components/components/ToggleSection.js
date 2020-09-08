import { MarginalHeading3, MarginalParagraph, Tab, TabGroup, Toggle } from '@altenull/foret-react';
import { css } from '@emotion/core';
import { useIntl } from 'gatsby-plugin-intl';
import React, { Fragment } from 'react';
import { ComponentFactorEnum } from '../../enums/components/component-factor.enum';
import { useToggleSectionQuery } from '../../hooks';
import { marginBottom32px, marginBottom64px } from '../../utils/margin.utils';
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
      <MarginalHeading3>{intl.formatMessage({ id: 'components.shared.imports' })}</MarginalHeading3>
      <CodeViewer codeInHtml={getImportToggleReact.nodes[0].html} css={marginBottom64px} />

      <MarginalHeading3>{intl.formatMessage({ id: 'components.shared.liveDemo' })}</MarginalHeading3>
      <ComponentDemoBox demo={getDemoToggle()} codeInHtml={getDemoToggleReact.nodes[0].html} css={marginBottom32px} />
      <ComponentDemoBox
        demo={getDemoToggleDisabled()}
        codeInHtml={getDemoToggleDisabledReact.nodes[0].html}
        css={marginBottom64px}
      />

      <MarginalHeading3>{intl.formatMessage({ id: 'components.shared.props' })}</MarginalHeading3>
      {getPropsTable(toggleProps)}
    </TabContentWrapper>
  );

  const getAngularVersionContent = () => (
    <TabContentWrapper>
      <MarginalHeading3>{intl.formatMessage({ id: 'components.shared.imports' })}</MarginalHeading3>
      <CodeViewer codeInHtml={getImportToggleNg.nodes[0].html} css={marginBottom64px} />

      <MarginalHeading3>{intl.formatMessage({ id: 'components.shared.liveDemo' })}</MarginalHeading3>
      <ComponentDemoBox demo={getDemoToggle()} codeInHtml={getDemoToggleNg.nodes[0].html} css={marginBottom32px} />
      <ComponentDemoBox demo={getDemoToggleDisabled()} codeInHtml={getDemoToggleDisabledNg.nodes[0].html} />
    </TabContentWrapper>
  );

  return (
    <section css={sectionStyles}>
      <ResponsiveContentLayout>
        <AnchorMarginalHeading2 headingHash={headingHash}>
          {intl.formatMessage({ id: 'components.toggle.title' })}
        </AnchorMarginalHeading2>
        <MarginalParagraph css={marginBottom64px}>
          {intl.formatMessage({ id: 'components.toggle.description' })}
        </MarginalParagraph>

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
