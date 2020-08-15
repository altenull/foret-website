import { graphql, useStaticQuery } from 'gatsby';

const useGetLanguages = () => {
  const { sitePage } = useStaticQuery(graphql`
    query getLanguages {
      sitePage {
        context {
          intl {
            languages
          }
        }
      }
    }
  `);

  const getLanguagesResponse = {
    languages: sitePage.context.intl.languages,
  };

  return getLanguagesResponse;
};

export default useGetLanguages;
