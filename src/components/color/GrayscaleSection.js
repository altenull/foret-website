import { Heading2 } from '@altenull/foret-react';
import { css } from '@emotion/core';
import React from 'react';
import { GRAY_SCALE_WITH_NAMES } from '../../constants/color.constant';
import { ColorChipContainer } from '../../containers/color';
import { marginTopForHeading2 } from '../../utils/margin.util';
import { ResponsiveContentLayout } from '../foundation';

const grayScaleColorChipStyles = css`
  height: 160px;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const GrayscaleSection = () => {
  const grayscaleColorChips = GRAY_SCALE_WITH_NAMES.map(({ name, color }) => (
    <ColorChipContainer key={color} css={grayScaleColorChipStyles} name={name} color={color} />
  ));

  return (
    <section>
      <ResponsiveContentLayout>
        <Heading2 css={marginTopForHeading2} enableMargin enableResponsive>
          Gray Scale
        </Heading2>
        <div>{grayscaleColorChips}</div>
      </ResponsiveContentLayout>
    </section>
  );
};

export default GrayscaleSection;
