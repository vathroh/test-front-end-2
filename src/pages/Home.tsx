import {
    AppstoreOutlined,
    FileTextOutlined,
    NotificationOutlined,
    ReadOutlined,
    RightOutlined,
    SettingOutlined,
    ShopOutlined,
    ShoppingOutlined,
    SmileOutlined,
    TagOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Typography } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import SubMenu from 'antd/lib/menu/SubMenu';
import MainHeader from '../components/MainHeader';


const { Content, Footer, Sider } = Layout;
const { Title } = Typography;

export interface IHomePageProps { 
    data: any;
    isLogin: boolean
  }

const Home: React.FunctionComponent<IHomePageProps> = (data, isLogin) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)} breakpoint={"lg"}>
                <div className="logo" style={{ color: '#fff' }}>
                    <ShopOutlined />
                    {data.isLogin ? (
                    <span style={{ paddingLeft: '10px' }}>{data.data.user.tenant.name}</span>
                    ) : (<span></span>) }
                    <RightOutlined style={{ float: 'right', paddingTop: '5px' }} />
                </div>
                <Menu theme="dark" defaultSelectedKeys={['dashboard']} mode="inline">
                    <Menu.Item key="dashboard">
                        <AppstoreOutlined />
                        <span>Dashboard</span>
                        <Link to="/"></Link>
                    </Menu.Item>
                    <Menu.Item key="orders">
                        <ShoppingOutlined />
                        <span>Orders</span>
                        <Link to=""></Link>
                    </Menu.Item>
                    <SubMenu key="products" title={<span><TagOutlined /><span>Products</span></span>}>
                        <Menu.Item key="allproducts">
                            <span>All Products</span>
                            <Link to="/all-products"></Link>
                        </Menu.Item>
                        <Menu.Item key="inventory">
                            <span>Inventory</span>
                            <Link to=""></Link>
                        </Menu.Item>
                        <Menu.Item key="category">
                            <span>Category</span>
                            <Link to=""></Link>
                        </Menu.Item>
                        <Menu.Item key="addons">
                            <span>Addons</span>
                            <Link to=""></Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="customers">
                        <SmileOutlined />
                        <span>Customers</span>
                        <Link to=""></Link>
                    </Menu.Item>
                    <Menu.Item key="reviews">
                        <ReadOutlined />
                        <span>Reviews</span>
                        <Link to=""></Link>
                    </Menu.Item>
                    <SubMenu key="cms" title={<span><FileTextOutlined /><span>CMS </span></span>}>
                    </SubMenu>
                    <SubMenu key="marketing" title={<span><NotificationOutlined /><span>Marketing</span></span>}>
                    </SubMenu>
                    <Menu.Item key="settings">
                        <SettingOutlined />
                        <span>Settings</span>
                        <Link to=""></Link>
                    </Menu.Item>
                </Menu>
            </Sider>

            <Layout className="site-layout">
                <MainHeader data={data.data} isLogin={data.isLogin} />
                <Title style={{ margin: '20px' }}>Products</Title>
                <Content style={{ margin: '16px' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>KodingWorks ©2022 Created by Fathur Rohman</Footer>
            </Layout>
        </Layout>
    );

}

export default Home