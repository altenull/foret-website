import { Heading2, Paragraph, Subtitle1, Subtitle2 } from '@altenull/foret-react';
import { css } from '@emotion/core';
import { useIntl } from 'gatsby-plugin-intl';
import React, { Fragment } from 'react';
import { CodeViewerContainer } from '../../containers/code';
import { useSiteMetadataQuery } from '../../hooks/core';
import { useGetStartedPageQuery } from '../../hooks/get-started';
import { marginTopForSubtitle2 } from '../../utils/margin.util';
import { ResponsiveContentLayout } from '../foundation';

const anchorStyles = css`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const InstallationSection = ({ isReactVersion = false, isAngularVersion = false }) => {
  const intl = useIntl();
  const { siteMetadata } = useSiteMetadataQuery();
  const { installViaNpmReact, installViaYarnReact, installViaNpmNg, installViaYarnNg } = useGetStartedPageQuery();

  const getReactVersionContent = () => (
    <Fragment>
      <Heading2 enableMargin enableResponsive>
        {intl.formatMessage({ id: 'getStarted.installation.title' })}
      </Heading2>
      <Paragraph enableMargin enableResponsive>
        {intl.formatMessage({ id: 'getStarted.installation.description1' })}
        <a css={anchorStyles} href={siteMetadata.hosts.foretReactNpm} target={'_blank'} rel={'noreferrer'}>
          npm package
        </a>
        {intl.formatMessage({ id: 'getStarted.installation.description2' })}
      </Paragraph>
      <Subtitle2 css={marginTopForSubtitle2}>
        {intl.formatMessage({ id: 'getStarted.installation.installViaNpm' })}
      </Subtitle2>
      <CodeViewerContainer
        codeInHtml={installViaNpmReact.nodes[0].html}
        codeInMarkdown={installViaNpmReact.nodes[0].rawMarkdownBody}
      />
      <Subtitle2 css={marginTopForSubtitle2}>
        {intl.formatMessage({ id: 'getStarted.installation.installViaYarn' })}
      </Subtitle2>
      <CodeViewerContainer
        codeInHtml={installViaYarnReact.nodes[0].html}
        codeInMarkdown={installViaYarnReact.nodes[0].rawMarkdownBody}
      />
      <Subtitle1>{intl.formatMessage({ id: 'getStarted.installation.installEmotionCore' })}</Subtitle1>
    </Fragment>
  );

  const getAngularVersionContent = () => (
    <Fragment>
      <Heading2 enableMargin enableResponsive>
        {intl.formatMessage({ id: 'getStarted.installation.title' })}
      </Heading2>
      <Paragraph enableMargin enableResponsive>
        {intl.formatMessage({ id: 'getStarted.installation.description1' })}
        <a css={anchorStyles} href={siteMetadata.hosts.foretNgNpm} target={'_blank'} rel={'noreferrer'}>
          npm package
        </a>
        {intl.formatMessage({ id: 'getStarted.installation.description2' })}
      </Paragraph>

      <Subtitle2 css={marginTopForSubtitle2}>
        {intl.formatMessage({ id: 'getStarted.installation.installViaNpm' })}
      </Subtitle2>
      <CodeViewerContainer
        codeInHtml={installViaNpmNg.nodes[0].html}
        codeInMarkdown={installViaNpmNg.nodes[0].rawMarkdownBody}
      />
      <Subtitle2 css={marginTopForSubtitle2}>
        {intl.formatMessage({ id: 'getStarted.installation.installViaYarn' })}
      </Subtitle2>
      <CodeViewerContainer
        codeInHtml={installViaYarnNg.nodes[0].html}
        codeInMarkdown={installViaYarnNg.nodes[0].rawMarkdownBody}
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

export default InstallationSection;
