import { Color } from '@altenull/foret-core';
import { Heading3, Paragraph, PrimaryButton } from '@altenull/foret-react';
import { css, Global } from '@emotion/core';
import { Link } from 'gatsby';
import { changeLocale, useIntl } from 'gatsby-plugin-intl';
import React, { Fragment } from 'react';
import { useGetLanguages, useGetSiteMetadata } from '../../hooks';

const drawerStyles = css`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: ${Color.Paper};
  z-index: 1000; /* TODO: Manage z-index in one place */
`;

const positionerStyles = css`
  padding: 160px 64px 0;
  box-sizing: border-box;
`;

const pageListWrapperStyles = css`
  margin: 0;
  padding: 0;
`;

const pageListItemStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  & + & {
    margin-top: 2rem;
  }
`;

const linkStyles = css`
  text-decoration: none;
`;

const preferredLanguageWrapperStyles = css``;

const globalStyles = css`
  body {
    /* To prevent scrolling when drawer is showing */
    overflow: hidden;
  }
`;

const DrawerContainer = () => {
  const getSiteMetadataResponse = useGetSiteMetadata();
  const getLanguagesResponse = useGetLanguages();
  const intl = useIntl();

  const pages = getSiteMetadataResponse.siteMetadata.pageRoutes.map(({ key, camelCase }) => (
    <li key={key} css={pageListItemStyles}>
      <Link to={`/${key}`} css={linkStyles}>
        <Heading3>{intl.formatMessage({ id: `pages.${camelCase}` })}</Heading3>
      </Link>
    </li>
  ));

  const languageButtons = getLanguagesResponse.languages.map((language) => {
    const translatedLanguageMap = {
      ko: '한국어',
      en: 'English',
    };

    return (
      <PrimaryButton key={language} onClick={() => changeLocale(language, null)}>
        {translatedLanguageMap[language]}
      </PrimaryButton>
    );
  });

  return (
    <Fragment>
      <Global styles={globalStyles} />
      <div css={drawerStyles}>
        <div css={positionerStyles}>
          <ul css={pageListWrapperStyles}>{pages}</ul>

          <div css={preferredLanguageWrapperStyles}>
            <Paragraph>{intl.formatMessage({ id: 'drawer.preferredLanguageTitle' })}</Paragraph>
            {languageButtons}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DrawerContainer;
