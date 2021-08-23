import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, NavLink } from "react-router-dom";

import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;

export const PublicRouter = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={(props) =>
      isAuthenticated ? (
        <Redirect to="/dashboard" />
      ) : (
        <Layout style={{ minHeight: "100vh" }} className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
              <Menu.Item key="home">
                {" "}
                <NavLink to="/">{`Home`}</NavLink>
              </Menu.Item>
              <Menu.Item key="mycollection">
                <NavLink to="/mycollection">{`My Collections`} </NavLink>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
            <div className="site-layout-content">
              {" "}
              <Component {...props} />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Gabriel Campos ©2021 Created by Gcamon
          </Footer>
        </Layout>
      )
    }
  />
);

const mapStateToProps = () => ({
  isAuthenticated: false,
});
export default connect(mapStateToProps)(PublicRouter);
