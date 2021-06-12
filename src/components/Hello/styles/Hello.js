import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex: 1 0 auto;
  position: relative;
  margin-right: 7vw;
  min-width: 23vw;
  height: 7.7vw;
  overflow: hidden;
  @media (min-width: 58.75rem) {
    padding-top: 7.7vw;
    min-height: calc(6vh + 150px);
  }
  @media (max-width: 1400px) {
    visibility: hidden;
  }
`;

export const Content = styled.div`
  position: absolute;
  text-align: end;
  top: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 84vw;
  z-index: 1;
  (min-width: 58.75rem) {
    padding-top: 7.7vw;
    min-height: calc(6vh + 150px);
  }
`;
export const TextBox = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 3vw;
  min-width: 23vw;
  overflow: hidden;
`;
export const Text = styled.h3`
  color: #fff;
  margin: 0;
  padding-right: 5px;
  color: #fff;
  line-height: 1;
  letter-spacing: -0.3125rem;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  font-size: 6vw;
`;
