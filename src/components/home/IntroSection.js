// TODO: set styles
import { Paragraph } from '@altenull/foret-react';
import { css } from '@emotion/core';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';

const sectionStyles = css`
  padding: 8rem 0;
`;

const positionerStyles = css`
  width: 1024px;
  margin: auto;
`;

const paragraphStyles = css`
  & + & {
    margin-top: 2rem;
  }
`;

const IntroSection = () => {
  const intl = useIntl();

  const descriptionIds = ['home.intro.description1', 'home.intro.description2', 'home.intro.description3'];
  const descriptions = descriptionIds.map((descriptionId) => (
    <Paragraph key={descriptionId} css={paragraphStyles}>
      {intl.formatMessage({ id: descriptionId })}
    </Paragraph>
  ));

  return (
    <section css={sectionStyles}>
      <div css={positionerStyles}>{descriptions}</div>
    </section>
  );
};

export default IntroSection;
