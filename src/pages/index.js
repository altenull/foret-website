import { Color } from '@altenull/foret-core';
import { css } from '@emotion/core';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import Layout from '../components/common/Layout';

const homeStyles = css`
  background-color: ${Color.Paper};
`;

const Home = () => {
  const intl = useIntl();

  return <Layout css={homeStyles}>{intl.formatMessage({ id: 'title' })}</Layout>;
};

export default Home;
