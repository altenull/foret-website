import { css } from '@emotion/core';
import React, { useEffect, useRef } from 'react';
import { Color } from '@altenull/foret-core';
import { hexToRgb } from '../../utils';

const sectionStyles = css`
  width: 100%;
  height: 100%;
`;

const canvasStyles = css`
  width: 100%;
  height: 100%;
  background-color: ${Color.Soil};
`;

const HeroSection = () => {
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
    pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    if (window !== undefined) {
      resize();

      window.addEventListener('resize', resize);
    }

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section ref={sectionRef} css={sectionStyles}>
      <canvas ref={canvasRef} css={canvasStyles} />
    </section>
  );
};

export default HeroSection;
