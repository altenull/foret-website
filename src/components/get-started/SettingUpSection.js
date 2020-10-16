import { Heading2, Heading3, Paragraph, PrimaryButton } from '@altenull/foret-react';
import { css } from '@emotion/core';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { CodeViewerContainer } from '../../containers/code';
import { useGetStartedPageQuery } from '../../hooks/get-started';
import { marginTopForHeading2, marginTopForHeading3 } from '../../utils/margin.util';
import { ComponentDemoBox } from '../code';
import { ResponsiveContentLayout } from '../foundation';

const anchorStyles = css`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const SettingUpSection = () => {
  const intl = useIntl();
  const { getSettingUpWithForet, getCustomizingTheme, getDefaultTheme } = useGetStartedPageQuery();

  return (
    <section>
      <ResponsiveContentLayout>
        <Heading2 css={marginTopForHeading2} enableMargin enableResponsive>
          {intl.formatMessage({ id: 'getStarted.content.settingUp.title' })}
        </Heading2>
        <Paragraph enableMargin enableResponsive>
          {intl.formatMessage({ id: 'getStarted.content.settingUp.description1' })}
          <a css={anchorStyles} href={'https://emotion.sh/docs/theming'} target={'_blank'} rel={'noreferrer'}>
            emotion-theming
          </a>
          {intl.formatMessage({ id: 'getStarted.content.settingUp.description2' })}
        </Paragraph>
        <ComponentDemoBox
          demo={<PrimaryButton onClick={() => alert('Hey there!')}>Hello Foret!</PrimaryButton>}
          codeInHtml={getSettingUpWithForet.nodes[0].html}
          codeInMarkdown={getSettingUpWithForet.nodes[0].rawMarkdownBody}
        />
        <Heading3 css={marginTopForHeading3} enableMargin enableResponsive>
          {intl.formatMessage({ id: 'getStarted.content.settingUp.customizingTheme.title' })}
        </Heading3>
        <Paragraph>{intl.formatMessage({ id: 'getStarted.content.settingUp.customizingTheme.description' })}</Paragraph>
        <CodeViewerContainer
          codeInHtml={getCustomizingTheme.nodes[0].html}
          codeInMarkdown={getCustomizingTheme.nodes[0].rawMarkdownBody}
        />
        <Heading3 css={marginTopForHeading3} enableMargin enableResponsive>
          {intl.formatMessage({ id: 'getStarted.content.settingUp.defaultTheme.title' })}
        </Heading3>
        <Paragraph>{intl.formatMessage({ id: 'getStarted.content.settingUp.defaultTheme.description' })}</Paragraph>
        <CodeViewerContainer
          codeInHtml={getDefaultTheme.nodes[0].html}
          codeInMarkdown={getDefaultTheme.nodes[0].rawMarkdownBody}
        />
      </ResponsiveContentLayout>
    </section>
  );
};

export default SettingUpSection;
