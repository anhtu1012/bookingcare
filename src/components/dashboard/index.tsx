import { PieChartOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import { IoMdLogOut } from "react-icons/io";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../redux/features/userSlice";
import { toast } from "react-toastify";
import { User } from "../../model/user";
const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: string,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label: <Link to={key}>{label}</Link>, //label = label ,
  } as MenuItem;
}

const Dashboard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user: User | null = useSelector(selectUser);
  const getMenuItems = (roleId: string): MenuItem[] => {
    if (roleId === "R1") {
      return [
        getItem("ManageUser", "/dashboard/manage-user", <PieChartOutlined />),
        getItem("ManageDoctor", "/dashboard/manage-doctor-blog", <PieChartOutlined />),
      ];
    } else {
      
    }
  };

  const items: MenuItem[] = user ? getMenuItems(user.roleId) : [];
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    navigate("/");
    toast.success("Đăng Xuất Thành Công");
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          className="demo-logo-vertical"
          style={{ textAlign: "center", padding: "20px" }}
        >
          <img
            src="https://img.vn.my-best.com/product_images/ef33fc54534d4ca7444b21d7ea4b748c.png?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=40b7637b014b5367b57287187a4db72f"
            alt="logo"
            width={150}
            className="header__logo"
          />
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ backgroundColor: "white" }}>
          <div className="header_dashbord">
            <h2>Xin Chào {user ? `${user.firstName} ${user.lastName}` : ""}</h2>
            <IoMdLogOut size={30} onClick={handleLogout} />
          </div>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
