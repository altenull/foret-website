import { Heading2, Heading3, Paragraph, PrimaryButton } from '@altenull/foret-react';
import { css } from '@emotion/core';
import { useIntl } from 'gatsby-plugin-intl';
import React, { Fragment } from 'react';
import { CodeViewerContainer } from '../../containers/code';
import { useSiteMetadataQuery } from '../../hooks/core';
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

const SettingUpSection = ({ isReactVersion = false, isAngularVersion = false }) => {
  const intl = useIntl();
  const { siteMetadata } = useSiteMetadataQuery();
  const { settingUpWithForet, customizingTheme, defaultTheme, importForetSass } = useGetStartedPageQuery();

  const getReactVersionContent = () => (
    <Fragment>
      <Heading2 css={marginTopForHeading2} enableMargin enableResponsive>
        {intl.formatMessage({ id: 'getStarted.settingUpReact.title' })}
      </Heading2>
      <Paragraph enableMargin enableResponsive>
        {intl.formatMessage({ id: 'getStarted.settingUpReact.description1' })}
        <a css={anchorStyles} href={siteMetadata.hosts.emotionTheming} target={'_blank'} rel={'noreferrer'}>
          emotion-theming
        </a>
        {intl.formatMessage({ id: 'getStarted.settingUpReact.description2' })}
      </Paragraph>
      <ComponentDemoBox
        demo={<PrimaryButton onClick={() => alert('Hey there!')}>Hello Foret!</PrimaryButton>}
        codeInHtml={settingUpWithForet.nodes[0].html}
        codeInMarkdown={settingUpWithForet.nodes[0].rawMarkdownBody}
      />

      <Heading3 css={marginTopForHeading3} enableMargin enableResponsive>
        {intl.formatMessage({ id: 'getStarted.settingUpReact.customizingTheme.title' })}
      </Heading3>
      <Paragraph>{intl.formatMessage({ id: 'getStarted.settingUpReact.customizingTheme.description' })}</Paragraph>
      <CodeViewerContainer
        codeInHtml={customizingTheme.nodes[0].html}
        codeInMarkdown={customizingTheme.nodes[0].rawMarkdownBody}
      />

      <Heading3 css={marginTopForHeading3} enableMargin enableResponsive>
        {intl.formatMessage({ id: 'getStarted.settingUpReact.defaultTheme.title' })}
      </Heading3>
      <Paragraph>{intl.formatMessage({ id: 'getStarted.settingUpReact.defaultTheme.description' })}</Paragraph>
      <CodeViewerContainer
        codeInHtml={defaultTheme.nodes[0].html}
        codeInMarkdown={defaultTheme.nodes[0].rawMarkdownBody}
      />
    </Fragment>
  );

  const getAngularVersionContent = () => (
    <Fragment>
      <Heading2 css={marginTopForHeading2} enableMargin enableResponsive>
        {intl.formatMessage({ id: 'getStarted.settingUpNg.title' })}
      </Heading2>
      <Paragraph enableMargin enableResponsive>
        {intl.formatMessage({ id: 'getStarted.settingUpNg.description' })}
      </Paragraph>
      <CodeViewerContainer
        codeInHtml={importForetSass.nodes[0].html}
        codeInMarkdown={importForetSass.nodes[0].rawMarkdownBody}
      />
    </Fragment>
  );

  return (
    <section>
      <ResponsiveContentLayout>
        {isReactVersion && getReactVersionContent()}
        {isAngularVersion && getAngularVersionContent()}
      </ResponsiveContentLayout>
    </section>
  );
};

export default SettingUpSection;
