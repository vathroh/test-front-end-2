import { Breadcrumb, Dropdown, Layout, Menu, Space } from 'antd'
import React from 'react'
import { HomeOutlined, UserOutlined, DownOutlined } from '@ant-design/icons';
import { bindActionCreators } from 'redux';
import { userActionCreators } from '../store';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SubMenu from 'antd/lib/menu/SubMenu';
const { Header } = Layout;

interface UserProps {
    isLogin: boolean;
    data: any;
}

const MainHeader: React.FC<UserProps> = (data, isLogin) => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { getLogout } = bindActionCreators(userActionCreators, dispatch)

    const logout = () => {
        getLogout()
        navigate('/login')
    }

    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <a href="">
                            Change Password
                        </a>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <button onClick={logout} className="mainheader-logout-button">Sign Out</button>
                    ),
                },

            ]}
        />
    )




    return (
        <Layout>
            <Header className="site-layout-background" style={{ padding: 0 }}>
                <div className='main-header-content'>
                    <Breadcrumb>
                        <Breadcrumb.Item><HomeOutlined /></Breadcrumb.Item>
                        <Breadcrumb.Item>All Products</Breadcrumb.Item>
                    </Breadcrumb>
                    {
                        data.isLogin ? (

                            <Dropdown overlay={menu}>
                                <a onClick={e => e.preventDefault()}>
                                    <Space>
                                        <div style={{ display: "flex" }} className="userHeaderBox">
                                            <div className="userCircle">
                                                <UserOutlined />
                                            </div>
                                            <p>{data.data.user.name}</p>                                            
                                        </div>
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>





                        ) : (<p>Belum Login</p>)
                    }

                </div>
            </Header>
        </Layout>
    )
}

export default MainHeader