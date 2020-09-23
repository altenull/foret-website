import { Paragraph } from '@altenull/foret-react';
import { css } from '@emotion/core';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { ResponsiveContentLayout } from '../foundation';

const sectionStyles = css`
  padding: 8rem 0;
`;

const paragraphStyles = css`
  & + & {
    margin-top: 2rem;
  }
`;

const IntroSection = () => {
  const intl = useIntl();

  return (
    <section css={sectionStyles}>
      <ResponsiveContentLayout>
        <Paragraph css={paragraphStyles}>{intl.formatMessage({ id: 'home.intro.description1' })}</Paragraph>
        <Paragraph css={paragraphStyles}>{intl.formatMessage({ id: 'home.intro.description2' })}</Paragraph>
        <Paragraph css={paragraphStyles}>{intl.formatMessage({ id: 'home.intro.description3' })}</Paragraph>
      </ResponsiveContentLayout>
    </section>
  );
};

export default IntroSection;
