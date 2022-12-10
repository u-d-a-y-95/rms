import React from "react";
import { Layout, Menu } from "antd";
const { Sider } = Layout;
import { menus } from "./menus";
import { useRouter } from "next/router";

interface SideBerProps {
  collapsed: boolean;
}

const SideBer: React.FC<SideBerProps> = ({ collapsed }) => {
  const router = useRouter();
  const onSelect = ({ key }: any) => {
    router.push("." + key);
  };
  const selectedKey = router.pathname;
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
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
