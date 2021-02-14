import React from "react";
import { Layout, Menu, Breadcrumb, Row, Col, Divider } from "antd";
import "antd/dist/antd.css";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import contextEdit from "./context/contextEdit";
import ContextEdit from "./context/contextEdit";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class MySider extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Context管理
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              更多
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: "0 16px" }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Row>
                <Col span={12}></Col>
              </Row>
              <Row>
                <ContextEdit />
              </Row>
            </div>
          </Content>
          {/* <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer> */}
        </Layout>
      </Layout>
    );
  }
}

export default MySider;
