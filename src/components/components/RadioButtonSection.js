import {
  MarginalHeading3,
  MarginalParagraph,
  RadioButton,
  RadioButtonGroup,
  Subtitle2,
  Tab,
  TabGroup,
} from '@altenull/foret-react';
import { css } from '@emotion/core';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import {
  RADIO_BUTTON_GROUP_PROPERTIES_WITHOUT_DESCRIPTION,
  RADIO_BUTTON_GROUP_PROPS_WITHOUT_DESCRIPTION,
  RADIO_BUTTON_PROPERTIES_WITHOUT_DESCRIPTION,
  RADIO_BUTTON_PROPS_WITHOUT_DESCRIPTION,
} from '../../constants/components.constant';
import { CodeViewerContainer } from '../../containers/code';
import { ComponentFactorEnum } from '../../enums/components/component-factor.enum';
import { useRadioButtonSectionQuery } from '../../hooks/components';
import { getPropertiesOfComponentFactor, getPropsOfComponentFactor, getPropsTable } from '../../utils/components.util';
import { marginTopForHeading2, marginTopForHeading3, marginTopForSubtitle2 } from '../../utils/margin.util';
import { ComponentDemoBox } from '../code';
import { TabContentWrapper } from '../common';
import { ResponsiveContentLayout } from '../foundation';
import AnchorMarginalHeading2 from './AnchorMarginalHeading2';

const sectionStyles = css`
  position: relative;
`;

const RadioButtonSection = ({ headingHash }) => {
  const intl = useIntl();
  const {
    importRadioButtonReactCode,
    importRadioButtonNgCode,
    demoRadioButtonReactCode,
    demoRadioButtonNgCode,
    demoRadioButtonDisabledReactCode,
    demoRadioButtonDisabledNgCode,
  } = useRadioButtonSectionQuery();

  const getDemoRadioButton = () => (
    <RadioButtonGroup legendText={'Radio button'} checkedValue={'radioButton2'}>
      <RadioButton id={'radio-button-1'} labelText={'option 1'} value={'radioButton1'} />
      <RadioButton id={'radio-button-2'} labelText={'option 2'} value={'radioButton2'} />
      <RadioButton id={'radio-button-3'} labelText={'option 3'} value={'radioButton3'} />
    </RadioButtonGroup>
  );

  const getDemoRadioButtonDisabled = () => (
    <RadioButtonGroup legendText={'Radio button'} checkedValue={'disabledRadioButton2'} disabled={true}>
      <RadioButton id={'disabled-radio-button-1'} labelText={'option 1'} value={'disabledRadioButton1'} />
      <RadioButton id={'disabled-radio-button-2'} labelText={'option 2'} value={'disabledRadioButton2'} />
      <RadioButton id={'disabled-radio-button-3'} labelText={'option 3'} value={'disabledRadioButton3'} />
    </RadioButtonGroup>
  );

  const getReactVersionContent = () => {
    const radioButtonGroupProps = getPropsOfComponentFactor(
      intl,
      ComponentFactorEnum.RadioButton,
      'radioButtonGroup',
      RADIO_BUTTON_GROUP_PROPS_WITHOUT_DESCRIPTION
    );
    const radioButtonProps = getPropsOfComponentFactor(
      intl,
      ComponentFactorEnum.RadioButton,
      'radioButton',
      RADIO_BUTTON_PROPS_WITHOUT_DESCRIPTION
    );

    return (
      <TabContentWrapper>
        <MarginalHeading3>{intl.formatMessage({ id: 'components.shared.liveDemo' })}</MarginalHeading3>
        <Subtitle2>Default:</Subtitle2>
        <ComponentDemoBox demo={getDemoRadioButton()} codeInHtml={demoRadioButtonReactCode.nodes[0].html} />
        <Subtitle2 css={marginTopForSubtitle2}>Disabled:</Subtitle2>
        <ComponentDemoBox
          demo={getDemoRadioButtonDisabled()}
          codeInHtml={demoRadioButtonDisabledReactCode.nodes[0].html}
        />

        <MarginalHeading3 css={marginTopForHeading3}>
          {intl.formatMessage({ id: 'components.shared.imports' })}
        </MarginalHeading3>
        <CodeViewerContainer codeInHtml={importRadioButtonReactCode.nodes[0].html} />

        <MarginalHeading3 css={marginTopForHeading3}>
          {intl.formatMessage({ id: 'components.shared.props' })}
        </MarginalHeading3>
        <Subtitle2>{'<RadioButtonGroup>'}</Subtitle2>
        {getPropsTable(radioButtonGroupProps)}
        <Subtitle2 css={marginTopForSubtitle2}>{'<RadioButton>'}</Subtitle2>
        {getPropsTable(radioButtonProps)}
      </TabContentWrapper>
    );
  };

  const getAngularVersionContent = () => {
    const radioButtonGroupProperties = getPropertiesOfComponentFactor(
      intl,
      ComponentFactorEnum.RadioButton,
      'radioButtonGroup',
      RADIO_BUTTON_GROUP_PROPERTIES_WITHOUT_DESCRIPTION
    );
    const radioButtonProperties = getPropertiesOfComponentFactor(
      intl,
      ComponentFactorEnum.RadioButton,
      'radioButton',
      RADIO_BUTTON_PROPERTIES_WITHOUT_DESCRIPTION
    );

    return (
      <TabContentWrapper>
        <MarginalHeading3>{intl.formatMessage({ id: 'components.shared.liveDemo' })}</MarginalHeading3>
        <Subtitle2>Default:</Subtitle2>
        <ComponentDemoBox demo={getDemoRadioButton()} codeInHtml={demoRadioButtonNgCode.nodes[0].html} />
        <Subtitle2 css={marginTopForSubtitle2}>Disabled:</Subtitle2>
        <ComponentDemoBox
          demo={getDemoRadioButtonDisabled()}
          codeInHtml={demoRadioButtonDisabledNgCode.nodes[0].html}
        />

        <MarginalHeading3 css={marginTopForHeading3}>
          {intl.formatMessage({ id: 'components.shared.imports' })}
        </MarginalHeading3>
        <CodeViewerContainer codeInHtml={importRadioButtonNgCode.nodes[0].html} />

        <MarginalHeading3 css={marginTopForHeading3}>
          {intl.formatMessage({ id: 'components.shared.properties' })}
        </MarginalHeading3>
        <Subtitle2>{'<foret-radio-button-group>'}</Subtitle2>
        {getPropsTable(radioButtonGroupProperties)}
        <Subtitle2 css={marginTopForSubtitle2}>{'<foret-radio-button>'}</Subtitle2>
        {getPropsTable(radioButtonProperties)}
      </TabContentWrapper>
    );
  };

  return (
    <section css={sectionStyles}>
      <ResponsiveContentLayout>
        <AnchorMarginalHeading2 css={marginTopForHeading2} headingHash={headingHash}>
          {intl.formatMessage({ id: 'components.radioButton.title' })}
        </AnchorMarginalHeading2>
        <MarginalParagraph>{intl.formatMessage({ id: 'components.radioButton.description' })}</MarginalParagraph>

        <TabGroup selectedValue={'radioButtonSectionReactTap'} name={'radioButton-section-tap'}>
          <Tab id={'radioButton-section-react-tap'} labelText={'React'} value={'radioButtonSectionReactTap'}>
            {getReactVersionContent()}
          </Tab>
          <Tab id={'radioButton-section-ng-tap'} labelText={'Angular'} value={'radioButtonSectionNgTap'}>
            {getAngularVersionContent()}
          </Tab>
        </TabGroup>
      </ResponsiveContentLayout>
    </section>
  );
};

export default RadioButtonSection;
