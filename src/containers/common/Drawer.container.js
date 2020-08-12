import { Color } from '@altenull/foret-core';
import { Paragraph, PrimaryButton, Subtitle1 } from '@altenull/foret-react';
import { css, Global } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import { changeLocale, useIntl } from 'gatsby-plugin-intl';
import React, { Fragment } from 'react';
import { useSiteMetadata } from '../../hooks';

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
  list-style: none;
  height: 48px;
  text-align: center;
`;

const preferredLanguageWrapperStyles = css``;

const globalStyles = css`
  body {
    /* To prevent scrolling when drawer is showing */
    overflow: hidden;
  }
`;

const DrawerContainer = () => {
  const { pageRoutes } = useSiteMetadata();
  const intl = useIntl();

  const getLanguagesResponse = useStaticQuery(
    graphql`
      query getLanguages {
        sitePage {
          context {
            intl {
              languages
            }
          }
        }
      }
    `
  );

  const pages = pageRoutes.map((pageRoute) => (
    <li key={pageRoute.key} css={pageListItemStyles}>
      <Subtitle1>{intl.formatMessage({ id: `pages.${pageRoute.camelCase}` })}</Subtitle1>
    </li>
  ));

  const languageButtons = getLanguagesResponse.sitePage.context.intl.languages.map((language) => {
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
