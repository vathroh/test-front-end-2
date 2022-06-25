import { ProTable } from '@ant-design/pro-components';
import { ProColumns } from '@ant-design/pro-components';
import { Button, ConfigProvider, Input, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelectior';
import { productActionCreators, RootState } from '../../store';
import { bindActionCreators } from 'redux';
import enUSIntl from 'antd/lib/locale/en_US';



export type TableListItem = {
    key: string;
    productName: string;
    priority: string;
    categories: string;
    price: number;
    status: string;
};

export type product = {
    id: string;
    fileUrl: string;
    name: string;
    priority: string;
    categories: [{
        id: string;
        name: string;
    }];
    price: number;
    status: string;
}

export type user = {
    token: string;
    user: {
        tenant: {
            id: string
        }
    }
}

export type category = {
    id: string;
    name: string;
}

export type products = []



const AllProducts: React.FunctionComponent = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { products } = useTypedSelector((state: RootState) => state.productReducer)
    const { getProductList, deleteProduct } = bindActionCreators(productActionCreators, dispatch)
    const { data } = useTypedSelector((state: RootState) => state.userReducer)
    const user: user = data
    const token = user.token
    const tenantId = user.user.tenant.id

    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const [titleText, setTitleText] = useState('Title Original')
    const [productItem, setProductItem] = useState({ key: '' })
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        if (!products) {
            setTimeout( () => {
                navigate('/login')
            },
                3000
            )
        }
    })


    const tableListDataSource: TableListItem[] = [];

    const columns: ProColumns<TableListItem>[] = [
        {
            title: 'Name',
            dataIndex: 'productName',
            filterDropdown: () => {

                return (
                    <div>
                        <Input autoFocus placeholder='Search'></Input>
                        <div>
                            <button>Search</button>
                            <button>Reset</button>
                        </div>
                    </div>
                );
            },
            filterIcon: () => {
                return <SearchOutlined />;
            },
            render: (_) => <Link to="">{_}</Link>,
        },
        {
            title: 'Priority',
            dataIndex: 'priority',
        },
        {
            title: 'Product Type',
            dataIndex: 'priority',
        },
        {
            title: 'Categories',
            dataIndex: 'categories',
            valueType: 'select',
            filters: true,
            onFilter: true,
            valueEnum: {
                all: { text: 'all' },
            },
        },
        {
            title: 'Price',
            dataIndex: 'price',
            render: (_) => <p>Rp. {_}</p>,
        },
        {
            title: 'Status',
            key: 'status',
            dataIndex: 'status',
            filters: true,
            onFilter: true,
            valueEnum: {
                all: { text: 'Default', status: 'Default' },
                PUBLISHED: { text: 'PUBLISHED', status: 'PUBLISHED' },
            },
        },
        {
            title: 'Action',
            key: 'action',
            render: (product) => {

                return (
                    <div>
                        <Button>Edit</Button>
                        <Button onClick={() => {
                            onDeleteStudent(product);
                        }
                        } type="dashed">
                            Delete
                        </Button>
                    </div>
                )
            }
        },
    ];


    const onDeleteStudent = (product: any) => {
        setVisible(true);
        setModalText('Are you sure to delete ' + product.productName + ' ?');
        setTitleText('Delete Products')
        setProductItem(product)
    };

    const handleOk = (productItem: { key: string }) => {
        setConfirmLoading(true);
        deleteProduct(token, tenantId, productItem.key)
        setVisible(false);
        setConfirmLoading(false);
        navigate('/login')
    };

    const handleCancel = () => {
        setVisible(false);
    };

 
    return (
        <ConfigProvider locale={enUSIntl}>
            <ProTable<TableListItem>
                loading={loading}
                columns={columns}
                request={async (params, sorter, filter) => {
                    setLoading(true)
                    await getProductList(token, tenantId, params.current, params.pageSize)                    

                    const productListResponse:
                        {
                            data: {
                                id: string,
                                name: string,
                                description: string,
                                categories: {
                                    id: string,
                                    name: string
                                }[],
                                image: string,
                                status: string,
                                priority: string,
                                price: number,
                            }[],
                            meta: {
                                message: string,
                                page: number,
                                perPage: number,
                                statusCode: number,
                                totalData: number,
                                totalPage: number
                            }
                        } = products

                    await productListResponse.data.map((product, i) => {
                        let categoriesText = ''
                        product.categories.map((item) => {
                            categoriesText += item.name + ', '
                        })

                        tableListDataSource.push({
                            key: product.id,
                            productName: product.name,
                            priority: product.priority,
                            categories: categoriesText,
                            price: product.price,
                            status: product.status,
                        });
                    })

                    console.log('selesai')
                    setLoading(false)

                    return await Promise.resolve({
                        total: productListResponse.meta.totalData,
                        data: tableListDataSource,
                        success: true,
                    });
                    
                }}
                pagination={{
                    pageSize: 10,
                    pageSizeOptions: ["5", "10", "20", "50", "100"],
                }}
                headerTitle="Product List"
                toolbar={{
                    multipleLine: false,
                    actions: [
                        <Button
                            key="add"
                            type="primary"
                            onClick={() => {
                                navigate('/add-product')
                            }}
                        >
                            <PlusOutlined />
                            Add New Products
                        </Button>,
                    ],
                }}
                rowKey="key"
                scroll={{ x: 1300 }}
                search={false}
            />


            {/*  Modal */}

            <Modal
                title={titleText}
                visible={visible}
                // onOk={handleOk}
                onOk={() => {
                    handleOk(productItem)
                }}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <p>{modalText}</p>
            </Modal>



        </ConfigProvider>
    );
};

export default AllProducts
