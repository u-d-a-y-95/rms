import React, { useState } from "react";
import { Layout, Menu } from "antd";
const { Sider } = Layout;
import { menus } from "./menus";
import { useRouter } from "next/router";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const SideBer: React.FC = ({}) => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const onSelect = ({ key }: any) => {
    router.push("." + key);
  };
  const selectedKey = router.pathname;
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo">RMS</div>
      <div className="sideBarToggle" onClick={(e) => setCollapsed(!collapsed)}>
        {!collapsed && <MenuFoldOutlined />}
        {collapsed && <MenuUnfoldOutlined />}
      </div>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[selectedKey]}
        items={menus}
        onSelect={onSelect}
      />
    </Sider>
  );
};
export default SideBer;
