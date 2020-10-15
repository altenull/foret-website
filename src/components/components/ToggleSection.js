import { Heading3, Paragraph, Subtitle2, Tab, TabGroup, Toggle } from '@altenull/foret-react';
import { css } from '@emotion/core';
import { useIntl } from 'gatsby-plugin-intl';
import React, { Fragment } from 'react';
import {
  TOGGLE_PROPERTIES_WITHOUT_DESCRIPTION,
  TOGGLE_PROPS_WITHOUT_DESCRIPTION,
} from '../../constants/components.constant';
import { CodeViewerContainer } from '../../containers/code';
import { ComponentFactorEnum } from '../../enums/components/component-factor.enum';
import { useToggleSectionQuery } from '../../hooks/components';
import { getPropertiesOfComponentFactor, getPropsOfComponentFactor, getPropsTable } from '../../utils/components.util';
import { marginTopForHeading2, marginTopForHeading3, marginTopForSubtitle2 } from '../../utils/margin.util';
import { ComponentDemoBox, DemoDivider } from '../code';
import { TabContentWrapper } from '../common';
import { ResponsiveContentLayout } from '../foundation';
import AnchorHeading2 from './AnchorHeading2';

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
        <Heading3 enableMargin>{intl.formatMessage({ id: 'components.shared.liveDemo' })}</Heading3>
        <Subtitle2>Default:</Subtitle2>
        <ComponentDemoBox
          demo={getDemoToggle()}
          codeInHtml={demoToggleReactCode.nodes[0].html}
          codeInMarkdown={demoToggleReactCode.nodes[0].rawMarkdownBody}
        />
        <Subtitle2 css={marginTopForSubtitle2}>Disabled:</Subtitle2>
        <ComponentDemoBox
          demo={getDemoToggleDisabled()}
          codeInHtml={demoToggleDisabledReactCode.nodes[0].html}
          codeInMarkdown={demoToggleDisabledReactCode.nodes[0].rawMarkdownBody}
        />

        <Heading3 enableMargin css={marginTopForHeading3}>
          {intl.formatMessage({ id: 'components.shared.imports' })}
        </Heading3>
        <CodeViewerContainer
          codeInHtml={importToggleReactCode.nodes[0].html}
          codeInMarkdown={importToggleReactCode.nodes[0].rawMarkdownBody}
        />

        <Heading3 enableMargin css={marginTopForHeading3}>
          {intl.formatMessage({ id: 'components.shared.props' })}
        </Heading3>
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
        <Heading3 enableMargin>{intl.formatMessage({ id: 'components.shared.liveDemo' })}</Heading3>
        <Subtitle2>Default:</Subtitle2>
        <ComponentDemoBox
          demo={getDemoToggle()}
          codeInHtml={demoToggleNgCode.nodes[0].html}
          codeInMarkdown={demoToggleNgCode.nodes[0].rawMarkdownBody}
        />
        <Subtitle2 css={marginTopForSubtitle2}>Disabled:</Subtitle2>
        <ComponentDemoBox
          demo={getDemoToggleDisabled()}
          codeInHtml={demoToggleDisabledNgCode.nodes[0].html}
          codeInMarkdown={demoToggleDisabledNgCode.nodes[0].rawMarkdownBody}
        />

        <Heading3 enableMargin css={marginTopForHeading3}>
          {intl.formatMessage({ id: 'components.shared.imports' })}
        </Heading3>
        <CodeViewerContainer
          codeInHtml={importToggleNgCode.nodes[0].html}
          codeInMarkdown={importToggleNgCode.nodes[0].rawMarkdownBody}
        />

        <Heading3 enableMargin css={marginTopForHeading3}>
          {intl.formatMessage({ id: 'components.shared.properties' })}
        </Heading3>
        {getPropsTable(toggleProperties)}
      </TabContentWrapper>
    );
  };

  return (
    <section css={sectionStyles}>
      <ResponsiveContentLayout>
        <AnchorHeading2 css={marginTopForHeading2} headingHash={headingHash}>
          {intl.formatMessage({ id: 'components.toggle.title' })}
        </AnchorHeading2>
        <Paragraph enableMargin>{intl.formatMessage({ id: 'components.toggle.description' })}</Paragraph>

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
