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
      <SmallText css={smallTextStyles}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s,
      </SmallText>
    </footer>
  );
};

export default Footer;
