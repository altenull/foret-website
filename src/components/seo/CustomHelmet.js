import { graphql, useStaticQuery } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useSiteMetadataQuery } from '../../hooks/core';

const CustomHelmet = ({ title, language }) => {
  const intl = useIntl();
  const { siteMetadata } = useSiteMetadataQuery();
  const { foretOg } = useStaticQuery(graphql`
    query {
      foretOg: file(relativePath: { eq: "foret-og.png" }) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  `);

  return (
    <Helmet htmlAttributes={{ lang: language }} defer={false}>
      <title>{title}</title>
      <meta name='description' content={intl.formatMessage({ id: 'description' })} />

      <meta property='og:type' content='website' />
      <meta property='og:url' content={siteMetadata.hosts.foretWebsite} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={intl.formatMessage({ id: 'description' })} />
      <meta property='og:image' content={foretOg.childImageSharp.fluid.src} />

      <link rel='canonical' href={siteMetadata.hosts.foretWebsite} />
    </Helmet>
  );
};

export default CustomHelmet;
