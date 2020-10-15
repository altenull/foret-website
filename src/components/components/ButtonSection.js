import {
  DangerButton,
  Heading3,
  Paragraph,
  PrimaryButton,
  SecondaryButton,
  Subtitle2,
  Tab,
  TabGroup,
} from '@altenull/foret-react';
import { css } from '@emotion/core';
import { useIntl } from 'gatsby-plugin-intl';
import React, { Fragment } from 'react';
import { BUTTON_PROPS_WITHOUT_DESCRIPTION } from '../../constants/components.constant';
import { CodeViewerContainer } from '../../containers/code';
import { ComponentFactorEnum } from '../../enums/components/component-factor.enum';
import { useButtonSectionQuery } from '../../hooks/components';
import { getPropsOfComponentFactor, getPropsTable } from '../../utils/components.util';
import { marginTopForHeading3, marginTopForSubtitle2 } from '../../utils/margin.util';
import { ComponentDemoBox, DemoDivider } from '../code';
import { TabContentWrapper } from '../common';
import { ResponsiveContentLayout } from '../foundation';
import AnchorHeading2 from './AnchorHeading2';

const sectionStyles = css`
  position: relative;
`;

const ButtonSection = ({ headingHash }) => {
  const intl = useIntl();
  const {
    importButtonReactCode,
    importButtonNgCode,
    demoPrimaryButtonReactCode,
    demoSecondaryButtonReactCode,
    demoDangerButtonReactCode,
    demoPrimaryButtonNgCode,
    demoSecondaryButtonNgCode,
    demoDangerButtonNgCode,
  } = useButtonSectionQuery();

  const getSharedOverviewContent = () => (
    <Fragment>
      <Heading3 enableMargin>{intl.formatMessage({ id: 'components.shared.notes' })}</Heading3>
      <Paragraph enableMargin>{intl.formatMessage({ id: 'components.button.notes.description' })}</Paragraph>
    </Fragment>
  );

  const getDemoPrimaryButton = () => (
    <Fragment>
      <PrimaryButton>primary button</PrimaryButton>
      <DemoDivider />
      <PrimaryButton disabled>primary button</PrimaryButton>
    </Fragment>
  );

  const getDemoSecondaryButton = () => (
    <Fragment>
      <SecondaryButton>secondary button</SecondaryButton>
      <DemoDivider />
      <SecondaryButton disabled>secondary button</SecondaryButton>
    </Fragment>
  );

  const getDemoDangerButton = () => (
    <Fragment>
      <DangerButton>danger button</DangerButton>
      <DemoDivider />
      <DangerButton disabled>danger button</DangerButton>
    </Fragment>
  );

  const getReactVersionContent = () => {
    const buttonProps = getPropsOfComponentFactor(
      intl,
      ComponentFactorEnum.Button,
      'button',
      BUTTON_PROPS_WITHOUT_DESCRIPTION
    );

    return (
      <TabContentWrapper>
        {getSharedOverviewContent()}

        <Heading3 enableMargin css={marginTopForHeading3}>
          {intl.formatMessage({ id: 'components.shared.liveDemo' })}
        </Heading3>
        <Subtitle2>Primary Button:</Subtitle2>
        <ComponentDemoBox
          demo={getDemoPrimaryButton()}
          codeInHtml={demoPrimaryButtonReactCode.nodes[0].html}
          codeInMarkdown={demoPrimaryButtonReactCode.nodes[0].rawMarkdownBody}
        />
        <Subtitle2 css={marginTopForSubtitle2}>Secondary Button:</Subtitle2>
        <ComponentDemoBox
          demo={getDemoSecondaryButton()}
          codeInHtml={demoSecondaryButtonReactCode.nodes[0].html}
          codeInMarkdown={demoSecondaryButtonReactCode.nodes[0].rawMarkdownBody}
        />
        <Subtitle2 css={marginTopForSubtitle2}>Danger Button:</Subtitle2>
        <ComponentDemoBox
          demo={getDemoDangerButton()}
          codeInHtml={demoDangerButtonReactCode.nodes[0].html}
          codeInMarkdown={demoDangerButtonReactCode.nodes[0].rawMarkdownBody}
        />

        <Heading3 enableMargin css={marginTopForHeading3}>
          {intl.formatMessage({ id: 'components.shared.imports' })}
        </Heading3>
        <CodeViewerContainer
          codeInHtml={importButtonReactCode.nodes[0].html}
          codeInMarkdown={importButtonReactCode.nodes[0].rawMarkdownBody}
        />

        <Heading3 enableMargin css={marginTopForHeading3}>
          {intl.formatMessage({ id: 'components.shared.props' })}
        </Heading3>
        {getPropsTable(buttonProps)}
      </TabContentWrapper>
    );
  };

  const getAngularVersionContent = () => (
    <TabContentWrapper>
      {getSharedOverviewContent()}

      <Heading3 enableMargin css={marginTopForHeading3}>
        {intl.formatMessage({ id: 'components.shared.liveDemo' })}
      </Heading3>
      <Subtitle2>Primary Button:</Subtitle2>
      <ComponentDemoBox
        demo={getDemoPrimaryButton()}
        codeInHtml={demoPrimaryButtonNgCode.nodes[0].html}
        codeInMarkdown={demoPrimaryButtonNgCode.nodes[0].rawMarkdownBody}
      />
      <Subtitle2 css={marginTopForSubtitle2}>Secondary Button:</Subtitle2>
      <ComponentDemoBox
        demo={getDemoSecondaryButton()}
        codeInHtml={demoSecondaryButtonNgCode.nodes[0].html}
        codeInMarkdown={demoSecondaryButtonNgCode.nodes[0].rawMarkdownBody}
      />
      <Subtitle2 css={marginTopForSubtitle2}>Danger Button:</Subtitle2>
      <ComponentDemoBox
        demo={getDemoDangerButton()}
        codeInHtml={demoDangerButtonNgCode.nodes[0].html}
        codeInMarkdown={demoDangerButtonNgCode.nodes[0].rawMarkdownBody}
      />

      <Heading3 enableMargin css={marginTopForHeading3}>
        {intl.formatMessage({ id: 'components.shared.imports' })}
      </Heading3>
      <CodeViewerContainer
        codeInHtml={importButtonNgCode.nodes[0].html}
        codeInMarkdown={importButtonNgCode.nodes[0].rawMarkdownBody}
      />
    </TabContentWrapper>
  );

  return (
    <section css={sectionStyles}>
      <ResponsiveContentLayout>
        <AnchorHeading2 headingHash={headingHash}>
          {intl.formatMessage({ id: 'components.button.title' })}
        </AnchorHeading2>
        <Paragraph enableMargin>{intl.formatMessage({ id: 'components.button.description' })}</Paragraph>

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
