import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { Helmet } from 'react-helmet';

const CustomHelmet = ({ title, language }) => {
  const intl = useIntl();

  return (
    <Helmet htmlAttributes={{ lang: language }} defer={false}>
      <title>{title}</title>
      <meta name='description' content={intl.formatMessage({ id: 'description' })} />
      <link rel='canonical' href='https://foretdesign.io/' />
    </Helmet>
  );
};

export default CustomHelmet;
