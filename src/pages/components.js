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

  const scrollToHashPoint = (targetHash) => {
    window.scrollTo(0, componentHashToYAbsoultePixelMap[targetHash]);
  };

  const navigateAndScrollToHashPoint = (targetHash) => {
    navigate(targetHash);
    scrollToHashPoint(targetHash);
  };

  // Initialize componentHashToYAbsoultePixelMap after mounted.
  useEffect(() => {
    if (isMounted) {
      const windowScrollY = window.scrollY;

      setComponentHashToYAbsoultePixelMap(
        COMPONENT_HASHES.reduce((acc, componentHash) => {
          const anchorHeading2Element = document.getElementById(componentHash);
          const MARGIN_Y = 128;
          const yAbsolutePixel = anchorHeading2Element.getBoundingClientRect().y + windowScrollY - MARGIN_Y;

          return {
            ...acc,
            [componentHash]: yAbsolutePixel,
          };
        }, {})
      );
    }
  }, [isMounted, setComponentHashToYAbsoultePixelMap]);

  // Handling when hash in url is updated.
  useEffect(() => {
    if (isMounted && componentHashToYAbsoultePixelMap != null) {
      const hasAccessedWithHashFromUrl = componentHashToYAbsoultePixelMap[location.hash] != null;

      if (hasAccessedWithHashFromUrl) {
        scrollToHashPoint(location.hash);
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [isMounted, location.hash, componentHashToYAbsoultePixelMap]);

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

      // How to use Intersection Observer API
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
  }, [isMounted, currentHash, setCurrentHash]);

  const currentPageRouteIndex = getCurrentPageRouteIndex(location.pathname, siteMetadata.pageRoutes);
  const componentsTitle = getPageTitle(intl, currentPageRouteIndex, siteMetadata.pageRoutes);

  return (
    <Fragment>
      <Helmet title={componentsTitle} defer={false} />
      <PageLayout>
        <HeroSection ref={heroSectionRef} />
        {getComponentSections(COMPONENT_HASHES, navigateAndScrollToHashPoint)}
        <TOC
          items={getTocItems(intl, COMPONENT_HASHES)}
          currentHash={currentHash}
          onTOCItemClick={navigateAndScrollToHashPoint}
        />
        <PageNavigationSection />
      </PageLayout>
    </Fragment>
  );
};

export default ComponentsPage;
