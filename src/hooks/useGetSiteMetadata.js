import { graphql, useStaticQuery } from 'gatsby';

const useGetSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query getSiteMetadata {
      site {
        siteMetadata {
          pageRoutes {
            key
            camelCase
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
