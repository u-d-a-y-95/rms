import React from "react";
import { Layout } from "antd";
const { Content } = Layout;
import { theme } from "antd";

interface ContainerProps {
  children: any;
}

const Container: React.FC<ContainerProps> = ({ children }: ContainerProps) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Content
      style={{
        margin: "24px 24px",
        padding: 24,
        minHeight: 280,
        background: colorBgContainer,
      }}
    >
      {children}
    </Content>
  );
};

export default Container;
