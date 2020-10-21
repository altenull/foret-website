import { navigate } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { PageNavigationSection } from '../components/common';
import {
  ButtonSection,
  CheckboxSection,
  HeroSection,
  RadioButtonSection,
  SelectSection,
  TabSection,
  TOC,
  ToggleSection,
} from '../components/components';
import { PageLayout } from '../components/foundation';
import { COMPONENT_HASHES } from '../constants/components.constant';
import { ComponentHashEnum } from '../enums/components/component-hash.enum';
import { useIsMounted, useSiteMetadataQuery } from '../hooks/core';
import { getTocItems } from '../utils/components.util';
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
    setCurrentHash(targetHash);
    scrollToHashPoint(targetHash);
  };

  // Initialize componentHashToYAbsoultePixelMap after mounted.
  useEffect(() => {
    if (isMounted) {
      const windowScrollY = window.scrollY;

      setComponentHashToYAbsoultePixelMap(
        COMPONENT_HASHES.reduce((acc, componentHash) => {
          const anchorHeading2Element = document.getElementById(componentHash);
          const OFFSET = 128;
          const yAbsolutePixel = anchorHeading2Element.getBoundingClientRect().y + windowScrollY - OFFSET;

          return {
            ...acc,
            [componentHash]: yAbsolutePixel,
          };
        }, {})
      );
    }
  }, [isMounted, setComponentHashToYAbsoultePixelMap]);

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
        <ButtonSection componentHash={ComponentHashEnum.Button} onAnchorHeading2Click={navigateAndScrollToHashPoint} />
        <CheckboxSection
          componentHash={ComponentHashEnum.Checkbox}
          onAnchorHeading2Click={navigateAndScrollToHashPoint}
        />
        <RadioButtonSection
          componentHash={ComponentHashEnum.RadioButton}
          onAnchorHeading2Click={navigateAndScrollToHashPoint}
        />
        <SelectSection componentHash={ComponentHashEnum.Select} onAnchorHeading2Click={navigateAndScrollToHashPoint} />
        <TabSection componentHash={ComponentHashEnum.Tab} onAnchorHeading2Click={navigateAndScrollToHashPoint} />
        <ToggleSection componentHash={ComponentHashEnum.Toggle} onAnchorHeading2Click={navigateAndScrollToHashPoint} />
        <PageNavigationSection />

        <TOC
          items={getTocItems(intl, COMPONENT_HASHES)}
          currentHash={currentHash}
          onTOCItemClick={navigateAndScrollToHashPoint}
        />
      </PageLayout>
    </Fragment>
  );
};

export default ComponentsPage;
