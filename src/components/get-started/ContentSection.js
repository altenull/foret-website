import { Heading2, Paragraph, Subtitle1, Subtitle2 } from '@altenull/foret-react';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { CodeViewer, ResponsiveContentLayout } from '../common';
import { useIntl } from 'gatsby-plugin-intl';

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

  return (
    <section>
      <ResponsiveContentLayout>
        <Subtitle1>Angular / React Tab component here!</Subtitle1>

        <Heading2>{intl.formatMessage({ id: 'getStarted.content.installation.title' })}</Heading2>
        <Paragraph>{intl.formatMessage({ id: 'getStarted.content.installation.description' })}</Paragraph>

        <Subtitle2>{intl.formatMessage({ id: 'getStarted.content.installation.installWithNpm' })}</Subtitle2>
        <CodeViewer codeInHtml={getInstallWithNpmReact.nodes[0].html}></CodeViewer>

        <Subtitle2>{intl.formatMessage({ id: 'getStarted.content.installation.installWithYarn' })}</Subtitle2>
        <CodeViewer codeInHtml={getInstallWithYarnReact.nodes[0].html}></CodeViewer>

        <Subtitle2>{intl.formatMessage({ id: 'getStarted.content.installation.installWithNpm' })}</Subtitle2>
        <CodeViewer codeInHtml={getInstallWithNpmNg.nodes[0].html}></CodeViewer>

        <Subtitle2>{intl.formatMessage({ id: 'getStarted.content.installation.installWithYarn' })}</Subtitle2>
        <CodeViewer codeInHtml={getInstallWithYarnNg.nodes[0].html}></CodeViewer>

        <p>Don’t forget to install the @emotion/core ^10.0.0 also.</p>

        <Heading2>{intl.formatMessage({ id: 'getStarted.content.troubleShooting.title' })}</Heading2>
        <Paragraph>{intl.formatMessage({ id: 'getStarted.content.troubleShooting.description' })}</Paragraph>
      </ResponsiveContentLayout>
    </section>
  );
};

export default ContentSection;
