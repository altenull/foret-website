import { MarginalHeading2, MarginalParagraph, Subtitle2, Tab, TabGroup } from '@altenull/foret-react';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { CodeViewer, ResponsiveContentLayout } from '../common';

const contentWrapperStyles = css`
  padding: 32px 0;
`;

const ContentSection = () => {
  const intl = useIntl();
  const {
    getInstallViaNpmReact,
    getInstallViaYarnReact,
    getInstallViaNpmNg,
    getInstallViaYarnNg,
  } = useStaticQuery(graphql`
    query {
      getInstallViaNpmReact: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/install-via-npm-react.md/" } }) {
        nodes {
          html
        }
      }
      getInstallViaYarnReact: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/install-via-yarn-react.md/" } }
      ) {
        nodes {
          html
        }
      }
      getInstallViaNpmNg: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/install-via-npm-ng.md/" } }) {
        nodes {
          html
        }
      }
      getInstallViaYarnNg: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/install-via-yarn-ng.md/" } }) {
        nodes {
          html
        }
      }
    }
  `);

  const installationTitle = (
    <MarginalHeading2>{intl.formatMessage({ id: 'getStarted.content.installation.title' })}</MarginalHeading2>
  );
  const troubleShootingTitle = (
    <MarginalHeading2>{intl.formatMessage({ id: 'getStarted.content.troubleShooting.title' })}</MarginalHeading2>
  );

  const getReactVersionContent = () => (
    <div css={contentWrapperStyles}>
      {installationTitle}
      <MarginalParagraph>{intl.formatMessage({ id: 'getStarted.content.installation.description' })}</MarginalParagraph>

      <Subtitle2>{intl.formatMessage({ id: 'getStarted.content.installation.installViaNpm' })}</Subtitle2>
      <CodeViewer codeInHtml={getInstallViaNpmReact.nodes[0].html}></CodeViewer>

      <Subtitle2>{intl.formatMessage({ id: 'getStarted.content.installation.installViaYarn' })}</Subtitle2>
      <CodeViewer codeInHtml={getInstallViaYarnReact.nodes[0].html}></CodeViewer>

      <p>Don’t forget to install the @emotion/core ^10.0.0 also.</p>

      {troubleShootingTitle}
      <MarginalParagraph>
        {intl.formatMessage({ id: 'getStarted.content.troubleShooting.description' })}
      </MarginalParagraph>
    </div>
  );

  const getAngularVersionContent = () => (
    <div css={contentWrapperStyles}>
      {installationTitle}
      <MarginalParagraph>{intl.formatMessage({ id: 'getStarted.content.installation.description' })}</MarginalParagraph>

      <Subtitle2>{intl.formatMessage({ id: 'getStarted.content.installation.installViaNpm' })}</Subtitle2>
      <CodeViewer codeInHtml={getInstallViaNpmNg.nodes[0].html}></CodeViewer>

      <Subtitle2>{intl.formatMessage({ id: 'getStarted.content.installation.installViaYarn' })}</Subtitle2>
      <CodeViewer codeInHtml={getInstallViaYarnNg.nodes[0].html}></CodeViewer>

      {troubleShootingTitle}
      <MarginalParagraph>
        {intl.formatMessage({ id: 'getStarted.content.troubleShooting.description' })}
      </MarginalParagraph>
    </div>
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
