import { MarginalHeading2, MarginalParagraph } from '@altenull/foret-react';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { ResponsiveContentLayout } from '../common';

const ContentSection = () => {
  const intl = useIntl();

  return (
    <section>
      <ResponsiveContentLayout>
        <MarginalHeading2>
          {intl.formatMessage({ id: 'designPrinciple.content.designPrinciple.principle1Title' })}
        </MarginalHeading2>
        <MarginalParagraph>
          {intl.formatMessage({ id: 'designPrinciple.content.designPrinciple.principle1Description' })}
        </MarginalParagraph>
        <MarginalHeading2>
          {intl.formatMessage({ id: 'designPrinciple.content.designPrinciple.principle2Title' })}
        </MarginalHeading2>
        <MarginalParagraph>
          {intl.formatMessage({ id: 'designPrinciple.content.designPrinciple.principle2Description' })}
        </MarginalParagraph>
        <MarginalHeading2>
          {intl.formatMessage({ id: 'designPrinciple.content.designPrinciple.principle3Title' })}
        </MarginalHeading2>
        <MarginalParagraph>
          {intl.formatMessage({ id: 'designPrinciple.content.designPrinciple.principle3Description' })}
        </MarginalParagraph>
      </ResponsiveContentLayout>
    </section>
  );
};

export default ContentSection;
