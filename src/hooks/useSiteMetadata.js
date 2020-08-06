import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

export default useSiteMetadata;
