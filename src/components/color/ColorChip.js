import { Color } from '@altenull/foret-core';
import { Paragraph, Subtitle2 } from '@altenull/foret-react';
import { css } from '@emotion/core';
import React from 'react';
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

const sharedTextColorStyles = (isBrightnessHigh) => css`
  color: ${isBrightnessHigh ? Color.Ink : Color.White};
`;

const colorCodeWrapperStyles = (isHovered) => css`
  position: absolute;
  left: 24px;
  bottom: 8px;
  transition: transform 0.3s, opacity 0.3s;
  transform: translateY(${isHovered ? '-8px' : '0'});
  opacity: ${isHovered ? '1' : '0'};
`;

const copyIconWrapperStyles = (isHovered, hasColorCopied, isBrightnessHigh) => css`
  position: absolute;
  border-radius: 50%;
  top: 16px;
  right: 16px;
  transition: transform 0.3s, opacity 0.3s, background-color 0.3s;
  transform: translateX(${hasColorCopied ? '8px' : '0'});
  opacity: ${hasColorCopied ? '0' : '1'};
  background-color: ${isHovered ? (isBrightnessHigh ? 'rgba(0, 0, 0, 0.075)' : 'rgba(255, 255, 255, 0.25)') : 'none'};
`;

const copyIconStyles = css`
  padding: 8px;
`;

const colorCopySuccessMessageStyles = (hasColorCopied) => css`
  position: absolute;
  top: 24px;
  right: 8px;
  transition: transform 0.3s, opacity 0.3s;
  transform: translateX(${hasColorCopied ? '-8px' : '0'});
  opacity: ${hasColorCopied ? '1' : '0'};
`;

const ColorChip = ({
  name,
  colorCopySuccessMessage,
  color,
  rgb: { r, g, b },
  isBrightnessHigh,
  isHovered,
  hasColorCopied,
  ...props
}) => {
  return (
    <div css={colorChipStyles(color)} {...props}>
      <Paragraph css={sharedTextColorStyles(isBrightnessHigh)}>{name}</Paragraph>

      <span css={colorCodeWrapperStyles(isHovered)}>
        <Subtitle2 css={sharedTextColorStyles(isBrightnessHigh)}>{color}</Subtitle2>
        <Subtitle2 css={sharedTextColorStyles(isBrightnessHigh)}>
          rgb({r}, {g}, {b})
        </Subtitle2>
      </span>

      <span css={copyIconWrapperStyles(isHovered, hasColorCopied, isBrightnessHigh)}>
        <CopyIcon css={copyIconStyles} color={isBrightnessHigh ? Color.Ink : Color.White} />
      </span>

      <Subtitle2 css={[sharedTextColorStyles(isBrightnessHigh), colorCopySuccessMessageStyles(hasColorCopied)]}>
        {colorCopySuccessMessage}
      </Subtitle2>
    </div>
  );
};

export default ColorChip;
