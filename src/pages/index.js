import { Color } from '@altenull/foret-core';
import { css } from '@emotion/core';
import { useIntl } from 'gatsby-plugin-intl';
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Footer, Layout } from '../components/common';
import HeroSection from '../components/home/HeroSection';
import { HeaderContainer } from '../containers/common';

const homeStyles = css`
  background-color: ${Color.Paper};
`;

const HomePage = () => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'title' });

  return (
    <Fragment>
      <Helmet title={title} defer={false} />
      <Layout css={homeStyles}>
        <HeaderContainer />
        <HeroSection />
        <Footer />
      </Layout>
    </Fragment>
  );
};

export default HomePage;
