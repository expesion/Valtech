import styled from "styled-components/macro";

export const Container = styled.div`
  top: 0;
  mix-blend-mode: difference;
  @media (min-width: 58.75rem) {
    position: absolute;
    z-index: 777;
  }
`;
export const Link = styled.a`
  visibility: inherit;
  opacity: 1;
  transform: matrix(1, 0, 0, 1, 0, -10.3333);
  position: absolute;
  top: 1.875rem;
  left: 6vw;
  width: 8vw;
  min-width: 100px;
  @media (min-width: 58.75rem) {
    left: 4vw;
    top: 4vw;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
`;
export const SvgContainer = styled.div`
  height: 0;
  width: 100%;
  padding-top: 20.58824%;
  position: relative;
`;
export const Svg = styled.svg`
  fill: #fff;
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
export const G = styled.g``;
export const Path = styled.path``;

export const Rect = styled.rect`
  animation-name: blink;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @keyframes blink {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
