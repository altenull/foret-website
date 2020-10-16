import { Heading2 } from '@altenull/foret-react';
import { css } from '@emotion/core';
import React from 'react';
import { FEEDBACK_COLOR_WITH_NAMES } from '../../constants/color.constant';
import { ColorChipContainer } from '../../containers/color';
import { marginTopForHeading2 } from '../../utils/margin.util';
import { ResponsiveContentLayout } from '../foundation';

const feedbackColorChipWrapperStyles = (theme) => css`
  display: flex;
  flex-direction: column;

  ${theme.mediaQueries.viewPort9} {
    flex-direction: row;
  }
`;

const feedbackColorChipStyles = (theme) => css`
  height: 160px;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }

  ${theme.mediaQueries.viewPort9} {
    flex: 1;
    height: 400px;
    margin-right: 16px;
    margin-bottom: 0;
  }

  &:last-child {
    ${theme.mediaQueries.viewPort9} {
      margin-right: 0;
    }
  }
`;

const FeedbackColorSection = () => {
  const feedbackColorChips = FEEDBACK_COLOR_WITH_NAMES.map(({ name, color }) => (
    <ColorChipContainer key={color} css={(theme) => feedbackColorChipStyles(theme)} name={name} color={color} />
  ));

  return (
    <section>
      <ResponsiveContentLayout>
        <Heading2 css={marginTopForHeading2} enableMargin enableResponsive>
          Feedback Colors
        </Heading2>
        <div css={(theme) => feedbackColorChipWrapperStyles(theme)}>{feedbackColorChips}</div>
      </ResponsiveContentLayout>
    </section>
  );
};

export default FeedbackColorSection;
