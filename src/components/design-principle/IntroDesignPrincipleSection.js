import { Heading2, Paragraph } from '@altenull/foret-react';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { marginTopForHeading2 } from '../../utils/margin.util';
import { ResponsiveContentLayout } from '../foundation';

const IntroDesignPrincipleSection = () => {
  const intl = useIntl();

  return (
    <section>
      <ResponsiveContentLayout>
        <Heading2 enableMargin enableResponsive>
          {intl.formatMessage({ id: 'designPrinciple.content.designPrinciple.principle1Title' })}
        </Heading2>
        <Paragraph enableMargin enableResponsive>
          {intl.formatMessage({ id: 'designPrinciple.content.designPrinciple.principle1Description' })}
        </Paragraph>

        <Heading2 css={marginTopForHeading2} enableMargin enableResponsive>
          {intl.formatMessage({ id: 'designPrinciple.content.designPrinciple.principle2Title' })}
        </Heading2>
        <Paragraph enableMargin enableResponsive>
          {intl.formatMessage({ id: 'designPrinciple.content.designPrinciple.principle2Description' })}
        </Paragraph>

        <Heading2 css={marginTopForHeading2} enableMargin enableResponsive>
          {intl.formatMessage({ id: 'designPrinciple.content.designPrinciple.principle3Title' })}
        </Heading2>
        <Paragraph enableMargin enableResponsive>
          {intl.formatMessage({ id: 'designPrinciple.content.designPrinciple.principle3Description' })}
        </Paragraph>
      </ResponsiveContentLayout>
    </section>
  );
};

export default IntroDesignPrincipleSection;
