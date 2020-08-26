import { Heading2, Paragraph, Subtitle2, Tab, TabGroup } from '@altenull/foret-react';
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
    getInstallWithNpmReact,
    getInstallWithYarnReact,
    getInstallWithNpmNg,
    getInstallWithYarnNg,
  } = useStaticQuery(graphql`
    query {
      getInstallWithNpmReact: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/install-with-npm-react.md/" } }
      ) {
        nodes {
          html
        }
      }
      getInstallWithYarnReact: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/install-with-yarn-react.md/" } }
      ) {
        nodes {
          html
        }
      }
      getInstallWithNpmNg: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/install-with-npm-ng.md/" } }) {
        nodes {
          html
        }
      }
      getInstallWithYarnNg: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/install-with-yarn-ng.md/" } }) {
        nodes {
          html
        }
      }
    }
  `);

  const installationTitle = <Heading2>{intl.formatMessage({ id: 'getStarted.content.installation.title' })}</Heading2>;
  const troubleShootingTitle = (
    <Heading2>{intl.formatMessage({ id: 'getStarted.content.troubleShooting.title' })}</Heading2>
  );

  const reactVersionContent = () => (
    <div css={contentWrapperStyles}>
      {installationTitle}
      <Paragraph>{intl.formatMessage({ id: 'getStarted.content.installation.description' })}</Paragraph>

      <Subtitle2>{intl.formatMessage({ id: 'getStarted.content.installation.installWithNpm' })}</Subtitle2>
      <CodeViewer codeInHtml={getInstallWithNpmReact.nodes[0].html}></CodeViewer>

      <Subtitle2>{intl.formatMessage({ id: 'getStarted.content.installation.installWithYarn' })}</Subtitle2>
      <CodeViewer codeInHtml={getInstallWithYarnReact.nodes[0].html}></CodeViewer>

      <p>Don’t forget to install the @emotion/core ^10.0.0 also.</p>

      {troubleShootingTitle}
      <Paragraph>{intl.formatMessage({ id: 'getStarted.content.troubleShooting.description' })}</Paragraph>
    </div>
  );

  const angularVersionContent = () => (
    <div css={contentWrapperStyles}>
      {installationTitle}
      <Paragraph>{intl.formatMessage({ id: 'getStarted.content.installation.description' })}</Paragraph>

      <Subtitle2>{intl.formatMessage({ id: 'getStarted.content.installation.installWithNpm' })}</Subtitle2>
      <CodeViewer codeInHtml={getInstallWithNpmNg.nodes[0].html}></CodeViewer>

      <Subtitle2>{intl.formatMessage({ id: 'getStarted.content.installation.installWithYarn' })}</Subtitle2>
      <CodeViewer codeInHtml={getInstallWithYarnNg.nodes[0].html}></CodeViewer>

      {troubleShootingTitle}
      <Paragraph>{intl.formatMessage({ id: 'getStarted.content.troubleShooting.description' })}</Paragraph>
    </div>
  );

  return (
    <section>
      <ResponsiveContentLayout>
        <TabGroup selectedValue={'contentSectionReactTap'} name={'content-section-tap'}>
          <Tab id={'content-section-react-tap'} labelText={'React'} value={'contentSectionReactTap'}>
            {reactVersionContent()}
          </Tab>

          <Tab id={'content-section-ng-tap'} labelText={'Angular'} value={'contentSectionNgTap'}>
            {angularVersionContent()}
          </Tab>
        </TabGroup>
      </ResponsiveContentLayout>
    </section>
  );
};

export default ContentSection;
