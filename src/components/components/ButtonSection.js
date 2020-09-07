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
import { marginBottom32px, marginBottom64px } from '../../utils/margin.utils';
import { getPropsOfComponentFactor, getPropsTable } from '../../utils/page.utils';
import { CodeViewer, ComponentDemoBox, DemoDivider, ResponsiveContentLayout } from '../common';
import AnchorMarginalHeading2 from './AnchorMarginalHeading2';

const sectionStyles = css`
  position: relative;
`;

const contentWrapperStyles = css`
  padding: 64px 0;
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
    <div css={contentWrapperStyles}>
      <MarginalHeading3>{intl.formatMessage({ id: 'components.shared.imports' })}</MarginalHeading3>
      <CodeViewer codeInHtml={getImportButtonReact.nodes[0].html} css={marginBottom64px} />

      <MarginalHeading3>{intl.formatMessage({ id: 'components.shared.liveDemo' })}</MarginalHeading3>
      <ComponentDemoBox
        demo={getDemoPrimaryButton()}
        codeInHtml={getDemoPrimaryButtonReact.nodes[0].html}
        css={marginBottom32px}
      />
      <ComponentDemoBox
        demo={getDemoSecondaryButton()}
        codeInHtml={getDemoSecondaryButtonReact.nodes[0].html}
        css={marginBottom64px}
      />

      <MarginalHeading3>{intl.formatMessage({ id: 'components.shared.props' })}</MarginalHeading3>
      {getPropsTable(buttonProps)}
    </div>
  );

  const getAngularVersionContent = () => (
    <div css={contentWrapperStyles}>
      <MarginalHeading3>{intl.formatMessage({ id: 'components.shared.imports' })}</MarginalHeading3>
      <CodeViewer codeInHtml={getImportButtonNg.nodes[0].html} css={marginBottom64px} />

      <MarginalHeading3>{intl.formatMessage({ id: 'components.shared.liveDemo' })}</MarginalHeading3>
      <Subtitle2>Primary Button:</Subtitle2>
      <ComponentDemoBox
        demo={getDemoPrimaryButton()}
        codeInHtml={getDemoPrimaryButtonNg.nodes[0].html}
        css={marginBottom32px}
      />
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
        <MarginalParagraph css={marginBottom64px}>
          {intl.formatMessage({ id: 'components.button.description' })}
        </MarginalParagraph>

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
