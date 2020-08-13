import { Color } from '@altenull/foret-core';
import { SmallText } from '@altenull/foret-react';
import { css } from '@emotion/core';
import React from 'react';

const footerStyles = css`
  padding: 64px 128px;
  box-sizing: border-box;
  border-top: 1px solid ${Color.Ink};
  background-color: ${Color.Paper};
`;

const smallTextStyles = css`
  text-align: center;
`;

const Footer = () => {
  return (
    <footer css={footerStyles}>
      <SmallText css={smallTextStyles}>TODO: Preferred Languages</SmallText>
      <SmallText css={smallTextStyles}>© 2020 Foret Design System. All rights reserved.</SmallText>
      <SmallText css={smallTextStyles}>TODO: Creator Heonyoung Kim. (github link or others...)</SmallText>
    </footer>
  );
};

export default Footer;
