import { Heading2, Paragraph } from '@altenull/foret-react';
import { css } from '@emotion/core';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { ResponsiveContentLayout } from '../common';

const sectionStyles = css`
  position: relative;
  height: 100vh;
`;

const CheckboxSection = () => {
  const intl = useIntl();

  return (
    <section css={sectionStyles}>
      <ResponsiveContentLayout>
        <Heading2>{intl.formatMessage({ id: 'components.checkbox.title' })}</Heading2>
        <Paragraph>{intl.formatMessage({ id: 'components.checkbox.description' })}</Paragraph>
      </ResponsiveContentLayout>
    </section>
  );
};

export default CheckboxSection;
