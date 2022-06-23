import React, { useEffect, useState } from 'react'
import { Button, Form, Input } from 'antd';
import { LockOutlined, MailOutlined, ShopOutlined, UserOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import en from 'world_countries_lists/data/countries/en/world.json';
import { useTypedSelector } from '../../hooks/useTypedSelectior';
import { RootState } from '../../store';
import CountryPhoneInput, {
    CountryPhoneInputValue,
    ConfigProvider,
} from 'antd-country-phone-input';


export interface IRegisterPageProps {}

const Register: React.FunctionComponent<IRegisterPageProps> = (props) => {

    const { isLogin, loading } = useTypedSelector((state:RootState) => state.userReducer)
    const navigate = useNavigate()

    useEffect(()=>{
        if(isLogin){
            navigate('/')
        }
    })

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const [value, setValue] = useState<CountryPhoneInputValue>({ short: 'ID' });

    return (
        <div className='container-page'>

            <div className='login-box'>
                <h2>Register</h2>
                <Form
                    name="basic"
                    className="login-form"
                    labelCol={{ span: 32 }}
                    wrapperCol={{ span: 64 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        hasFeedback
                        name="tenant-name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the tenant name!',
                            },
                        ]}
                    >
                        <Input prefix={<ShopOutlined className="site-form-item-icon" />} placeholder="Tenant Name" />
                    </Form.Item>

                    <Form.Item
                        hasFeedback
                        name="admin-name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the admin name!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Admin Name" />
                    </Form.Item>

                    <Form.Item
                        hasFeedback
                        name="email"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
                    </Form.Item>

                    <Form.Item
                        hasFeedback
                        name="phone-number"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone number!',
                            },
                        ]}
                    >
                        <ConfigProvider locale={en}>
                            <CountryPhoneInput
                                value={value}
                                onChange={(v) => {
                                    setValue(v);
                                }}
                                placeholder='Enter phone number'
                            />
                        </ConfigProvider>
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                pattern: new RegExp(
                                    /^[0-9a-zA-Z@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]+$/i
                                ),
                                message: 'Please input your password without space character!',
                            },
                            {
                                min: 8,
                                message: 'the password must be minimum 8 character'
                            }
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Button className="primary login-form-button" type="primary" htmlType="submit" >{ loading ? 'Loading ...' : 'Register' }</Button>
                </Form>
                <p>Already have an account? <span><Link to="/login">Login here</Link></span></p>
            </div>
        </div>
    )
}

export default Register