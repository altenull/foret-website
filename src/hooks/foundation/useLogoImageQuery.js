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
    }
  `);

  const logoImageQueryRepsonse = {
    logoCircleImage: logoCircleImage.childImageSharp.fixed,
  };

  return logoImageQueryRepsonse;
};

export default useLogoImageQuery;
