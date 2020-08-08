import { Color } from '@altenull/foret-core';
import { css } from '@emotion/core';
import { useIntl } from 'gatsby-plugin-intl';
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Footer, Layout } from '../components/common';
import { HeaderContainer } from '../containers/common';
import HeroSection from '../components/home/HeroSection';
import { useSiteMetadata } from '../hooks';

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
        <HeaderContainer />
        <HeroSection />
        {intl.formatMessage({ id: 'title' })}
        <Footer />
      </Layout>
    </Fragment>
  );
};

export default Home;
