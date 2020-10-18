import { Heading2, Paragraph } from '@altenull/foret-react';
import { css } from '@emotion/core';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { useSiteMetadataQuery } from '../../hooks/core';
import { marginTopForHeading2 } from '../../utils/margin.util';
import { ResponsiveContentLayout } from '../foundation';

const anchorStyles = css`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ContributingSection = () => {
  const intl = useIntl();
  const { siteMetadata } = useSiteMetadataQuery();

  return (
    <section>
      <ResponsiveContentLayout>
        <Heading2 css={marginTopForHeading2} enableMargin enableResponsive>
          {intl.formatMessage({ id: 'getStarted.contributing.title' })}
        </Heading2>
        <Paragraph enableMargin enableResponsive>
          {intl.formatMessage({ id: 'getStarted.contributing.description1' })}
          <a css={anchorStyles} href={siteMetadata.hosts.foretGithub} target={'_blank'} rel={'noreferrer'}>
            @altenull/foret
          </a>
          {intl.formatMessage({ id: 'getStarted.contributing.description2' })}
        </Paragraph>
      </ResponsiveContentLayout>
    </section>
  );
};

export default ContributingSection;
