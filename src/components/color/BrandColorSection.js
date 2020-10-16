import { Heading2 } from '@altenull/foret-react';
import { css } from '@emotion/core';
import React from 'react';
import { FORET_GREEN_COLOR_WITH_NAME, WHITE_COLOR_WITH_NAME } from '../../constants/color.constant';
import { ColorChipContainer } from '../../containers/color';
import { ResponsiveContentLayout } from '../foundation';

const foretGreenColorChipStyles = css`
  height: 480px;
  margin-bottom: 16px;
`;

const whiteColorChipStyles = css`
  height: 240px;
`;

const BrandColorSection = () => {
  return (
    <section>
      <ResponsiveContentLayout>
        <Heading2 enableMargin enableResponsive>
          Brand Colors
        </Heading2>
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
      </ResponsiveContentLayout>
    </section>
  );
};

export default BrandColorSection;
