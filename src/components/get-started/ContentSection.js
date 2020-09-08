import { MarginalHeading2, MarginalParagraph, Subtitle1, Subtitle2, Tab, TabGroup } from '@altenull/foret-react';
import { useIntl } from 'gatsby-plugin-intl';
import React, { Fragment } from 'react';
import { useGetSiteMetadata, useGetStartedContentSectionQuery } from '../../hooks';
import { CodeViewer, ResponsiveContentLayout, TabContentWrapper } from '../common';

const ContentSection = () => {
  const intl = useIntl();
  const { siteMetadata } = useGetSiteMetadata();
  const {
    getInstallViaNpmReact,
    getInstallViaYarnReact,
    getInstallViaNpmNg,
    getInstallViaYarnNg,
  } = useGetStartedContentSectionQuery();

  // Font, Styles이 이미 구현되어 있으므로 추가로적으로 설치할 필요가 없습니다.

  const getSharedContributingContent = () => (
    <Fragment>
      <MarginalHeading2>{intl.formatMessage({ id: 'getStarted.content.contributing.title' })}</MarginalHeading2>
      <MarginalParagraph>
        {intl.formatMessage({ id: 'getStarted.content.contributing.description1' })}
        <a href={siteMetadata.hosts.foretGithub} target={'_blank'}>
          @altenull/foret
        </a>
        {intl.formatMessage({ id: 'getStarted.content.contributing.description2' })}
      </MarginalParagraph>
    </Fragment>
  );

  const getReactVersionContent = () => (
    <TabContentWrapper>
      <MarginalHeading2>{intl.formatMessage({ id: 'getStarted.content.installation.title' })}</MarginalHeading2>
      <MarginalParagraph>
        {intl.formatMessage({ id: 'getStarted.content.installation.description1' })}
        <a href={siteMetadata.hosts.foretReactNpm} target={'_blank'}>
          npm package
        </a>
        {intl.formatMessage({ id: 'getStarted.content.installation.description2' })}
      </MarginalParagraph>

      <Subtitle2>{intl.formatMessage({ id: 'getStarted.content.installation.installViaNpm' })}</Subtitle2>
      <CodeViewer codeInHtml={getInstallViaNpmReact.nodes[0].html}></CodeViewer>
      <Subtitle2>{intl.formatMessage({ id: 'getStarted.content.installation.installViaYarn' })}</Subtitle2>
      <CodeViewer codeInHtml={getInstallViaYarnReact.nodes[0].html}></CodeViewer>
      <Subtitle1>{intl.formatMessage({ id: 'getStarted.content.installation.installEmotionCore' })}</Subtitle1>

      {getSharedContributingContent()}
    </TabContentWrapper>
  );

  const getAngularVersionContent = () => (
    <TabContentWrapper>
      <MarginalHeading2>{intl.formatMessage({ id: 'getStarted.content.installation.title' })}</MarginalHeading2>
      <MarginalParagraph>
        {intl.formatMessage({ id: 'getStarted.content.installation.description1' })}
        <a href={siteMetadata.hosts.foretNgNpm} target={'_blank'}>
          npm package
        </a>
        {intl.formatMessage({ id: 'getStarted.content.installation.description2' })}
      </MarginalParagraph>

      <Subtitle2>{intl.formatMessage({ id: 'getStarted.content.installation.installViaNpm' })}</Subtitle2>
      <CodeViewer codeInHtml={getInstallViaNpmNg.nodes[0].html}></CodeViewer>
      <Subtitle2>{intl.formatMessage({ id: 'getStarted.content.installation.installViaYarn' })}</Subtitle2>
      <CodeViewer codeInHtml={getInstallViaYarnNg.nodes[0].html}></CodeViewer>

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
