import { Color } from '@altenull/foret-core';
import { css } from '@emotion/core';
import { useIntl } from 'gatsby-plugin-intl';
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Footer, Header, Layout } from '../components/common';
import { useSiteMetadata } from '../hooks';
import HeroSection from '../components/home/HeroSection';

const homeStyles = css`
  background-color: ${Color.Paper};
`;

const Home = () => {
  const intl = useIntl();
  const siteMetadata = useSiteMetadata();

  return (
    <Fragment>
      <Helmet title={siteMetadata.title} defer={false} />
      <Layout css={homeStyles}>
        <Header />
        <HeroSection />
        {intl.formatMessage({ id: 'title' })}
        <Footer />
      </Layout>
    </Fragment>
  );
};

export default Home;
