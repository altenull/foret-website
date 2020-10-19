import { SmallText } from '@altenull/foret-react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import React from 'react';

const tocItemStyles = (theme, isActive) => css`
  display: inline-block;
  text-decoration: none;
  padding-left: 14px;
  margin-left: -2px;
  border-left: 2px solid;
  border-left-color: ${isActive ? theme.colors.foretGreen : 'transparent'};
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const linkTextStyles = (theme, isActive) => css`
  color: ${isActive ? theme.colors.foretGreen : theme.colors.stone};
`;

const TOCItem = ({ to, text, isActive, ...props }) => {
  return (
    <Link css={(theme) => tocItemStyles(theme, isActive)} to={to} {...props}>
      <SmallText css={(theme) => linkTextStyles(theme, isActive)}>{text}</SmallText>
    </Link>
  );
};

export default TOCItem;
