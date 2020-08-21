import { Heading2, Paragraph, Subtitle1, Subtitle2 } from '@altenull/foret-react';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { CodeViewer, ResponsiveContentLayout } from '../common';

const ContentSection = () => {
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

        <Heading2>Installation</Heading2>
        <Paragraph>foret is served as an npm package. Add them to your project by running:</Paragraph>

        <Subtitle2>Using npm:</Subtitle2>
        <CodeViewer codeInHtml={getInstallWithNpmReact.nodes[0].html}></CodeViewer>

        <Subtitle2>If you prefer Yarn:</Subtitle2>
        <CodeViewer codeInHtml={getInstallWithYarnReact.nodes[0].html}></CodeViewer>

        <Subtitle2>Using npm:</Subtitle2>
        <CodeViewer codeInHtml={getInstallWithNpmNg.nodes[0].html}></CodeViewer>

        <Subtitle2>If you prefer Yarn:</Subtitle2>
        <CodeViewer codeInHtml={getInstallWithYarnNg.nodes[0].html}></CodeViewer>

        <p>Don’t forget to install the @emotion/core ^10.0.0 also.</p>

        <Heading2>Trouble Shooting</Heading2>
        <Paragraph>
          If you experience any issues while getting set up with Foret React / Angular, please head over to the GitHub
          repo for more guidelines and support. Please create an issue if your issue does not already exist.
        </Paragraph>
      </ResponsiveContentLayout>
    </section>
  );
};

export default ContentSection;
