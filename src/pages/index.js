import React from 'react';
import Layout from '../components/common/Layout';
import { css } from '@emotion/core';
import { Color } from '@altenull/foret-core';

const homeStyles = css`
  background-color: ${Color.Paper};
`;

const Home = () => {
  return <Layout css={homeStyles}>Hello world!</Layout>;
};

export default Home;
