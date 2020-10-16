import { graphql, useStaticQuery } from 'gatsby';

const useLogoImageQuery = () => {
  const { logoCircleImage, logoCircleGrayscaleImage } = useStaticQuery(graphql`
    query {
      logoCircleImage: file(relativePath: { eq: "logo-circle(160x160).png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logoCircleGrayscaleImage: file(relativePath: { eq: "logo-circle-grayscale(160x160).png" }) {
        childImageSharp {
          fixed(width: 160, height: 160) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const logoImageQueryRepsonse = {
    logoCircleImage: logoCircleImage.childImageSharp.fixed,
    logoCircleGrayscaleImage: logoCircleGrayscaleImage.childImageSharp.fixed,
  };

  return logoImageQueryRepsonse;
};

export default useLogoImageQuery;
