import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

interface IMenu {
  key: string;
  icon: React.ReactNode;
  label: string;
}

export const menus: IMenu[] = [
  {
    key: "/",
    icon: <UserOutlined />,
    label: "Dashboard",
  },
  {
    key: "/products",
    icon: <VideoCameraOutlined />,
    label: "Products",
  },
  {
    key: "/profile",
    icon: <UploadOutlined />,
    label: "Profile",
  },
];
