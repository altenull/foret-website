import { graphql, useStaticQuery } from 'gatsby';

const useGetSiteMetadata = () => {
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

  const getSiteMetadataResponse = {
    siteMetadata: site.siteMetadata,
  };

  return getSiteMetadataResponse;
};

export default useGetSiteMetadata;
