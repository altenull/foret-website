import { MarginalHeading2, MarginalParagraph, Subtitle1, Subtitle2, Tab, TabGroup } from '@altenull/foret-react';
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
      <MarginalHeading2 css={marginTopForHeading2}>
        {intl.formatMessage({ id: 'getStarted.content.contributing.title' })}
      </MarginalHeading2>
      <MarginalParagraph>
        {intl.formatMessage({ id: 'getStarted.content.contributing.description1' })}
        <a css={anchorStyles} href={siteMetadata.hosts.foretGithub} target={'_blank'} rel={'noreferrer'}>
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
        <a css={anchorStyles} href={siteMetadata.hosts.foretReactNpm} target={'_blank'} rel={'noreferrer'}>
          npm package
        </a>
        {intl.formatMessage({ id: 'getStarted.content.installation.description2' })}
      </MarginalParagraph>

      <Subtitle2 css={marginTopForSubtitle2}>
        {intl.formatMessage({ id: 'getStarted.content.installation.installViaNpm' })}
      </Subtitle2>
      <CodeViewerContainer codeInHtml={getInstallViaNpmReact.nodes[0].html}></CodeViewerContainer>
      <Subtitle2 css={marginTopForSubtitle2}>
        {intl.formatMessage({ id: 'getStarted.content.installation.installViaYarn' })}
      </Subtitle2>
      <CodeViewerContainer codeInHtml={getInstallViaYarnReact.nodes[0].html}></CodeViewerContainer>
      <Subtitle1>{intl.formatMessage({ id: 'getStarted.content.installation.installEmotionCore' })}</Subtitle1>

      {getSharedContributingContent()}
    </TabContentWrapper>
  );

  const getAngularVersionContent = () => (
    <TabContentWrapper>
      <MarginalHeading2>{intl.formatMessage({ id: 'getStarted.content.installation.title' })}</MarginalHeading2>
      <MarginalParagraph>
        {intl.formatMessage({ id: 'getStarted.content.installation.description1' })}
        <a css={anchorStyles} href={siteMetadata.hosts.foretNgNpm} target={'_blank'} rel={'noreferrer'}>
          npm package
        </a>
        {intl.formatMessage({ id: 'getStarted.content.installation.description2' })}
      </MarginalParagraph>

      <Subtitle2 css={marginTopForSubtitle2}>
        {intl.formatMessage({ id: 'getStarted.content.installation.installViaNpm' })}
      </Subtitle2>
      <CodeViewerContainer codeInHtml={getInstallViaNpmNg.nodes[0].html}></CodeViewerContainer>
      <Subtitle2 css={marginTopForSubtitle2}>
        {intl.formatMessage({ id: 'getStarted.content.installation.installViaYarn' })}
      </Subtitle2>
      <CodeViewerContainer codeInHtml={getInstallViaYarnNg.nodes[0].html}></CodeViewerContainer>

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
