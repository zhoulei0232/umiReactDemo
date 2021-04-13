import React, { useState, useEffect } from 'react';
import { CarryOutOutlined } from '@ant-design/icons';
import {
    Form,
    Input,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
    Card
} from 'antd';
import ComLeftTree from '@/components/comLeftTree'
import ComRightTable from './components/comRightTable'


const treeData = [
    {
        title: '商城分类列表',
        key: '0-0',
        icon: <CarryOutOutlined />,
        children: [
            {
                title: '蔬菜水果',
                key: '0-0-0',
                icon: <CarryOutOutlined />,
                children: [
                    { title: 'leaf', key: '0-0-0-0', icon: <CarryOutOutlined /> },
                    { title: 'leaf', key: '0-0-0-2', icon: <CarryOutOutlined /> },
                ],
            },
            {
                title: '手机数码',
                key: '0-0-1',
                icon: <CarryOutOutlined />,
                children: [{ title: 'leaf', key: '0-0-1-0', icon: <CarryOutOutlined /> }],
            },
            {
                title: '电脑配件',
                key: '0-0-2',
                icon: <CarryOutOutlined />,
                children: [
                    { title: 'leaf', key: '0-0-2-0', icon: <CarryOutOutlined /> },
                    {
                        title: 'leaf',
                        key: '0-0-2-1',
                        icon: <CarryOutOutlined />,
                    },
                ],
            },
        ],
    },
];
const AddNewProduct: React.FC = () => {

    return (
        <div>
            <Row  >
                <Col span={4}>
                    <ComLeftTree title='产品类型列表' treeData={treeData}>

                    </ComLeftTree>
                </Col>
                <Col span={20}>
                    <ComRightTable title='添加商品'></ComRightTable>
                </Col>
            </Row>
        </div>
    )
}

export default AddNewProduct;