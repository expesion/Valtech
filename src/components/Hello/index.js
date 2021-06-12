import React from "react";
import { Container, Content, Text, TextBox } from "./styles/Hello";
function Hello({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
Hello.Content = function HelloContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};
Hello.TextBox = function HelloTextBox({ children, ...restProps }) {
  return <TextBox>{children}</TextBox>;
};
Hello.Text = function HelloText({ children, ...restProps }) {
  return <Text>{children}</Text>;
};
export default Hello;
