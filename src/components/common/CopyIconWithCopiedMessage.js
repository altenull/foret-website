import { Color } from '@altenull/foret-core';
import { Subtitle2 } from '@altenull/foret-react';
import { css } from '@emotion/core';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { COPY_ICON_WRAPPER_DARK } from '../../constants/color.constant';
import { CopyIcon } from '../icons';

const innerWrapperStyles = css`
  position: relative;
`;

const copyIconWrapperStyles = (theme, isHovered, hasCopied, iconWrapperColor) => css`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 50%;
  transition: transform ${theme.duration.slow}, opacity ${theme.duration.slow}, background-color ${theme.duration.slow};
  transform: translateX(${hasCopied ? '8px' : '0'});
  opacity: ${hasCopied ? '0' : '1'};
  background-color: ${isHovered ? iconWrapperColor : 'none'};
`;

const copyIconStyles = css`
  padding: 8px;
`;

const copySuccessMessageStyles = (theme, hasCopied, color) => css`
  position: absolute;
  top: 8px;
  right: -8px;
  white-space: nowrap;
  color: ${color};
  transition: transform ${theme.duration.slow}, opacity ${theme.duration.slow};
  transform: translateX(${hasCopied ? '-8px' : '0'});
  opacity: ${hasCopied ? '1' : '0'};
`;

const CopyIconWithCopiedMessage = React.forwardRef(
  (
    { isHovered = false, hasCopied = false, color = Color.White, iconWrapperColor = COPY_ICON_WRAPPER_DARK, ...props },
    ref
  ) => {
    const intl = useIntl();

    return (
      <div ref={ref} {...props}>
        <div css={innerWrapperStyles}>
          <span css={(theme) => copyIconWrapperStyles(theme, isHovered, hasCopied, iconWrapperColor)}>
            <CopyIcon css={copyIconStyles} color={color} />
          </span>

          <Subtitle2 css={(theme) => copySuccessMessageStyles(theme, hasCopied, color)}>
            {intl.formatMessage({ id: 'common.copied' })}
          </Subtitle2>
        </div>
      </div>
    );
  }
);

export default CopyIconWithCopiedMessage;
