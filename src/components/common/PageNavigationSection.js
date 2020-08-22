import React from 'react';
import ResponsiveContentLayout from './ResponsiveContentLayout';
import PageNavigation from './PageNavigation';

const PageNavigationSection = ({ prevLink, nextLink }) => {
  return (
    <section>
      <ResponsiveContentLayout>
        <PageNavigation prevLink={prevLink} nextLink={nextLink} />
      </ResponsiveContentLayout>
    </section>
  );
};

export default PageNavigationSection;
