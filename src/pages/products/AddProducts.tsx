import React from 'react'
import backBtn from '../../images/backBtn.svg'
import { useNavigate } from 'react-router-dom';
import { Typography, Card, Form, Input, Row, Col, Badge, Switch, Select, AutoComplete, Checkbox, Divider, Button } from 'antd';
import Icon, { CheckCircleTwoTone } from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import UploadImage from '../../components/UploadImage';

const { Title } = Typography;

export type user = {
    token: string;
    user: {
        tenant: {
            id: string
        }
    }
}

const AddProducts: React.FunctionComponent = () => {

    const navigate = useNavigate()
    
    const backNavigation = () => {
        navigate('/all-products')
    }

    const onFinish = () => {
        alert('hai')
    }

    const onFinishFailed = () => {
        alert('hai')
    }


    const onChange = (checked: boolean) => {
        console.log(`switch to ${checked}`);
    };

    const { Option } = Select;

    const onChangeCheckbox = (e: CheckboxChangeEvent) => {
        console.log(`checked = ${e.target.checked}`);
    };

    const BoxSvg = () => (
        <svg width="41" height="46" viewBox="0 0 41 46" fill="none" stroke="#1890FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <path d="M39 11.3333L20.5 2L2 11.3333M39 11.3333L20.5 20.6667M39 11.3333V34.6667L20.5 44M2 11.3333L20.5 20.6667M2 11.3333V34.6667L20.5 44M20.5 20.6667V44" />
        </svg>
    );

    const HeartIcon = (props: Partial<CustomIconComponentProps>) => (
        <Icon component={BoxSvg} {...props} />
    );


    return (
        <div>

            <div className='add-products-title'>
                <img onClick={backNavigation} src={backBtn} alt="back-button" />
                <Title level={3}>Add Product</Title>
            </div>

            <Form
                name="addproductform"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 24 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Card className='form-container' bordered={true}>
                    <Title level={4} style={{ marginBottom: "30px" }}>Product Information</Title>
                    <Row style={{ marginBottom: "20px" }}>
                        <Col span={5}>
                            <div style={{ display: 'flex' }}>
                                <Title level={5} style={{ marginRight: "10px" }}>Title</Title>
                                <Badge
                                    className="site-badge-count-109"
                                    count={'Required'}
                                    style={{ backgroundColor: '#F5F5F5', color: '#8C8C8C', borderRadius: "4px" }}
                                />
                            </div>
                            <p style={{ fontSize: '12px' }}>Name your product with product type or brand and other additional information like color, size etc</p>
                        </Col>
                        <Col span={3}></Col>
                        <Col span={16}>
                            <Form.Item
                                name="title"
                                rules={[{ required: true, message: 'Please input title!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: "20px" }}>
                        <Col span={8}>
                            <div style={{ display: 'flex' }}>
                                <Title level={5} style={{ marginRight: "10px" }}>Product Status</Title>
                            </div>
                        </Col>
                        <Col span={16}>
                            <Form.Item
                                name="status"
                                rules={[{ required: true, message: 'Please input Product Status!' }]}
                            >
                                <Switch defaultChecked onChange={onChange} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: "20px" }}>
                        <Col span={8}>
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                <Title level={5} style={{ marginRight: "10px" }}>Category</Title>
                                <Badge
                                    className="site-badge-count-109"
                                    count={'Required'}
                                    style={{ backgroundColor: '#F5F5F5', color: '#8C8C8C', borderRadius: "4px" }}
                                />
                            </div>
                        </Col>
                        <Col span={16}>
                            <Form.Item
                                name="categories"
                                rules={[{ required: true, message: 'Please input categories!' }]}
                            >
                                <AutoComplete
                                    style={{ width: '100%' }}
                                    placeholder="Categories"
                                    // options = { categoryItems }
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: "20px" }}>
                        <Col span={5}>
                            <div style={{ display: 'flex' }}>
                                <Title level={5} style={{ marginRight: "10px" }}>Description</Title>
                                <Badge
                                    className="site-badge-count-109"
                                    count={'Required'}
                                    style={{ backgroundColor: '#F5F5F5', color: '#8C8C8C', borderRadius: "4px" }}
                                />
                            </div>
                            <p style={{ fontSize: '12px' }}>Describe your product as clear as posible to provide your customer with detailed information about this product</p>
                        </Col>
                        <Col span={3}></Col>
                        <Col span={16}>
                            <Form.Item
                                name='description'
                                valuePropName='data'
                                getValueFromEvent={(event, editor) => {
                                    const data = editor.getData();
                                    return data;
                                }}
                                rules={[{ required: true, message: 'Please enter the body' }]}>
                                <CKEditor editor={ClassicEditor} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: "20px" }}>
                        <Col span={8}>
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                <Title level={5} style={{ marginRight: "10px" }}>Location Availability</Title>
                                <Badge
                                    className="site-badge-count-109"
                                    count={'Required'}
                                    style={{ backgroundColor: '#F5F5F5', color: '#8C8C8C', borderRadius: "4px" }}
                                />
                            </div>
                        </Col>
                        <Col span={16}>
                            <Form.Item
                                name="locations"
                                rules={[{ required: true, message: 'Please input locations!' }]}
                            >
                                <AutoComplete
                                    style={{ width: '100%' }}
                                    placeholder="Email"
                                    options={[{ value: 'text 1' }, { value: 'text 2' }]}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: "20px" }}>
                        <Col span={8}>
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                <Title level={5}>Priority</Title>
                                <Badge
                                    className="site-badge-count-109"
                                    count={'Required'}
                                    style={{ backgroundColor: '#F5F5F5', color: '#8C8C8C', borderRadius: "4px" }}
                                />
                            </div>
                        </Col>
                        <Col span={16}>
                            <Form.Item
                                name="title"
                                rules={[{ required: true, message: 'Please input title!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: "20px" }}>
                        <Col span={8}>
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                <Title level={5} style={{ marginRight: "10px" }}>Is Featured</Title>
                                <Badge
                                    className="site-badge-count-109"
                                    count={'Required'}
                                    style={{ backgroundColor: '#F5F5F5', color: '#8C8C8C', borderRadius: "4px" }}
                                />
                            </div>
                        </Col>
                        <Col span={16}>
                            <Form.Item
                                name="title"
                                rules={[{ required: true, message: 'Please input title!' }]}
                            >
                                <Switch defaultChecked onChange={onChange} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: "20px" }}>
                        <Col span={8}>
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                <Title level={5}>Minimum Order Quantity</Title>
                                <Badge
                                    className="site-badge-count-109"
                                    count={'Required'}
                                    style={{ backgroundColor: '#F5F5F5', color: '#8C8C8C', borderRadius: "4px" }}
                                />
                            </div>
                        </Col>
                        <Col span={16}>
                            <Form.Item
                                name="title"
                                rules={[{ required: true, message: 'Please input title!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: "20px" }}>
                        <Col span={8}>
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                <Title level={5}>Maximum Order Quantity</Title>
                                <Badge
                                    className="site-badge-count-109"
                                    count={'Required'}
                                    style={{ backgroundColor: '#F5F5F5', color: '#8C8C8C', borderRadius: "4px" }}
                                />
                            </div>
                        </Col>
                        <Col span={16}>
                            <Form.Item
                                name="title"
                                rules={[{ required: true, message: 'Please input title!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: "20px" }}>
                        <Col span={8}>
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                <Title level={5}>SKU</Title>
                            </div>
                        </Col>
                        <Col span={16}>
                            <Form.Item
                                name="title"
                                rules={[{ required: true, message: 'Please input title!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: "20px" }}>
                        <Col span={8}>
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                <Title level={5}>Track Quantity</Title>
                            </div>
                        </Col>
                        <Col span={16}>
                            <Form.Item
                                name="title"
                                rules={[{ required: true, message: 'Please input title!' }]}
                            >
                                <Checkbox onChange={onChangeCheckbox}>Track Quantity</Checkbox>
                            </Form.Item>
                            <Form.Item
                                name="title"
                                rules={[{ required: true, message: 'Please input title!' }]}
                            >
                                <Checkbox onChange={onChangeCheckbox}>Continue selling when out of stock</Checkbox>
                            </Form.Item>
                        </Col>
                    </Row>
                </Card>
                <Card className='form-container' bordered={true}>
                    <Row style={{ marginBottom: "20px" }}>
                        <Col span={8}>
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                <Title level={5}>Product Type</Title>
                            </div>
                        </Col>
                        <Col span={16}>
                            <Row>
                                <Col span={6}>
                                    <Card style={{ border: '1px solid rgb(24, 144, 255)', boxShadow: 'rgba(19, 106, 205, 0.04) 0px 0px 2px, rgba(19, 106, 205, 0.1) 0px 2px 10px' }}>
                                        <div style={{ position: 'absolute', top: 5, right: 5 }}>
                                            <CheckCircleTwoTone twoToneColor="#52c41a" />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

                                            <HeartIcon style={{ color: 'hotpink', marginBottom: '15', marginTop: 15 }} />
                                            <p style={{ fontSize: 16, marginTop: 15, color: '#1890FF' }}>Physical</p>

                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Divider />
                    <Row style={{ marginBottom: "20px" }}>
                        <Col span={5}>
                            <div style={{ display: 'flex' }}>
                                <h4 style={{ marginRight: "10px" }}>Size</h4>
                                <Badge
                                    className="site-badge-count-109"
                                    count={'Required'}
                                    style={{ backgroundColor: '#F5F5F5', color: '#8C8C8C', borderRadius: "4px" }}
                                />
                            </div>
                            <p style={{ fontSize: '12px' }}>Add product dimension after packing</p>
                        </Col>
                        <Col span={3}></Col>
                        <Col span={16}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', width: '25%' }}>
                                    <Form.Item
                                        name="title"
                                        rules={[{ required: true, message: 'Please input title!' }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item>
                                        <Select defaultValue="cm" style={{ width: 70 }}>
                                            <Option value="cm">cm</Option>
                                        </Select>
                                    </Form.Item>
                                </div>

                                <div style={{ display: 'flex', width: '25%' }}>
                                    <Form.Item
                                        name="title"
                                        rules={[{ required: true, message: 'Please input title!' }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item>
                                        <Select defaultValue="cm" style={{ width: 70 }}>
                                            <Option value="cm">cm</Option>
                                        </Select>
                                    </Form.Item>
                                </div>

                                <div style={{ display: 'flex', width: '25%' }}>
                                    <Form.Item
                                        name="title"
                                        rules={[{ required: true, message: 'Please input title!' }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item>
                                        <Select defaultValue="cm" style={{ width: 70 }}>
                                            <Option value="cm">cm</Option>
                                        </Select>
                                    </Form.Item>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: "20px" }}>
                        <Col span={5}>
                            <div style={{ display: 'flex' }}>
                                <h4 style={{ marginRight: "10px" }}>Size</h4>
                                <Badge
                                    className="site-badge-count-109"
                                    count={'Required'}
                                    style={{ backgroundColor: '#F5F5F5', color: '#8C8C8C', borderRadius: "4px" }}
                                />
                            </div>
                            <p style={{ fontSize: '12px' }}>Add product weight after packing</p>
                        </Col>
                        <Col span={3}></Col>
                        <Col span={3}>
                            <Form.Item
                                name="title"
                                rules={[{ required: true, message: 'Please input title!' }]}
                            >
                                <Select defaultValue="gr">
                                    <Option value="gr">gr</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={13}>
                            <Form.Item
                                name="title"
                                rules={[{ required: true, message: 'Please input title!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                </Card>
                <Card className='form-container' bordered={true}>
                    <Title level={4}>Media</Title>
                    <Row style={{ marginBottom: "20px" }}>
                        <Col span={5}>
                            <div style={{ display: 'flex' }}>
                                <Title level={5} style={{ marginRight: "10px" }}>Images</Title>
                                <Badge
                                    className="site-badge-count-109"
                                    count={'Required'}
                                    style={{ backgroundColor: '#F5F5F5', color: '#8C8C8C', borderRadius: "4px" }}
                                />
                            </div>
                            <p style={{ fontSize: '12px' }}>Add image preview of your product to show your product credibility</p>
                        </Col>
                        <Col span={3}></Col>
                        <Col span={16}>
                            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <UploadImage text="Main Image" />
                                <UploadImage text="Image 2" />
                                <UploadImage text="Image 3" />
                                <UploadImage text="Image 4" />
                            </div>
                        </Col>
                    </Row>
                </Card>
                <Card className='form-container' bordered={true}>
                    <Title level={4}>Pricing</Title>
                    <Row style={{ marginBottom: "20px" }}>
                        <Col span={5}>
                            <div style={{ display: 'flex' }}>
                                <Title level={5} style={{ marginRight: "10px" }}>Price</Title>
                                <Badge
                                    className="site-badge-count-109"
                                    count={'Required'}
                                    style={{ backgroundColor: '#F5F5F5', color: '#8C8C8C', borderRadius: "4px" }}
                                />
                            </div>
                        </Col>
                        <Col span={3}></Col>
                        <Col span={16}>
                            <Form.Item
                                name="title"
                                rules={[{ required: true, message: 'Please input title!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: "20px" }}>
                        <Col span={5}>
                            <div style={{ display: 'flex' }}>
                                <Title level={5} style={{ marginRight: "10px" }}>Unit</Title>
                                <Badge
                                    className="site-badge-count-109"
                                    count={'Required'}
                                    style={{ backgroundColor: '#F5F5F5', color: '#8C8C8C', borderRadius: "4px" }}
                                />
                            </div>
                        </Col>
                        <Col span={3}></Col>
                        <Col span={16}>
                            <Form.Item
                                name="title"
                                rules={[{ required: true, message: 'Please input title!' }]}
                            >
                                <Input placeholder="Unit (ex: pcs, kg)" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: "20px" }}>
                        <Col span={5}>
                            <div style={{ display: 'flex' }}>
                                <Title level={5} style={{ marginRight: "10px" }}>Cost Per Item</Title>
                                <Badge
                                    className="site-badge-count-109"
                                    count={'Required'}
                                    style={{ backgroundColor: '#F5F5F5', color: '#8C8C8C', borderRadius: "4px" }}
                                />
                            </div>
                        </Col>
                        <Col span={3}></Col>
                        <Col span={16}>
                            <Form.Item
                                name="title"
                                rules={[{ required: true, message: 'Please input title!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                </Card>
                <Divider />
                <div style={{ width: '100%', height: 40 }}>
                    <Button style={{ background: '#0050B3', color: '#fff', float: 'right', borderRadius: 10 }} htmlType="submit">Save</Button>
                </div>
            </Form>
        </div>
    )
}

export default AddProducts