import { graphql, useStaticQuery } from 'gatsby';

const useLogoImageQuery = () => {
  const { logoCircleImage, logoGreenImage } = useStaticQuery(graphql`
    query {
      logoCircleImage: file(relativePath: { eq: "logo-circle(160x160).png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logoGreenImage: file(relativePath: { eq: "logo-green.png" }) {
        childImageSharp {
          fixed(width: 323, height: 381) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const logoImageQueryRepsonse = {
    logoCircleImage: logoCircleImage.childImageSharp.fixed,
    logoGreenImage: logoGreenImage.childImageSharp.fixed,
  };

  return logoImageQueryRepsonse;
};

export default useLogoImageQuery;
