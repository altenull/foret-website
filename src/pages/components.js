import { Color } from '@altenull/foret-core';
import { css } from '@emotion/core';
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
import { Layout } from '../components/foundation';
import { ComponentHashEnum } from '../enums/components/component-hash.enum';
import { useSiteMetadataQuery } from '../hooks/core';
import { getCurrentPageRouteIndex, getPageNavigationLinks, getPageTitle } from '../utils/page.util';

const layoutStyles = css`
  background-color: ${Color.Paper};
`;

const ComponentsPage = ({ location }) => {
  const [currentHash, setCurrentHash] = useState('');
  const heroSectionRef = useRef();

  const intl = useIntl();
  const { siteMetadata } = useSiteMetadataQuery();

  const componentHashes = [
    ComponentHashEnum.Button,
    ComponentHashEnum.Checkbox,
    ComponentHashEnum.RadioButton,
    ComponentHashEnum.Select,
    ComponentHashEnum.Tab,
    ComponentHashEnum.Toggle,
  ];

  const checkHashAndScrollTo = () => {
    if (!!location.hash) {
      scrollTo(location.hash);
    }
  };

  useEffect(checkHashAndScrollTo, []);

  const subscribeAnchorHeadingIo = () => {
    const anchorHeadingIoCallback = (entries) => {
      const hasNoIntersectingEntry = !entries.find((entry) => entry.isIntersecting);

      if (hasNoIntersectingEntry) {
        // TODO: Refactor to get isHeroSectionVisible by more accurate way.
        // TODO: Resolve issue that occured changing locale.
        if (heroSectionRef != null && heroSectionRef.current != null) {
          const isHeroSectionVisible =
            document.documentElement.scrollTop < heroSectionRef.current.getBoundingClientRect().height;

          if (isHeroSectionVisible) {
            setCurrentHash('');
          }
        }
      } else {
        entries.forEach((entry) => {
          const isNewEntryIntersecting = entry.target.id !== currentHash;

          if (entry.isIntersecting && isNewEntryIntersecting) {
            setCurrentHash(entry.target.id);
          }
        });
      }
    };

    // Intersection Observer API의 사용법과 활용 방법
    // http://blog.hyeyoonjung.com/2019/01/09/intersectionobserver-tutorial/
    const anchorHeadingIo = new IntersectionObserver(anchorHeadingIoCallback, { threshold: 0.3 });
    const anchorHeadingElements = componentHashes.map((componentHash) => document.getElementById(componentHash));

    anchorHeadingElements.forEach((anchorHeadingElement) => {
      anchorHeadingIo.observe(anchorHeadingElement);
    });
  };

  useEffect(subscribeAnchorHeadingIo, []);

  useEffect(() => {
    // TODO: Find out a way to remove hash from url programatically.
    //       First, navigate to current pathname to able to remove hash temporary.
    navigate(currentHash === '' ? location.pathname : currentHash);
  }, [currentHash, location.pathname]);

  const scrollTo = (target) => {
    const targetElement = document.getElementById(target);

    if (targetElement != null) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const currentPageRouteIndex = getCurrentPageRouteIndex(location.pathname, siteMetadata.pageRoutes);
  const componentsTitle = getPageTitle(intl, currentPageRouteIndex, siteMetadata.pageRoutes);
  const { prevLink, nextLink } = getPageNavigationLinks(intl, currentPageRouteIndex, siteMetadata.pageRoutes);

  const getSections = (componentHashes) => {
    const componentHashToSectionMap = {
      [ComponentHashEnum.Button]: ButtonSection,
      [ComponentHashEnum.Checkbox]: CheckboxSection,
      [ComponentHashEnum.RadioButton]: RadioButtonSection,
      [ComponentHashEnum.Select]: SelectSection,
      [ComponentHashEnum.Tab]: TabSection,
      [ComponentHashEnum.Toggle]: ToggleSection,
    };

    return componentHashes.map((componentHash) => {
      const SectionComponent = componentHashToSectionMap[componentHash];

      return <SectionComponent key={componentHash} headingHash={componentHash} />;
    });
  };

  const getTocItems = (componentHashes) => {
    const componentHashToIntlIdMap = {
      [ComponentHashEnum.Button]: 'components.button.title',
      [ComponentHashEnum.Checkbox]: 'components.checkbox.title',
      [ComponentHashEnum.RadioButton]: 'components.radioButton.title',
      [ComponentHashEnum.Select]: 'components.select.title',
      [ComponentHashEnum.Tab]: 'components.tab.title',
      [ComponentHashEnum.Toggle]: 'components.toggle.title',
    };

    return componentHashes.map((componentHash) => ({
      to: componentHash,
      text: intl.formatMessage({ id: componentHashToIntlIdMap[componentHash] }),
    }));
  };

  return (
    <Fragment>
      <Helmet title={componentsTitle} defer={false} />
      <Layout css={layoutStyles}>
        <HeroSection ref={heroSectionRef} />
        {getSections(componentHashes)}
        <TOC items={getTocItems(componentHashes)} currentHash={currentHash} scrollTo={scrollTo} />
        <PageNavigationSection prevLink={prevLink} nextLink={nextLink} />
      </Layout>
    </Fragment>
  );
};

export default ComponentsPage;
