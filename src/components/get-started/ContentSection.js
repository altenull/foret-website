import { Heading2, Paragraph, Subtitle1, Subtitle2, Tab, TabGroup } from '@altenull/foret-react';
import { css } from '@emotion/core';
import { useIntl } from 'gatsby-plugin-intl';
import React, { Fragment } from 'react';
import { CodeViewerContainer } from '../../containers/code';
import { useSiteMetadataQuery } from '../../hooks/core';
import { useGetStartedContentSectionQuery } from '../../hooks/get-started';
import { marginTopForHeading2, marginTopForSubtitle2 } from '../../utils/margin.util';
import { TabContentWrapper } from '../common';
import { ResponsiveContentLayout } from '../foundation';

const anchorStyles = css`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ContentSection = () => {
  const intl = useIntl();
  const { siteMetadata } = useSiteMetadataQuery();
  const {
    getInstallViaNpmReact,
    getInstallViaYarnReact,
    getInstallViaNpmNg,
    getInstallViaYarnNg,
  } = useGetStartedContentSectionQuery();

  // TODO: Add below message in Korean, English
  //       Font, Styles 등은 이미 포함되어 있으므로 추가적으로 설치할 필요가 없습니다.

  const getSharedContributingContent = () => (
    <Fragment>
      <Heading2 enableMargin css={marginTopForHeading2}>
        {intl.formatMessage({ id: 'getStarted.content.contributing.title' })}
      </Heading2>
      <Paragraph enableMargin>
        {intl.formatMessage({ id: 'getStarted.content.contributing.description1' })}
        <a css={anchorStyles} href={siteMetadata.hosts.foretGithub} target={'_blank'} rel={'noreferrer'}>
          @altenull/foret
        </a>
        {intl.formatMessage({ id: 'getStarted.content.contributing.description2' })}
      </Paragraph>
    </Fragment>
  );

  const getReactVersionContent = () => (
    <TabContentWrapper>
      <Heading2>enableMargin {intl.formatMessage({ id: 'getStarted.content.installation.title' })}</Heading2>
      <Paragraph enableMargin>
        {intl.formatMessage({ id: 'getStarted.content.installation.description1' })}
        <a css={anchorStyles} href={siteMetadata.hosts.foretReactNpm} target={'_blank'} rel={'noreferrer'}>
          npm package
        </a>
        {intl.formatMessage({ id: 'getStarted.content.installation.description2' })}
      </Paragraph>

      <Subtitle2 css={marginTopForSubtitle2}>
        {intl.formatMessage({ id: 'getStarted.content.installation.installViaNpm' })}
      </Subtitle2>
      <CodeViewerContainer
        codeInHtml={getInstallViaNpmReact.nodes[0].html}
        codeInMarkdown={getInstallViaNpmReact.nodes[0].rawMarkdownBody}
      />
      <Subtitle2 css={marginTopForSubtitle2}>
        {intl.formatMessage({ id: 'getStarted.content.installation.installViaYarn' })}
      </Subtitle2>
      <CodeViewerContainer
        codeInHtml={getInstallViaYarnReact.nodes[0].html}
        codeInMarkdown={getInstallViaYarnReact.nodes[0].rawMarkdownBody}
      />
      <Subtitle1>{intl.formatMessage({ id: 'getStarted.content.installation.installEmotionCore' })}</Subtitle1>

      {getSharedContributingContent()}
    </TabContentWrapper>
  );

  const getAngularVersionContent = () => (
    <TabContentWrapper>
      <Heading2>enableMargin {intl.formatMessage({ id: 'getStarted.content.installation.title' })}</Heading2>
      <Paragraph enableMargin>
        {intl.formatMessage({ id: 'getStarted.content.installation.description1' })}
        <a css={anchorStyles} href={siteMetadata.hosts.foretNgNpm} target={'_blank'} rel={'noreferrer'}>
          npm package
        </a>
        {intl.formatMessage({ id: 'getStarted.content.installation.description2' })}
      </Paragraph>

      <Subtitle2 css={marginTopForSubtitle2}>
        {intl.formatMessage({ id: 'getStarted.content.installation.installViaNpm' })}
      </Subtitle2>
      <CodeViewerContainer
        codeInHtml={getInstallViaNpmNg.nodes[0].html}
        codeInMarkdown={getInstallViaNpmNg.nodes[0].rawMarkdownBody}
      />
      <Subtitle2 css={marginTopForSubtitle2}>
        {intl.formatMessage({ id: 'getStarted.content.installation.installViaYarn' })}
      </Subtitle2>
      <CodeViewerContainer
        codeInHtml={getInstallViaYarnNg.nodes[0].html}
        codeInMarkdown={getInstallViaYarnNg.nodes[0].rawMarkdownBody}
      />

      {getSharedContributingContent()}
    </TabContentWrapper>
  );

  return (
    <section>
      <ResponsiveContentLayout>
        <TabGroup selectedValue={'contentSectionReactTap'} name={'content-section-tap'}>
          <Tab id={'content-section-react-tap'} labelText={'React'} value={'contentSectionReactTap'}>
            {getReactVersionContent()}
          </Tab>

          <Tab id={'content-section-ng-tap'} labelText={'Angular'} value={'contentSectionNgTap'}>
            {getAngularVersionContent()}
          </Tab>
        </TabGroup>
      </ResponsiveContentLayout>
    </section>
  );
};

export default ContentSection;
