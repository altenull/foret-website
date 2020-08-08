import { css } from '@emotion/core';
import React, { useEffect, useRef } from 'react';
import { Color } from '@altenull/foret-core';

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

  const sectionRef = useRef();
  const canvasRef = useRef();

  const resize = () => {
    const stageWidth = sectionRef.current.clientWidth;
    const stageHeight = sectionRef.current.clientHeight;

    canvasRef.current.width = stageWidth * pixelRatio;
    canvasRef.current.height = stageHeight * pixelRatio;

    ctx.scale(pixelRatio, pixelRatio);
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
