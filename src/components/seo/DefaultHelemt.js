import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { LanguageEnum } from '../../enums/core/language.enum';
import { useSiteMetadataQuery } from '../../hooks/core';

const DefaultHelmet = () => {
  const { siteMetadata } = useSiteMetadataQuery();
  const { foretOg } = useStaticQuery(graphql`
    query {
      foretOg: file(relativePath: { eq: "foret-og.png" }) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  `);

  const titleInKorean = 'Foret 디자인 시스템';
  const descriptionInKorean =
    'Foret는 Foret 디자인 언어로 자연과 관련된 웹 애플리케이션을 구축하기 위한 오픈 소스 디자인 시스템입니다.';

  return (
    <Helmet htmlAttributes={{ lang: LanguageEnum.Ko }} defer={false}>
      <title>{titleInKorean}</title>
      <meta name='description' content={descriptionInKorean} />

      <meta property='og:type' content='website' />
      <meta property='og:url' content={siteMetadata.hosts.foretWebsite} />
      <meta property='og:title' content={titleInKorean} />
      <meta property='og:description' content={descriptionInKorean} />
      <meta property='og:image' content={foretOg.childImageSharp.fluid.src} />

      <link rel='canonical' href={siteMetadata.hosts.foretWebsite} />
    </Helmet>
  );
};

export default DefaultHelmet;
