import { Color, hexToRgb } from '@altenull/foret-core';
import { Heading1, PrimaryButton, Subtitle1 } from '@altenull/foret-react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import React, { useEffect, useRef } from 'react';
import { PageRouteEnum } from '../../enums/core/page-route.enum';

const sectionStyles = css``;

const canvasStyles = css`
  width: 100%;
  height: 100vh;
  background-color: ${Color.Soil};
`;

const coverPositionerStyles = css`
  position: absolute;
  left: 50%;
  top: 30%;
`;

const mainTitleStyles = css`
  color: ${Color.White};
  margin-bottom: 16px;
`;

const subtitleStyles = css`
  color: ${Color.White};
  max-width: 592px;
  margin-bottom: 40px;
`;

const linkStyles = css`
  text-decoration: none;
`;

const HeroSection = () => {
  const intl = useIntl();

  let ctx;
  let pixelRatio;
  let stageWidth;
  let stageHeight;

  const sectionRef = useRef();
  const canvasRef = useRef();

  const resize = () => {
    stageWidth = sectionRef.current.clientWidth;
    stageHeight = sectionRef.current.clientHeight;

    ctx.clearRect(0, 0, stageWidth, stageHeight);

    canvasRef.current.width = stageWidth * pixelRatio;
    canvasRef.current.height = stageHeight * pixelRatio;

    ctx.scale(pixelRatio, pixelRatio);
    drawCircle();
  };

  const drawCircle = () => {
    const x = stageWidth / 4;
    const y = stageHeight / 2;
    const radius = stageHeight / 2.5;
    const foretGreenRgb = hexToRgb(Color.ForetGreen);

    ctx.fillStyle = `rgba(${foretGreenRgb.r}, ${foretGreenRgb.g}, ${foretGreenRgb.b}, 1)`;
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fill();
  };

  useEffect(() => {
    ctx = canvasRef.current.getContext('2d');
    if (window !== undefined) {
      pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

      resize();

      window.addEventListener('resize', resize);
    }

    return () => {
      if (window !== undefined) {
        window.removeEventListener('resize', resize);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} css={sectionStyles}>
      <canvas ref={canvasRef} css={canvasStyles} />

      <div css={coverPositionerStyles}>
        <Heading1 css={mainTitleStyles}>{intl.formatMessage({ id: 'home.hero.title' })}</Heading1>
        <Subtitle1 css={subtitleStyles}>{intl.formatMessage({ id: 'home.hero.subtitle' })}</Subtitle1>
        <Link to={`/${PageRouteEnum.GetStarted}`} css={linkStyles}>
          <PrimaryButton>{intl.formatMessage({ id: 'home.hero.getStartedButton' })}</PrimaryButton>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
