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
            foretNgNpm
            foretReactNpm
            foretGithub
          }
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
