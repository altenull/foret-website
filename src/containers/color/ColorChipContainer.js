import { Color, hexToRgb } from '@altenull/foret-core';
import { Paragraph, Subtitle2 } from '@altenull/foret-react';
import { css } from '@emotion/core';
import { useIntl } from 'gatsby-plugin-intl';
import React, { useState } from 'react';
import { clipboardCopy } from '../../utils/clipboard.util';
import { getBrightness } from '../../utils/color.util';
import { CopyIcon } from '../../components/icons';

const colorChipStyles = (color) => css`
  position: relative;
  min-width: 240px;
  height: 240px;
  padding: 16px 0 0 24px;
  cursor: pointer;
  box-sizing: border-box;
  box-shadow: inset 0 0 0.5px 1px hsla(0, 0%, 0%, 0.05);
  background-color: ${color};
`;

const sharedTextStyles = (isBrightnessHigh) => css`
  color: ${isBrightnessHigh ? Color.Ink : Color.White};
`;

const colorCodeWrapperStyles = (isHovered) => css`
  position: absolute;
  left: 24px;
  transition: bottom 0.3s, opacity 0.3s;
  bottom: ${isHovered ? '16px' : '8px'};
  opacity: ${isHovered ? '1' : '0'};
`;

const copyIconWrapperStyles = (isHovered, hasColorCopied, isBrightnessHigh) => css`
  position: absolute;
  border-radius: 50%;
  top: 16px;
  transition: right 0.3s, opacity 0.3s, background-color 0.3s;
  right: ${hasColorCopied ? '8px' : '16px'};
  opacity: ${hasColorCopied ? '0' : '1'};
  background-color: ${isHovered ? (isBrightnessHigh ? 'rgba(0, 0, 0, 0.075)' : 'rgba(255, 255, 255, 0.25)') : 'none'};
`;

const copyIconStyles = css`
  padding: 8px;
`;

const successCopyMessageStyles = (hasColorCopied) => css`
  position: absolute;
  top: 24px;
  transition: right 0.3s, opacity 0.3s;
  right: ${hasColorCopied ? '16px' : '8px'};
  opacity: ${hasColorCopied ? '1' : '0'};
`;

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

  const { r, g, b } = hexToRgb(color);
  const isBrightnessHigh = getBrightness({ r, g, b }) >= 125;

  return (
    <div
      css={colorChipStyles(color)}
      onClick={() => handleClick(color)}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}>
      <Paragraph css={sharedTextStyles(isBrightnessHigh)}>{name}</Paragraph>

      <span css={colorCodeWrapperStyles(isHovered)}>
        <Subtitle2 css={sharedTextStyles(isBrightnessHigh)}>{color}</Subtitle2>
        <Subtitle2 css={sharedTextStyles(isBrightnessHigh)}>
          rgb({r}, {g}, {b})
        </Subtitle2>
      </span>

      <span css={copyIconWrapperStyles(isHovered, hasColorCopied, isBrightnessHigh)}>
        <CopyIcon css={copyIconStyles} color={isBrightnessHigh ? Color.Ink : Color.White} />
      </span>

      <Subtitle2 css={[sharedTextStyles(isBrightnessHigh), successCopyMessageStyles(hasColorCopied)]}>
        {intl.formatMessage({ id: 'color.copied' })}
      </Subtitle2>
    </div>
  );
};

export default ColorChipContainer;
