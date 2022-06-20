import { ProTable } from '@ant-design/pro-components';
import { ProColumns } from '@ant-design/pro-components';
import { Button, ConfigProvider, Input } from 'antd';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
        tenant : {
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
    const dispatch = useDispatch()
    const { products } = useTypedSelector((state:RootState) => state.productReducer)
    const { getProductList } = bindActionCreators(productActionCreators, dispatch)
    const { data } = useTypedSelector((state:RootState) => state.userReducer)
    const user:user = data
    const token = user.token
    const tenantId = user.user.tenant.id

    useEffect(()=>{
        getProductList(token, tenantId)
    }, [dispatch])
    
    const tableListDataSource: TableListItem[] = [];

    Object.keys(products).map( (i)=>{
        let product:product = products[i]
        let productCategories = product.categories

        let categoriesText = ''
        productCategories.map( (item) => {
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
                付小小: { text: 'sdfsdf' },
                曲丽丽: { text: '曲丽丽' },
                林东东: { text: '林东东' },
                陈帅帅: { text: '陈帅帅' },
                兼某某: { text: '兼某某' },
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
                close: { text: 'Default', status: 'Default' },
                running: { text: 'Processing', status: 'Processing' },
                online: { text: 'Success', status: 'Success' },
                error: { text: 'Failed', status: 'Error' },
            },
        },
        {
            title: 'Action',
            key: 'action',
            render: () => {
                return <Button>halo</Button>
            }
        },
    ];

    return (
        <ConfigProvider locale={enUSIntl}>
            <ProTable<TableListItem>
                columns={columns}
                request={(params, sorter, filter) => {
                    // console.log(params, sorter, filter);
                    return Promise.resolve({
                        data: tableListDataSource,
                        success: true,
                    });
                }}
                headerTitle="Product List"
                toolbar={{
                    multipleLine: false,
                    actions: [
                        <Button
                            key="add"
                            type="primary"
                            onClick={() => {
                                // alert('add');
                                getProductList(token, tenantId)
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
        </ConfigProvider>
    );
};

export default AllProducts
