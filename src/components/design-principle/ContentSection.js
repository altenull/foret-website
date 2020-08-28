import { Heading2, Paragraph } from '@altenull/foret-react';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { ResponsiveContentLayout } from '../common';

const ContentSection = () => {
  const intl = useIntl();

  return (
    <section>
      <ResponsiveContentLayout>
        <Heading2>{intl.formatMessage({ id: 'designPrinciple.content.designPrinciple.principle1Title' })}</Heading2>
        <Paragraph>
          {intl.formatMessage({ id: 'designPrinciple.content.designPrinciple.principle1Description' })}
        </Paragraph>
        <Heading2>{intl.formatMessage({ id: 'designPrinciple.content.designPrinciple.principle2Title' })}</Heading2>
        <Paragraph>
          {intl.formatMessage({ id: 'designPrinciple.content.designPrinciple.principle2Description' })}
        </Paragraph>
        <Heading2>{intl.formatMessage({ id: 'designPrinciple.content.designPrinciple.principle3Title' })}</Heading2>
        <Paragraph>
          {intl.formatMessage({ id: 'designPrinciple.content.designPrinciple.principle3Description' })}
        </Paragraph>
      </ResponsiveContentLayout>
    </section>
  );
};

export default ContentSection;
