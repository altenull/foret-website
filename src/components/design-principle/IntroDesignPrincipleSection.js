import { Heading2, Paragraph } from '@altenull/foret-react';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { fadeInSalAttributes } from '../../utils/animation.util';
import { marginTopForHeading2 } from '../../utils/margin.util';
import { ResponsiveContentLayout } from '../foundation';

const IntroDesignPrincipleSection = () => {
  const intl = useIntl();

  return (
    <section {...fadeInSalAttributes()}>
      <ResponsiveContentLayout>
        <Heading2 enableMargin enableResponsive>
          {intl.formatMessage({ id: 'designPrinciple.introDesignPrinciple.principle1.title' })}
        </Heading2>
        <Paragraph enableMargin enableResponsive>
          {intl.formatMessage({ id: 'designPrinciple.introDesignPrinciple.principle1.description' })}
        </Paragraph>

        <Heading2 css={marginTopForHeading2} enableMargin enableResponsive>
          {intl.formatMessage({ id: 'designPrinciple.introDesignPrinciple.principle2.title' })}
        </Heading2>
        <Paragraph enableMargin enableResponsive>
          {intl.formatMessage({ id: 'designPrinciple.introDesignPrinciple.principle2.description' })}
        </Paragraph>

        <Heading2 css={marginTopForHeading2} enableMargin enableResponsive>
          {intl.formatMessage({ id: 'designPrinciple.introDesignPrinciple.principle3.title' })}
        </Heading2>
        <Paragraph enableMargin enableResponsive>
          {intl.formatMessage({ id: 'designPrinciple.introDesignPrinciple.principle3.description' })}
        </Paragraph>
      </ResponsiveContentLayout>
    </section>
  );
};

export default IntroDesignPrincipleSection;
