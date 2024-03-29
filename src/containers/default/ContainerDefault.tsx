import React, {useState} from "react";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import {Link, Outlet} from "react-router-dom";

const { Header, Sider, Content } = Layout;

const ContainerDefault: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: <Link to={"/"}>Home</Link>,
                        },
                        {
                            key: '2',
                            label: <Link to={"/create"}>Add</Link>,
                        },
                        {
                            key: '3',
                            label: <Link to={"/delete"}>Delete</Link>,
                        },
                        {
                            key: '4',
                            label: <Link to={"/edit"}>Edit</Link>,
                        },
                        {
                            key: '5',
                            label: <Link to={"/register"}>Registration</Link>,
                        },
                        {
                            key: '6',
                            label: <Link to={"/product"}>Products</Link>,
                        },
                        {
                            key: '7',
                            label: <Link to={"/product/create"}>Create Product</Link>,
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: "100vh",
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet/>
                </Content>
            </Layout>
        </Layout>
    );
}

export default ContainerDefault;