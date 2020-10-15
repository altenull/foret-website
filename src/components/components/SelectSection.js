import {
  Heading3,
  Paragraph,
  Select,
  SelectItem,
  SelectItemGroup,
  Subtitle2,
  Tab,
  TabGroup,
} from '@altenull/foret-react';
import { css } from '@emotion/core';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import {
  SELECT_ITEM_GROUP_PROPS_WITHOUT_DESCRIPTION,
  SELECT_ITEM_PROPS_WITHOUT_DESCRIPTION,
  SELECT_PROPERTIES_WITHOUT_DESCRIPTION,
  SELECT_PROPS_WITHOUT_DESCRIPTION,
} from '../../constants/components.constant';
import { CodeViewerContainer } from '../../containers/code';
import { ComponentFactorEnum } from '../../enums/components/component-factor.enum';
import { useSelectSectionQuery } from '../../hooks/components';
import { getPropertiesOfComponentFactor, getPropsOfComponentFactor, getPropsTable } from '../../utils/components.util';
import { marginTopForHeading2, marginTopForHeading3, marginTopForSubtitle2 } from '../../utils/margin.util';
import { ComponentDemoBox } from '../code';
import { TabContentWrapper } from '../common';
import { ResponsiveContentLayout } from '../foundation';
import AnchorMarginalHeading2 from './AnchorMarginalHeading2';

const sectionStyles = css`
  position: relative;
`;

const SelectSection = ({ headingHash }) => {
  const intl = useIntl();
  const {
    importSelectReactCode,
    importSelectNgCode,
    demoSelectReactCode,
    demoSelectNgCode,
    demoSelectGroupedReactCode,
    demoSelectGroupedNgCode,
    demoSelectWithPlaceholderReactCode,
    demoSelectWithPlaceholderNgCode,
    demoSelectDisabledReactCode,
    demoSelectDisabledNgCode,
  } = useSelectSectionQuery();

  const getDemoSelect = () => (
    <Select id={'select'} legendText={'Select'} selectedValue={'option2'}>
      <SelectItem value={'option1'} labelText={'option 1'} />
      <SelectItem value={'option2'} labelText={'option 2'} />
      <SelectItem value={'option3'} labelText={'option 3'} disabled={true} />
      <SelectItem value={'option4'} labelText={'option 4'} disabled={true} />
      <SelectItem value={'option5'} labelText={'option 5'} />
      <SelectItem value={'option6'} labelText={'option 6'} />
    </Select>
  );

  const getDemoSelectGrouped = () => (
    <Select id={'grouped-select'} legendText={'Select'} selectedValue={'option2'}>
      <SelectItemGroup labelText={'Category 1'}>
        <SelectItem value={'option1'} labelText={'option 1'} />
        <SelectItem value={'option2'} labelText={'option 2'} />
        <SelectItem value={'option3'} labelText={'option 3'} disabled={true} />
      </SelectItemGroup>

      <SelectItemGroup labelText={'Category 2'} disabled={true}>
        <SelectItem value={'option4'} labelText={'option 4'} />
        <SelectItem value={'option5'} labelText={'option 5'} />
        <SelectItem value={'option6'} labelText={'option 6'} />
      </SelectItemGroup>
    </Select>
  );

  const getDemoSelectWithPlaceholder = () => (
    <Select id={'select-with-placeholder'} legendText={'Select'} placeholder={'Please choose an option'}>
      <SelectItem value={'option1'} labelText={'option 1'} />
      <SelectItem value={'option2'} labelText={'option 2'} />
      <SelectItem value={'option3'} labelText={'option 3'} disabled={true} />
      <SelectItem value={'option4'} labelText={'option 4'} disabled={true} />
      <SelectItem value={'option5'} labelText={'option 5'} />
      <SelectItem value={'option6'} labelText={'option 6'} />
    </Select>
  );

  const getDemoSelectDisabled = () => (
    <Select id={'disabled-select'} legendText={'Select'} selectedValue={'option2'} disabled={true}>
      <SelectItem value={'option1'} labelText={'option 1'} />
      <SelectItem value={'option2'} labelText={'option 2'} />
      <SelectItem value={'option3'} labelText={'option 3'} />
      <SelectItem value={'option4'} labelText={'option 4'} />
      <SelectItem value={'option5'} labelText={'option 5'} />
      <SelectItem value={'option6'} labelText={'option 6'} />
    </Select>
  );

  const getReactVersionContent = () => {
    const selectProps = getPropsOfComponentFactor(
      intl,
      ComponentFactorEnum.Select,
      'select',
      SELECT_PROPS_WITHOUT_DESCRIPTION
    );
    const selectItemGroupProps = getPropsOfComponentFactor(
      intl,
      ComponentFactorEnum.Select,
      'selectItemGroup',
      SELECT_ITEM_GROUP_PROPS_WITHOUT_DESCRIPTION
    );
    const selectItemProps = getPropsOfComponentFactor(
      intl,
      ComponentFactorEnum.Select,
      'selectItem',
      SELECT_ITEM_PROPS_WITHOUT_DESCRIPTION
    );

    return (
      <TabContentWrapper>
        <Heading3 enableMargin>{intl.formatMessage({ id: 'components.shared.liveDemo' })}</Heading3>
        <Subtitle2>Default:</Subtitle2>
        <ComponentDemoBox
          demo={getDemoSelect()}
          codeInHtml={demoSelectReactCode.nodes[0].html}
          codeInMarkdown={demoSelectReactCode.nodes[0].rawMarkdownBody}
        />
        <Subtitle2 css={marginTopForSubtitle2}>Grouped:</Subtitle2>
        <ComponentDemoBox
          demo={getDemoSelectGrouped()}
          codeInHtml={demoSelectGroupedReactCode.nodes[0].html}
          codeInMarkdown={demoSelectGroupedReactCode.nodes[0].rawMarkdownBody}
        />
        <Subtitle2 css={marginTopForSubtitle2}>With placeholder:</Subtitle2>
        <ComponentDemoBox
          demo={getDemoSelectWithPlaceholder()}
          codeInHtml={demoSelectWithPlaceholderReactCode.nodes[0].html}
          codeInMarkdown={demoSelectWithPlaceholderReactCode.nodes[0].rawMarkdownBody}
        />
        <Subtitle2 css={marginTopForSubtitle2}>Disabled:</Subtitle2>
        <ComponentDemoBox
          demo={getDemoSelectDisabled()}
          codeInHtml={demoSelectDisabledReactCode.nodes[0].html}
          codeInMarkdown={demoSelectDisabledReactCode.nodes[0].rawMarkdownBody}
        />

        <Heading3 enableMargin css={marginTopForHeading3}>
          {intl.formatMessage({ id: 'components.shared.imports' })}
        </Heading3>
        <CodeViewerContainer
          codeInHtml={importSelectReactCode.nodes[0].html}
          codeInMarkdown={importSelectReactCode.nodes[0].rawMarkdownBody}
        />

        <Heading3 enableMargin css={marginTopForHeading3}>
          {intl.formatMessage({ id: 'components.shared.props' })}
        </Heading3>
        <Subtitle2>{'<Select>'}</Subtitle2>
        {getPropsTable(selectProps)}
        <Subtitle2 css={marginTopForSubtitle2}>{'<SelectItemGroup>'}</Subtitle2>
        {getPropsTable(selectItemGroupProps)}
        <Subtitle2 css={marginTopForSubtitle2}>{'<SelectItem>'}</Subtitle2>
        {getPropsTable(selectItemProps)}
      </TabContentWrapper>
    );
  };

  const getAngularVersionContent = () => {
    const selectProperties = getPropertiesOfComponentFactor(
      intl,
      ComponentFactorEnum.Select,
      'select',
      SELECT_PROPERTIES_WITHOUT_DESCRIPTION
    );

    return (
      <TabContentWrapper>
        <Heading3 enableMargin>{intl.formatMessage({ id: 'components.shared.liveDemo' })}</Heading3>
        <Subtitle2>Default:</Subtitle2>
        <ComponentDemoBox
          demo={getDemoSelect()}
          codeInHtml={demoSelectNgCode.nodes[0].html}
          codeInMarkdown={demoSelectNgCode.nodes[0].rawMarkdownBody}
        />
        <Subtitle2 css={marginTopForSubtitle2}>Grouped:</Subtitle2>
        <ComponentDemoBox
          demo={getDemoSelectGrouped()}
          codeInHtml={demoSelectGroupedNgCode.nodes[0].html}
          codeInMarkdown={demoSelectGroupedNgCode.nodes[0].rawMarkdownBody}
        />
        <Subtitle2 css={marginTopForSubtitle2}>With placeholder:</Subtitle2>
        <ComponentDemoBox
          demo={getDemoSelectWithPlaceholder()}
          codeInHtml={demoSelectWithPlaceholderNgCode.nodes[0].html}
          codeInMarkdown={demoSelectWithPlaceholderNgCode.nodes[0].rawMarkdownBody}
        />
        <Subtitle2 css={marginTopForSubtitle2}>Disabled:</Subtitle2>
        <ComponentDemoBox
          demo={getDemoSelectDisabled()}
          codeInHtml={demoSelectDisabledNgCode.nodes[0].html}
          codeInMarkdown={demoSelectDisabledNgCode.nodes[0].rawMarkdownBody}
        />

        <Heading3 enableMargin css={marginTopForHeading3}>
          {intl.formatMessage({ id: 'components.shared.imports' })}
        </Heading3>
        <CodeViewerContainer
          codeInHtml={importSelectNgCode.nodes[0].html}
          codeInMarkdown={importSelectNgCode.nodes[0].rawMarkdownBody}
        />

        <Heading3 enableMargin css={marginTopForHeading3}>
          {intl.formatMessage({ id: 'components.shared.properties' })}
        </Heading3>
        <Subtitle2>{'<foret-select>'}</Subtitle2>
        {getPropsTable(selectProperties)}
      </TabContentWrapper>
    );
  };

  return (
    <section css={sectionStyles}>
      <ResponsiveContentLayout>
        <AnchorMarginalHeading2 css={marginTopForHeading2} headingHash={headingHash}>
          {intl.formatMessage({ id: 'components.select.title' })}
        </AnchorMarginalHeading2>
        <Paragraph enableMargin>{intl.formatMessage({ id: 'components.select.description' })}</Paragraph>

        <TabGroup selectedValue={'selectSectionReactTap'} name={'select-section-tap'}>
          <Tab id={'select-section-react-tap'} labelText={'React'} value={'selectSectionReactTap'}>
            {getReactVersionContent()}
          </Tab>
          <Tab id={'select-section-ng-tap'} labelText={'Angular'} value={'selectSectionNgTap'}>
            {getAngularVersionContent()}
          </Tab>
        </TabGroup>
      </ResponsiveContentLayout>
    </section>
  );
};

export default SelectSection;
