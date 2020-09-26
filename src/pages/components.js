import { navigate } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { PageNavigationSection } from '../components/common';
import { HeroSection, TOC } from '../components/components';
import { PageLayout } from '../components/foundation';
import { COMPONENT_HASHES } from '../constants/components.constant';
import { useIsMounted, useSiteMetadataQuery } from '../hooks/core';
import { getComponentSections, getTocItems } from '../utils/components.util';
import { getCurrentPageRouteIndex, getPageTitle } from '../utils/page.util';

const ComponentsPage = ({ location }) => {
  const [currentHash, setCurrentHash] = useState(location.hash);
  const [componentHashToYAbsoultePixelMap, setComponentHashToYAbsoultePixelMap] = useState(null);

  const heroSectionRef = useRef();

  const intl = useIntl();
  const isMounted = useIsMounted();
  const { siteMetadata } = useSiteMetadataQuery();

  const scrollTo = (targetHash) => {
    window.scrollTo(0, componentHashToYAbsoultePixelMap[targetHash]);
  };

  useEffect(() => {
    navigate(currentHash === '' ? location.pathname : currentHash);
  }, [currentHash, location.pathname]);

  // initialize componentHashToYAbsoultePixelMap after mounted.
  useEffect(() => {
    if (isMounted) {
      const windowScrollY = window.scrollY;

      setComponentHashToYAbsoultePixelMap(
        COMPONENT_HASHES.reduce((acc, componentHash) => {
          const anchorHeadingElement = document.getElementById(componentHash);
          const yAbsolutePixel = anchorHeadingElement.getBoundingClientRect().y + windowScrollY;

          return {
            ...acc,
            [componentHash]: yAbsolutePixel,
          };
        }, {})
      );
    }
  }, [isMounted]);

  useEffect(() => {
    let anchorHeadingIo;

    if (isMounted) {
      const anchorHeadingIoCallback = (entries) => {
        const hasIntersectingEntry = entries.some((entry) => entry.isIntersecting);

        if (hasIntersectingEntry) {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            const newHash = entry.target.id;

            if (newHash !== currentHash) {
              setCurrentHash(newHash);
            }
          });
        } else {
          const isHeroSectionVisible =
            document.documentElement.scrollTop < heroSectionRef.current.getBoundingClientRect().height;

          if (isHeroSectionVisible) {
            setCurrentHash('');
          }
        }
      };

      // Intersection Observer API의 사용법과 활용 방법
      // http://blog.hyeyoonjung.com/2019/01/09/intersectionobserver-tutorial/
      anchorHeadingIo = new IntersectionObserver(anchorHeadingIoCallback, { threshold: 0.5 });

      COMPONENT_HASHES.forEach((componentHash) => {
        anchorHeadingIo.observe(document.getElementById(componentHash));
      });
    }

    return () => {
      if (anchorHeadingIo != null) {
        anchorHeadingIo.disconnect();
      }
    };
  }, [isMounted]);

  useEffect(() => {
    if (isMounted && componentHashToYAbsoultePixelMap != null) {
      const hasAccessedWithHashFromUrl = !!location.hash;

      if (hasAccessedWithHashFromUrl) {
        scrollTo(location.hash);
      }
    }
  }, [isMounted, componentHashToYAbsoultePixelMap]);

  const currentPageRouteIndex = getCurrentPageRouteIndex(location.pathname, siteMetadata.pageRoutes);
  const componentsTitle = getPageTitle(intl, currentPageRouteIndex, siteMetadata.pageRoutes);

  return (
    <Fragment>
      <Helmet title={componentsTitle} defer={false} />
      <PageLayout>
        <HeroSection ref={heroSectionRef} />
        {getComponentSections(COMPONENT_HASHES)}
        <TOC items={getTocItems(intl, COMPONENT_HASHES)} currentHash={currentHash} scrollTo={scrollTo} />
        <PageNavigationSection />
      </PageLayout>
    </Fragment>
  );
};

export default ComponentsPage;
