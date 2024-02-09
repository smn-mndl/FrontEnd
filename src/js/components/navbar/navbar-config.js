import {
  FolderOpenOutlined,
  HomeOutlined,
  IdcardOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";

export const NAVBAR_CONFIG = [
  {
    disp: "Home",
    url: "/",
    icon: <HomeOutlined />,
  },
  {
    disp: "About",
    url: "/about",
    icon: <UserOutlined />,
  },
  {
    disp: "Resume",
    url: "/resume",
    icon: <IdcardOutlined />,
  },
  {
    disp: "Expertise",
    url: "/expertise",
    icon: <FolderOpenOutlined />,
  },
  // {
  //   disp: "Portfolio",
  //   url: "/portfolio",
  // },
  {
    disp: "Contact",
    url: "/contact",
    icon: <MailOutlined />,
  },
];
