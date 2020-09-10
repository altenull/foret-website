import {
  MarginalHeading3,
  MarginalParagraph,
  PrimaryButton,
  SecondaryButton,
  Subtitle2,
  Tab,
  TabGroup,
} from '@altenull/foret-react';
import { css } from '@emotion/core';
import { useIntl } from 'gatsby-plugin-intl';
import React, { Fragment } from 'react';
import { ComponentFactorEnum } from '../../enums/components/component-factor.enum';
import { useButtonSectionQuery } from '../../hooks';
import { marginTopForHeading3, marginTopForSubtitle2 } from '../../utils/margin.utils';
import { getPropsOfComponentFactor } from '../../utils/page.utils';
import { getPropsTable } from '../../utils/components.utils';
import { CodeViewer, ComponentDemoBox, DemoDivider, ResponsiveContentLayout, TabContentWrapper } from '../common';
import AnchorMarginalHeading2 from './AnchorMarginalHeading2';

const sectionStyles = css`
  position: relative;
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
  } = useButtonSectionQuery();

  const getSharedOverviewContent = () => (
    <Fragment>
      <MarginalHeading3>{intl.formatMessage({ id: 'components.shared.overview' })}</MarginalHeading3>
      <MarginalParagraph>{intl.formatMessage({ id: 'components.button.overview.description' })}</MarginalParagraph>
    </Fragment>
  );

  const getDemoPrimaryButton = () => (
    <Fragment>
      <PrimaryButton>primary button</PrimaryButton>
      <DemoDivider />
      <PrimaryButton disabled>primary button(disabled)</PrimaryButton>
    </Fragment>
  );

  const getDemoSecondaryButton = () => (
    <Fragment>
      <SecondaryButton>secondary button</SecondaryButton>
      <DemoDivider />
      <SecondaryButton disabled>secondary button(disabled)</SecondaryButton>
    </Fragment>
  );

  const buttonProps = getPropsOfComponentFactor(intl, `components.${ComponentFactorEnum.Button}.props.`);

  const getReactVersionContent = () => (
    <TabContentWrapper>
      {getSharedOverviewContent()}

      <MarginalHeading3 css={marginTopForHeading3}>
        {intl.formatMessage({ id: 'components.shared.liveDemo' })}
      </MarginalHeading3>
      <Subtitle2>Primary Button:</Subtitle2>
      <ComponentDemoBox demo={getDemoPrimaryButton()} codeInHtml={getDemoPrimaryButtonReact.nodes[0].html} />
      <Subtitle2 css={marginTopForSubtitle2}>Secondary Button:</Subtitle2>
      <ComponentDemoBox demo={getDemoSecondaryButton()} codeInHtml={getDemoSecondaryButtonReact.nodes[0].html} />

      <MarginalHeading3 css={marginTopForHeading3}>
        {intl.formatMessage({ id: 'components.shared.imports' })}
      </MarginalHeading3>
      <CodeViewer codeInHtml={getImportButtonReact.nodes[0].html} />

      <MarginalHeading3 css={marginTopForHeading3}>
        {intl.formatMessage({ id: 'components.shared.props' })}
      </MarginalHeading3>
      {getPropsTable(buttonProps)}
    </TabContentWrapper>
  );

  const getAngularVersionContent = () => (
    <TabContentWrapper>
      {getSharedOverviewContent()}

      <MarginalHeading3 css={marginTopForHeading3}>
        {intl.formatMessage({ id: 'components.shared.liveDemo' })}
      </MarginalHeading3>
      <Subtitle2>Primary Button:</Subtitle2>
      <ComponentDemoBox demo={getDemoPrimaryButton()} codeInHtml={getDemoPrimaryButtonNg.nodes[0].html} />
      <Subtitle2 css={marginTopForSubtitle2}>Secondary Button:</Subtitle2>
      <ComponentDemoBox demo={getDemoSecondaryButton()} codeInHtml={getDemoSecondaryButtonNg.nodes[0].html} />

      <MarginalHeading3 css={marginTopForHeading3}>
        {intl.formatMessage({ id: 'components.shared.imports' })}
      </MarginalHeading3>
      <CodeViewer codeInHtml={getImportButtonNg.nodes[0].html} />
    </TabContentWrapper>
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
