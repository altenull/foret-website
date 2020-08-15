import { useIntl } from 'gatsby-plugin-intl';
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Footer, Layout } from '../components/common';
import { HeaderContainer } from '../containers/common';
import { PageRouteEnum } from '../enums/core/page-route.enum';
import { useGetSiteMetadata } from '../hooks';

const GetStartedPage = () => {
  const intl = useIntl();
  const getSiteMetadataResponse = useGetSiteMetadata();

  const getStartedPageRoute = getSiteMetadataResponse.siteMetadata.pageRoutes.find(
    ({ key }) => key === PageRouteEnum.GetStarted
  );
  const getStartedPageTitle = `${intl.formatMessage({
    id: `pages.${getStartedPageRoute.camelCase}`,
  })} | ${intl.formatMessage({ id: 'title' })}`;

  return (
    <Fragment>
      <Helmet title={getStartedPageTitle} defer={false} />
      <Layout>
        <HeaderContainer />
        Get Started
        <Footer />
      </Layout>
    </Fragment>
  );
};

export default GetStartedPage;