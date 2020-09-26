import { MarginalHeading2 } from '@altenull/foret-react';
import React from 'react';
import { ColorChipContainer } from '../../containers/color';
import { ResponsiveContentLayout } from '../foundation';
import { COLOR_WITH_NAMES } from '../../constants/color.constant';

const ContentSection = () => {
  const colorChips = COLOR_WITH_NAMES.map(({ name, color }) => (
    <ColorChipContainer key={color} name={name} color={color} />
  ));

  return (
    <section>
      <ResponsiveContentLayout>
        <MarginalHeading2>Color Overview</MarginalHeading2>
        <div>{colorChips}</div>
      </ResponsiveContentLayout>
    </section>
  );
};

export default ContentSection;
