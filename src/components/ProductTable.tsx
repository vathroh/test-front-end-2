import { ProColumns, ProTable } from '@ant-design/pro-components';
import enUSIntl from 'antd/lib/locale/en_US';
import { Button, ConfigProvider, Input } from 'antd';
import React from 'react'
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export interface TabelProps {
    products: [];
}

export type TableListItem = {
    key: number;
    productName: string;
    containers: number;
    creator: string;
};

export type product = {
    id: string;
    fileUrl: string;
    name: string;
    status: string;
}

const ProductTable: React.FunctionComponent<TabelProps> = (products) => {

    const tableListDataSource: TableListItem[] = [];
    const creators = ['samama', '曲丽丽', '林东东', '陈帅帅', '兼某某'];



    products.products.map( (product: product) => {
        console.log(product)

    //     // tableListDataSource.push({
    //     //     key: product.id,
    //     //     productName: product.name,
    //     //     containers: Math.floor(Math.random() * 20),
    //     //     creator: creators[Math.floor(Math.random() * creators.length)],
    //     // });

    })


    for (let i = 0; i < 5; i += 1) {
        tableListDataSource.push({
            key: i,
            productName: 'AppName',
            containers: Math.floor(Math.random() * 20),
            creator: creators[Math.floor(Math.random() * creators.length)],
        });
    }

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
            title: 'Categories',
            dataIndex: 'creator',
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
        },
        {
            title: 'Status',
            key: 'status',
            dataIndex: 'creator',
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
                                alert('add');
                            }}
                        >
                            <PlusOutlined />
                            Add New Products
                        </Button>,
                    ],
                }}
                rowKey="key"
                search={false}
            />
        </ConfigProvider>
    )
}

export default ProductTable