import { Color } from '@altenull/foret-core';
import { Paragraph, Subtitle2 } from '@altenull/foret-react';
import { css } from '@emotion/core';
import React from 'react';
import { getCopyIconWrapperColor } from '../../utils/color.util';
import { CopyIconWithCopiedMessage } from '../common';

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

const sharedTextColorStyles = (contentColor) => css`
  color: ${contentColor};
`;

const colorCodeWrapperStyles = (theme, isHovered) => css`
  position: absolute;
  left: 24px;
  bottom: 8px;
  transition: transform ${theme.duration.slow}, opacity ${theme.duration.slow};
  transform: translateY(${isHovered ? '-8px' : '0'});
  opacity: ${isHovered ? '1' : '0'};
`;

const copyIconWithCopiedMessageStyles = css`
  position: absolute;
  right: 16px;
  top: 16px;
`;

const ColorChip = React.forwardRef(
  ({ name, color, rgb: { r, g, b }, isBrightnessHigh, isHovered, hasColorCopied, ...props }, ref) => {
    const contentColor = isBrightnessHigh ? Color.Ink : Color.White;
    const copyIconWrapperColor = getCopyIconWrapperColor(isBrightnessHigh);

    return (
      <div css={colorChipStyles(color)} ref={ref} {...props}>
        <Paragraph css={sharedTextColorStyles(contentColor)}>{name}</Paragraph>

        <span css={(theme) => colorCodeWrapperStyles(theme, isHovered)}>
          <Subtitle2 css={sharedTextColorStyles(contentColor)}>{color}</Subtitle2>
          <Subtitle2 css={sharedTextColorStyles(contentColor)}>
            rgb({r}, {g}, {b})
          </Subtitle2>
        </span>

        <CopyIconWithCopiedMessage
          css={copyIconWithCopiedMessageStyles}
          isHovered={isHovered}
          hasCopied={hasColorCopied}
          color={contentColor}
          iconWrapperColor={copyIconWrapperColor}
        />
      </div>
    );
  }
);

export default ColorChip;
