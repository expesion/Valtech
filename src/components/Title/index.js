import React from "react";
import {
  Container,
  G,
  Link,
  Path,
  Svg,
  SvgContainer,
  Rect,
} from "./styles/Title";

function Title({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Title.Link = function TitleLink({ ...restProps }) {
  return <Link {...restProps}></Link>;
};

Title.SVGContainer = function SVGContainer({ children, ...restProps }) {
  return <SvgContainer {...restProps}>{children}</SvgContainer>;
};
Title.Svg = function SVG({ children, ...restProps }) {
  return <Svg {...restProps}>{children}</Svg>;
};
Title.G = function TitleG({ children, ...restProps }) {
  return <G {...restProps}>{children}</G>;
};
Title.Path = function TitlePath({ children, ...restProps }) {
  return <Path {...restProps}>{children}</Path>;
};
Title.Rect = function TitlePath({ ...restProps }) {
  return <Rect {...restProps} />;
};
export default Title;
