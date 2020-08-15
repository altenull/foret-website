import { graphql, useStaticQuery } from 'gatsby';

const useGetLogoImage = () => {
  const { logoImage } = useStaticQuery(graphql`
    query getLogoImage {
      logoImage: file(relativePath: { eq: "logo-temp.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const getLogoImageRepsonse = {
    fixed: logoImage.childImageSharp.fixed,
  };

  return getLogoImageRepsonse;
};

export default useGetLogoImage;
