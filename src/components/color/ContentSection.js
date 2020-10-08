import { MarginalHeading2 } from '@altenull/foret-react';
import { css } from '@emotion/core';
import React from 'react';
import {
  FEEDBACK_COLOR_WITH_NAMES,
  FORET_GREEN_COLOR_WITH_NAME,
  GRAY_SCALE_WITH_NAMES,
  WHITE_COLOR_WITH_NAME,
} from '../../constants/color.constant';
import { ColorChipContainer } from '../../containers/color';
import { marginTopForHeading2 } from '../../utils/margin.util';
import { ResponsiveContentLayout } from '../foundation';

const foretGreenColorChipStyles = css`
  height: 480px;
  margin-bottom: 16px;
`;

const whiteColorChipStyles = css`
  height: 240px;
`;

const grayScaleColorChipStyles = css`
  height: 160px;
  margin-bottom: 8px;

  &:last-child {
    margin-top: 0;
  }
`;

const feedbackColorChipWrapperStyles = css`
  display: flex;
`;

const feedbackColorChipStyles = css`
  flex: 1;
  height: 400px;
  margin-right: 16px;

  &::last-child {
    margin-right: 0;
  }
`;

const ContentSection = () => {
  const getColorChips = (colorWithNames, colorChipStyles) =>
    colorWithNames.map(({ name, color }) => (
      <ColorChipContainer key={color} css={colorChipStyles} name={name} color={color} />
    ));

  return (
    <section>
      <ResponsiveContentLayout>
        <MarginalHeading2>Brand Colors</MarginalHeading2>
        <div>
          {getColorChips(FORET_GREEN_COLOR_WITH_NAME, foretGreenColorChipStyles)}
          {getColorChips(WHITE_COLOR_WITH_NAME, whiteColorChipStyles)}
        </div>

        <MarginalHeading2 css={marginTopForHeading2}>Gray Scale</MarginalHeading2>
        <div>{getColorChips(GRAY_SCALE_WITH_NAMES, grayScaleColorChipStyles)}</div>

        <MarginalHeading2 css={marginTopForHeading2}>Feedback Colors</MarginalHeading2>
        <div css={feedbackColorChipWrapperStyles}>
          {getColorChips(FEEDBACK_COLOR_WITH_NAMES, feedbackColorChipStyles)}
        </div>
      </ResponsiveContentLayout>
    </section>
  );
};

export default ContentSection;
