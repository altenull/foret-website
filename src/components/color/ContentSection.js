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
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

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

const ContentSection = () => {
  return (
    <section>
      <ResponsiveContentLayout>
        <MarginalHeading2>Brand Colors</MarginalHeading2>
        <div>
          <ColorChipContainer
            css={foretGreenColorChipStyles}
            name={FORET_GREEN_COLOR_WITH_NAME.name}
            color={FORET_GREEN_COLOR_WITH_NAME.color}
          />
          <ColorChipContainer
            css={whiteColorChipStyles}
            name={WHITE_COLOR_WITH_NAME.name}
            color={WHITE_COLOR_WITH_NAME.color}
          />
        </div>

        <MarginalHeading2 css={marginTopForHeading2}>Gray Scale</MarginalHeading2>
        <div>
          {GRAY_SCALE_WITH_NAMES.map(({ name, color }) => (
            <ColorChipContainer key={color} css={grayScaleColorChipStyles} name={name} color={color} />
          ))}
        </div>

        <MarginalHeading2 css={marginTopForHeading2}>Feedback Colors</MarginalHeading2>
        <div css={(theme) => feedbackColorChipWrapperStyles(theme)}>
          {FEEDBACK_COLOR_WITH_NAMES.map(({ name, color }) => (
            <ColorChipContainer key={color} css={(theme) => feedbackColorChipStyles(theme)} name={name} color={color} />
          ))}
        </div>
      </ResponsiveContentLayout>
    </section>
  );
};

export default ContentSection;
