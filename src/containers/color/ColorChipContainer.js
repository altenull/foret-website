import { hexToRgb } from '@altenull/foret-core';
import React, { useEffect, useState } from 'react';
import { ColorChip } from '../../components/color';
import useIsHovered from '../../hooks/core/useIsHovered';
import { clipboardCopy } from '../../utils/clipboard.util';
import { getBrightness } from '../../utils/color.util';

const ColorChipContainer = ({ name, color, ...props }) => {
  const [hasColorCopied, setHasColorCopied] = useState(false);

  const [colorChipRef, isColorChipHovered] = useIsHovered();

  useEffect(() => {
    if (!isColorChipHovered && hasColorCopied) {
      setHasColorCopied(false);
    }
  }, [isColorChipHovered, hasColorCopied]);

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
      ref={colorChipRef}
      name={name}
      color={color}
      rgb={rgb}
      isBrightnessHigh={isBrightnessHigh}
      isHovered={isColorChipHovered}
      hasColorCopied={hasColorCopied}
      onClick={() => handleClick(color)}
      {...props}
    />
  );
};

export default ColorChipContainer;
