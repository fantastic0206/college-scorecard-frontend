import React, { useEffect, useState } from "react";
import { withRouter } from "next/router";
import { Layout as LayoutWrapper, Menu, Button, theme } from "antd";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import LayoutProvider from "context/LayoutProvider";
import {
  LISTING_POSTS_PAGE,
  LOGIN_PAGE,
  REGISTRATION_PAGE,
  AGENT_PROFILE_PAGE,
  AGENT_ACCOUNT_SETTINGS_PAGE,
  ADD_HOTEL_PAGE,
  PRICING_PLAN_PAGE,
  SINGLE_POST_PAGE,
  PRIVACY_PAGE,
  CHANGE_PASSWORD_PAGE,
  FORGET_PASSWORD_PAGE,
  AGENT_IMAGE_EDIT_PAGE,
  AGENT_PASSWORD_CHANGE_PAGE,
  ADMIN_PAGE,
} from "settings/constant";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  UserOutlined,
  RedditOutlined,
} from "@ant-design/icons";
import Text from "components/UI/Text/Text";
import { AdminPageArea } from "./admin.style";

const LogoIcon = () => (
  <svg width="30" height="27.984" viewBox="0 0 25 27.984">
    <g transform="translate(0 0)">
      <path
        d="M25.45,2.767a34.5,34.5,0,0,0-4,1.143,35.262,35.262,0,0,0-3.771,1.545,26.069,26.069,0,0,0-3.179,1.8,26.068,26.068,0,0,0-3.191-1.8A35.262,35.262,0,0,0,7.54,3.909,34.5,34.5,0,0,0,3.55,2.767L2,2.45V17.94a12.5,12.5,0,1,0,25,0V2.45ZM14.5,10.492c2.339,1.96,3.522,4.19,3.512,6.608a3.512,3.512,0,1,1-7.024,0h0C10.98,14.66,12.162,12.442,14.5,10.492Zm9.913,7.448a9.915,9.915,0,0,1-19.831,0V5.69a31.8,31.8,0,0,1,7.748,3.259,13.43,13.43,0,0,0-2.344,2.737A9.929,9.929,0,0,0,8.4,17.095a6.1,6.1,0,1,0,12.2,0,9.932,9.932,0,0,0-1.587-5.412,13.427,13.427,0,0,0-2.346-2.742,29.737,29.737,0,0,1,5.586-2.577c.819-.284,1.559-.51,2.158-.675Z"
        transform="translate(-2 -2.45)"
        fill="#fff"
      />
    </g>
  </svg>
);

const { Sider, Content } = LayoutWrapper;

const Layout = ({ children, router }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [defaultSelectedKeys, setDefaultSelectedKey] = useState();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onMenuClick = (item) => {
    router.push(`/admin/${item.key}`);
  };

  useEffect(() => {
    setDefaultSelectedKey(`${router.pathname.split("/")[2]}`);
  }, [router]);

  return (
    <LayoutWrapper>
      <LayoutProvider>
        {router.pathname.includes(ADMIN_PAGE) ? (
          <AdminPageArea>
            <LayoutWrapper>
              <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical">
                  <LogoIcon />
                  <Text
                    fontWeight="bolder"
                    color="white"
                    fontSize="20px"
                    content="College Scorecard"
                  />
                </div>
                <Menu
                  theme="dark"
                  mode="inline"
                  defaultSelectedKeys={[defaultSelectedKeys]}
                  onClick={onMenuClick}
                  items={[
                    {
                      key: "user",
                      icon: <UserOutlined />,
                      label: "Users",
                    },
                    {
                      key: "reddit",
                      icon: <RedditOutlined />,
                      label: "Reddits",
                    },
                    {
                      key: "college",
                      icon: <HomeOutlined />,
                      label: "Colleges",
                    },
                  ]}
                />
              </Sider>
              <LayoutWrapper>
                <LayoutWrapper.Header
                  style={{ padding: 0, background: colorBgContainer }}
                >
                  <Button
                    type="text"
                    icon={
                      collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                    }
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                      fontSize: "16px",
                      width: 64,
                      height: 64,
                    }}
                  />
                </LayoutWrapper.Header>
                <Content
                  style={{
                    margin: "24px 16px",
                    padding: 24,
                    minHeight: 280,
                    background: colorBgContainer,
                  }}
                >
                  {children}
                </Content>
              </LayoutWrapper>
            </LayoutWrapper>
          </AdminPageArea>
        ) : router.pathname === LOGIN_PAGE ||
          router.pathname === CHANGE_PASSWORD_PAGE ||
          router.pathname === FORGET_PASSWORD_PAGE ||
          router.pathname === REGISTRATION_PAGE ? (
          <Content>{children}</Content>
        ) : (
          <>
            <Header />
            <Content>{children}</Content>
            {router.pathname === LISTING_POSTS_PAGE ||
            router.pathname === PRICING_PLAN_PAGE ||
            router.pathname === ADD_HOTEL_PAGE ||
            router.pathname === AGENT_PROFILE_PAGE ||
            router.pathname === CHANGE_PASSWORD_PAGE ||
            router.pathname === FORGET_PASSWORD_PAGE ||
            router.pathname === PRIVACY_PAGE ||
            router.pathname ===
              `${AGENT_ACCOUNT_SETTINGS_PAGE + AGENT_IMAGE_EDIT_PAGE}` ||
            router.pathname ===
              `${AGENT_ACCOUNT_SETTINGS_PAGE + AGENT_PASSWORD_CHANGE_PAGE}` ||
            router.pathname === AGENT_ACCOUNT_SETTINGS_PAGE ? (
              <div style={{ height: "33px" }} />
            ) : (
              <Footer path={router.pathname === SINGLE_POST_PAGE} />
            )}
          </>
        )}
      </LayoutProvider>
    </LayoutWrapper>
  );
};

export default withRouter(Layout);
