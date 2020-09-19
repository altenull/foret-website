import { graphql, useStaticQuery } from 'gatsby';

const useLogoImageQuery = () => {
  const { logoImage } = useStaticQuery(graphql`
    query {
      logoImage: file(relativePath: { eq: "foret-logo(160x160).png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const logoImageQueryRepsonse = {
    fixed: logoImage.childImageSharp.fixed,
  };

  return logoImageQueryRepsonse;
};

export default useLogoImageQuery;
