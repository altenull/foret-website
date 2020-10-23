import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadataQuery = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          pageRoutes {
            key
            camelCase
          }
          hosts {
            foretWebsite
            foretNgNpm
            foretReactNpm
            foretGithub
            emotionTheming
          }
          nodeEnv
        }
      }
    }
  `);

  const siteMetadataQueryResponse = {
    siteMetadata: site.siteMetadata,
  };

  return siteMetadataQueryResponse;
};

export default useSiteMetadataQuery;
