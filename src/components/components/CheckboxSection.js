import { Checkbox, CheckboxGroup, Heading3, Paragraph, Subtitle2, Tab, TabGroup } from '@altenull/foret-react';
import { css } from '@emotion/core';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import {
  CHECKBOX_GROUP_PROPERTIES_WITHOUT_DESCRIPTION,
  CHECKBOX_GROUP_PROPS_WITHOUT_DESCRIPTION,
  CHECKBOX_PROPERTIES_WITHOUT_DESCRIPTION,
  CHECKBOX_PROPS_WITHOUT_DESCRIPTION,
} from '../../constants/components.constant';
import { CodeViewerContainer } from '../../containers/code';
import { ComponentFactorEnum } from '../../enums/components/component-factor.enum';
import { useCheckboxSectionQuery } from '../../hooks/components';
import { getPropertiesOfComponentFactor, getPropsOfComponentFactor, getPropsTable } from '../../utils/components.util';
import { marginTopForHeading2, marginTopForHeading3, marginTopForSubtitle2 } from '../../utils/margin.util';
import { ComponentDemoBox } from '../code';
import { TabContentWrapper } from '../common';
import { ResponsiveContentLayout } from '../foundation';
import AnchorHeading2 from './AnchorHeading2';

const sectionStyles = css`
  position: relative;
`;

const CheckboxSection = ({ headingHash }) => {
  const intl = useIntl();
  const {
    importCheckboxReactCode,
    importCheckboxNgCode,
    demoCheckboxReactCode,
    demoCheckboxNgCode,
    demoCheckboxDisabledReactCode,
    demoCheckboxDisabledNgCode,
  } = useCheckboxSectionQuery();

  const getDemoCheckbox = () => (
    <CheckboxGroup legendText={'Checkbox'}>
      <Checkbox id={'checkbox-1'} labelText={'option 1'} />
      <Checkbox id={'checkbox-2'} labelText={'option 2'} checked={true} />
      <Checkbox id={'checkbox-3'} labelText={'option 3'} checked={true} />
    </CheckboxGroup>
  );

  const getDemoCheckboxDisabled = () => (
    <CheckboxGroup legendText={'Checkbox'} disabled={true}>
      <Checkbox id={'disabled-checkbox-1'} labelText={'option 1'} />
      <Checkbox id={'disabled-checkbox-2'} labelText={'option 2'} checked={true} />
      <Checkbox id={'disabled-checkbox-3'} labelText={'option 3'} checked={true} />
    </CheckboxGroup>
  );

  const getReactVersionContent = () => {
    const checkboxGroupProps = getPropsOfComponentFactor(
      intl,
      ComponentFactorEnum.Checkbox,
      'checkboxGroup',
      CHECKBOX_GROUP_PROPS_WITHOUT_DESCRIPTION
    );
    const checkboxProps = getPropsOfComponentFactor(
      intl,
      ComponentFactorEnum.Checkbox,
      'checkbox',
      CHECKBOX_PROPS_WITHOUT_DESCRIPTION
    );

    return (
      <TabContentWrapper>
        <Heading3 enableMargin>{intl.formatMessage({ id: 'components.shared.liveDemo' })}</Heading3>
        <Subtitle2>Default:</Subtitle2>
        <ComponentDemoBox
          demo={getDemoCheckbox()}
          codeInHtml={demoCheckboxReactCode.nodes[0].html}
          codeInMarkdown={demoCheckboxReactCode.nodes[0].rawMarkdownBody}
        />
        <Subtitle2 css={marginTopForSubtitle2}>Disabled:</Subtitle2>
        <ComponentDemoBox
          demo={getDemoCheckboxDisabled()}
          codeInHtml={demoCheckboxDisabledReactCode.nodes[0].html}
          codeInMarkdown={demoCheckboxDisabledReactCode.nodes[0].rawMarkdownBody}
        />

        <Heading3 enableMargin css={marginTopForHeading3}>
          {intl.formatMessage({ id: 'components.shared.imports' })}
        </Heading3>
        <CodeViewerContainer
          codeInHtml={importCheckboxReactCode.nodes[0].html}
          codeInMarkdown={importCheckboxReactCode.nodes[0].rawMarkdownBody}
        />

        <Heading3 enableMargin css={marginTopForHeading3}>
          {intl.formatMessage({ id: 'components.shared.props' })}
        </Heading3>
        <Subtitle2>{'<CheckboxGroup>'}</Subtitle2>
        {getPropsTable(checkboxGroupProps)}
        <Subtitle2 css={marginTopForSubtitle2}>{'<Checkbox>'}</Subtitle2>
        {getPropsTable(checkboxProps)}
      </TabContentWrapper>
    );
  };

  const getAngularVersionContent = () => {
    const checkboxGroupProperties = getPropertiesOfComponentFactor(
      intl,
      ComponentFactorEnum.Checkbox,
      'checkboxGroup',
      CHECKBOX_GROUP_PROPERTIES_WITHOUT_DESCRIPTION
    );
    const checkboxProperties = getPropertiesOfComponentFactor(
      intl,
      ComponentFactorEnum.Checkbox,
      'checkbox',
      CHECKBOX_PROPERTIES_WITHOUT_DESCRIPTION
    );

    return (
      <TabContentWrapper>
        <Heading3 enableMargin>{intl.formatMessage({ id: 'components.shared.liveDemo' })}</Heading3>
        <Subtitle2>Default:</Subtitle2>
        <ComponentDemoBox
          demo={getDemoCheckbox()}
          codeInHtml={demoCheckboxNgCode.nodes[0].html}
          codeInMarkdown={demoCheckboxNgCode.nodes[0].rawMarkdownBody}
        />
        <Subtitle2 css={marginTopForSubtitle2}>Disabled:</Subtitle2>
        <ComponentDemoBox
          demo={getDemoCheckboxDisabled()}
          codeInHtml={demoCheckboxDisabledNgCode.nodes[0].html}
          codeInMarkdown={demoCheckboxDisabledNgCode.nodes[0].rawMarkdownBody}
        />

        <Heading3 enableMargin css={marginTopForHeading3}>
          {intl.formatMessage({ id: 'components.shared.imports' })}
        </Heading3>
        <CodeViewerContainer
          codeInHtml={importCheckboxNgCode.nodes[0].html}
          codeInMarkdown={importCheckboxNgCode.nodes[0].rawMarkdownBody}
        />

        <Heading3 enableMargin css={marginTopForHeading3}>
          {intl.formatMessage({ id: 'components.shared.properties' })}
        </Heading3>
        <Subtitle2>{'<foret-checkbox-group>'}</Subtitle2>
        {getPropsTable(checkboxGroupProperties)}
        <Subtitle2 css={marginTopForSubtitle2}>{'<foret-checkbox>'}</Subtitle2>
        {getPropsTable(checkboxProperties)}
      </TabContentWrapper>
    );
  };

  return (
    <section css={sectionStyles}>
      <ResponsiveContentLayout>
        <AnchorHeading2 css={marginTopForHeading2} headingHash={headingHash}>
          {intl.formatMessage({ id: 'components.checkbox.title' })}
        </AnchorHeading2>
        <Paragraph enableMargin>{intl.formatMessage({ id: 'components.checkbox.description' })}</Paragraph>

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
