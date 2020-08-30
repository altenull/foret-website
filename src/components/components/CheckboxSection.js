import { Paragraph } from '@altenull/foret-react';
import { css } from '@emotion/core';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { ResponsiveContentLayout } from '../common';
import AnchorHeading2 from './AnchorHeading2';

const sectionStyles = css`
  position: relative;
  height: 100vh;
`;

const CheckboxSection = () => {
  const intl = useIntl();

  return (
    <section css={sectionStyles}>
      <ResponsiveContentLayout>
        <AnchorHeading2>{intl.formatMessage({ id: 'components.checkbox.title' })}</AnchorHeading2>
        <Paragraph>{intl.formatMessage({ id: 'components.checkbox.description' })}</Paragraph>
      </ResponsiveContentLayout>
    </section>
  );
};

export default CheckboxSection;
