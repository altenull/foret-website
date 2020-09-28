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

const colorCodeWrapperStyles = (theme, isHovered) => css`
  position: absolute;
  left: 24px;
  bottom: 8px;
  transition: transform ${theme.duration.slow}, opacity ${theme.duration.slow};
  transform: translateY(${isHovered ? '-8px' : '0'});
  opacity: ${isHovered ? '1' : '0'};
`;

const copyIconWrapperStyles = (theme, isHovered, hasColorCopied, isBrightnessHigh) => css`
  position: absolute;
  border-radius: 50%;
  top: 16px;
  right: 16px;
  transition: transform ${theme.duration.slow}, opacity ${theme.duration.slow}, background-color ${theme.duration.slow};
  transform: translateX(${hasColorCopied ? '8px' : '0'});
  opacity: ${hasColorCopied ? '0' : '1'};
  background-color: ${isHovered ? (isBrightnessHigh ? 'rgba(0, 0, 0, 0.075)' : 'rgba(255, 255, 255, 0.25)') : 'none'};
`;

const copyIconStyles = css`
  padding: 8px;
`;

const colorCopySuccessMessageStyles = (theme, hasColorCopied) => css`
  position: absolute;
  top: 24px;
  right: 8px;
  transition: transform ${theme.duration.slow}, opacity ${theme.duration.slow};
  transform: translateX(${hasColorCopied ? '-8px' : '0'});
  opacity: ${hasColorCopied ? '1' : '0'};
`;

const ColorChip = React.forwardRef(
  (
    { name, color, rgb: { r, g, b }, colorCopySuccessMessage, isBrightnessHigh, isHovered, hasColorCopied, ...props },
    ref
  ) => {
    return (
      <div css={colorChipStyles(color)} ref={ref} {...props}>
        <Paragraph css={sharedTextColorStyles(isBrightnessHigh)}>{name}</Paragraph>

        <span css={(theme) => colorCodeWrapperStyles(theme, isHovered)}>
          <Subtitle2 css={sharedTextColorStyles(isBrightnessHigh)}>{color}</Subtitle2>
          <Subtitle2 css={sharedTextColorStyles(isBrightnessHigh)}>
            rgb({r}, {g}, {b})
          </Subtitle2>
        </span>

        <span css={(theme) => copyIconWrapperStyles(theme, isHovered, hasColorCopied, isBrightnessHigh)}>
          <CopyIcon css={copyIconStyles} color={isBrightnessHigh ? Color.Ink : Color.White} />
        </span>

        <Subtitle2
          css={(theme) => [
            sharedTextColorStyles(isBrightnessHigh),
            colorCopySuccessMessageStyles(theme, hasColorCopied),
          ]}>
          {colorCopySuccessMessage}
        </Subtitle2>
      </div>
    );
  }
);

export default ColorChip;
