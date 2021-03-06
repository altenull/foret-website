import { Heading3, Paragraph, Subtitle2, Tab, TabGroup } from '@altenull/foret-react';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import {
  TAB_GROUP_PROPERTIES_WITHOUT_DESCRIPTION,
  TAB_GROUP_PROPS_WITHOUT_DESCRIPTION,
  TAB_PROPERTIES_WITHOUT_DESCRIPTION,
  TAB_PROPS_WITHOUT_DESCRIPTION,
} from '../../constants/components.constant';
import { CodeViewerContainer } from '../../containers/code';
import { ComponentFactorEnum } from '../../enums/components/component-factor.enum';
import { useTabSectionQuery } from '../../hooks/components';
import { getPropertiesOfComponentFactor, getPropsOfComponentFactor, getPropsTable } from '../../utils/components.util';
import { marginTopForHeading2, marginTopForHeading3, marginTopForSubtitle2 } from '../../utils/margin.util';
import { ComponentDemoBox } from '../code';
import { TabContentWrapper } from '../common';
import { ResponsiveContentLayout } from '../foundation';
import AnchorHeading2 from './AnchorHeading2';

const TabSection = ({ componentHash, onAnchorHeading2Click }) => {
  const intl = useIntl();
  const { importTabReactCode, importTabNgCode, demoTabReactCode, demoTabNgCode } = useTabSectionQuery();

  const getDemoTab = () => (
    <TabGroup selectedValue={'tab2'}>
      <Tab id={'tab-1'} labelText={'Tab 1'} value={'tab1'}>
        <h1>Tab 1 content</h1>
      </Tab>
      <Tab id={'tab-2'} labelText={'Tab 2'} value={'tab2'}>
        <h2>Tab 2 content</h2>
      </Tab>
      <Tab id={'tab-3'} labelText={'Tab 3'} value={'tab3'}>
        <h3>Tab 3 content</h3>
      </Tab>
    </TabGroup>
  );

  const getReactVersionContent = () => {
    const tabGroupProps = getPropsOfComponentFactor(
      intl,
      ComponentFactorEnum.Tab,
      'tabGroup',
      TAB_GROUP_PROPS_WITHOUT_DESCRIPTION
    );
    const tabProps = getPropsOfComponentFactor(intl, ComponentFactorEnum.Tab, 'tab', TAB_PROPS_WITHOUT_DESCRIPTION);

    return (
      <TabContentWrapper>
        <Heading3 enableMargin enableResponsive>
          {intl.formatMessage({ id: 'components.shared.liveDemo' })}
        </Heading3>
        <Subtitle2>Default:</Subtitle2>
        <ComponentDemoBox
          demo={getDemoTab()}
          codeInHtml={demoTabReactCode.nodes[0].html}
          codeInMarkdown={demoTabReactCode.nodes[0].rawMarkdownBody}
        />

        <Heading3 css={marginTopForHeading3} enableMargin enableResponsive>
          {intl.formatMessage({ id: 'components.shared.imports' })}
        </Heading3>
        <CodeViewerContainer
          codeInHtml={importTabReactCode.nodes[0].html}
          codeInMarkdown={importTabReactCode.nodes[0].rawMarkdownBody}
        />

        <Heading3 css={marginTopForHeading3} enableMargin enableResponsive>
          {intl.formatMessage({ id: 'components.shared.props' })}
        </Heading3>
        <Subtitle2>{'<TabGroup>'}</Subtitle2>
        {getPropsTable(tabGroupProps)}
        <Subtitle2 css={marginTopForSubtitle2}>{'<Tab>'}</Subtitle2>
        {getPropsTable(tabProps)}
      </TabContentWrapper>
    );
  };

  const getAngularVersionContent = () => {
    const tabGroupProperties = getPropertiesOfComponentFactor(
      intl,
      ComponentFactorEnum.Tab,
      'tabGroup',
      TAB_GROUP_PROPERTIES_WITHOUT_DESCRIPTION
    );
    const tabProperties = getPropertiesOfComponentFactor(
      intl,
      ComponentFactorEnum.Tab,
      'tab',
      TAB_PROPERTIES_WITHOUT_DESCRIPTION
    );

    return (
      <TabContentWrapper>
        <Heading3 enableMargin enableResponsive>
          {intl.formatMessage({ id: 'components.shared.liveDemo' })}
        </Heading3>
        <Subtitle2>Default:</Subtitle2>
        <ComponentDemoBox
          demo={getDemoTab()}
          codeInHtml={demoTabNgCode.nodes[0].html}
          codeInMarkdown={demoTabNgCode.nodes[0].rawMarkdownBody}
        />

        <Heading3 css={marginTopForHeading3} enableMargin enableResponsive>
          {intl.formatMessage({ id: 'components.shared.imports' })}
        </Heading3>
        <CodeViewerContainer
          codeInHtml={importTabNgCode.nodes[0].html}
          codeInMarkdown={importTabNgCode.nodes[0].rawMarkdownBody}
        />

        <Heading3 css={marginTopForHeading3} enableMargin enableResponsive>
          {intl.formatMessage({ id: 'components.shared.properties' })}
        </Heading3>
        <Subtitle2>{'<foret-tab-group>'}</Subtitle2>
        {getPropsTable(tabGroupProperties)}
        <Subtitle2 css={marginTopForSubtitle2}>{'<foret-tab>'}</Subtitle2>
        {getPropsTable(tabProperties)}
      </TabContentWrapper>
    );
  };

  return (
    <section>
      <ResponsiveContentLayout>
        <AnchorHeading2
          css={marginTopForHeading2}
          componentHash={componentHash}
          onAnchorHeading2Click={onAnchorHeading2Click}>
          {intl.formatMessage({ id: 'components.tab.title' })}
        </AnchorHeading2>
        <Paragraph enableMargin enableResponsive>
          {intl.formatMessage({ id: 'components.tab.description' })}
        </Paragraph>

        <TabGroup selectedValue={'tabSectionReactTap'} name={'tab-section-tap'}>
          <Tab id={'tab-section-react-tap'} labelText={'React'} value={'tabSectionReactTap'}>
            {getReactVersionContent()}
          </Tab>
          <Tab id={'tab-section-ng-tap'} labelText={'Angular'} value={'tabSectionNgTap'}>
            {getAngularVersionContent()}
          </Tab>
        </TabGroup>
      </ResponsiveContentLayout>
    </section>
  );
};

export default TabSection;
