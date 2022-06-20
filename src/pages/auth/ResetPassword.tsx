import React, { useEffect } from 'react'
import { Button, Form, Input } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelectior';
import { RootState } from '../../store';

const ResetPassword: React.FC = () => {

    const { isLogin } = useTypedSelector((state:RootState) => state.userReducer)
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

    return (
        <div className='container-page'>
            <div className='login-box'>
                <h2>Reset Password</h2>
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

                    
                    
                    <Button className="primary login-form-button" type="primary" htmlType="submit" >Request Reset Password</Button>
                    <Button className="login-form-button" htmlType="submit" >Back</Button>
                </Form>
                <p>Don't have any account yet? <span><Link to="/register">Sign up here</Link></span></p>
            </div>
        </div>
    )
}

export default ResetPassword