import { hexToRgb } from '@altenull/foret-core';
import { useIntl } from 'gatsby-plugin-intl';
import React, { useState } from 'react';
import { ColorChip } from '../../components/color';
import { clipboardCopy } from '../../utils/clipboard.util';
import { getBrightness } from '../../utils/color.util';

const ColorChipContainer = ({ name, color }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hasColorCopied, setHasColorCopied] = useState(false);

  const intl = useIntl();

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);

    if (hasColorCopied) {
      setHasColorCopied(false);
    }
  };

  const handleClick = (color) => {
    const isClipboardCopySuccesss = clipboardCopy(color);

    if (isClipboardCopySuccesss) {
      setHasColorCopied(true);
    }
  };

  const rgb = hexToRgb(color);
  const isBrightnessHigh = getBrightness(rgb) >= 125;

  return (
    <ColorChip
      name={name}
      colorCopySuccessMessage={intl.formatMessage({ id: 'color.copied' })}
      color={color}
      rgb={rgb}
      isBrightnessHigh={isBrightnessHigh}
      isHovered={isHovered}
      hasColorCopied={hasColorCopied}
      onClick={() => handleClick(color)}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    />
  );
};

export default ColorChipContainer;
