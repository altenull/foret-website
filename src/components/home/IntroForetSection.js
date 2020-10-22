import { Paragraph } from '@altenull/foret-react';
import { css } from '@emotion/core';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { fadeInSalAttributes } from '../../utils/animation.util';
import { ResponsiveContentLayout } from '../foundation';

const sectionStyles = css`
  padding: 8rem 0;
`;

const descriptionStyles = css`
  & + & {
    margin-top: 2rem;
  }
`;

const IntroForetSection = () => {
  const intl = useIntl();

  return (
    <section css={sectionStyles} {...fadeInSalAttributes()}>
      <ResponsiveContentLayout>
        <Paragraph css={descriptionStyles} enableResponsive>
          {intl.formatMessage({ id: 'home.introForet.description1' })}
        </Paragraph>
        <Paragraph css={descriptionStyles} enableResponsive>
          {intl.formatMessage({ id: 'home.introForet.description2' })}
        </Paragraph>
        <Paragraph css={descriptionStyles} enableResponsive>
          {intl.formatMessage({ id: 'home.introForet.description3' })}
        </Paragraph>
      </ResponsiveContentLayout>
    </section>
  );
};

export default IntroForetSection;
