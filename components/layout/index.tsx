import React, { useState } from "react";
import { Layout } from "antd";
import Sideber from "./sidebar";
import Topbar from "./topbar";
import Container from "./container";

interface AppLayoutProps {
  children: any;
}

const AppLayout: React.FC<AppLayoutProps> = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sideber collapsed={collapsed} />
      <Layout>
        <Topbar />
        <Container>{children}</Container>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
