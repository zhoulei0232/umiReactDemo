import React, { useState, useEffect } from 'react';
import { Table, Badge, Row, Col, Button } from 'antd';
import { DeleteOutlined, EditOutlined, CheckOutlined } from '@ant-design/icons';

import styles from './style/comContentTable.less';

interface dataSourceArray {
    index: number;
    productName: string;
    historyPrice: number;
    nowPrice: number;
    country: string;
    joinTime: string;
    auditStatus: number;
    status: number;
}



const ComContentTable: React.FC = () => {
    const [columns] = useState<any>([
        {
            title: '产品编号',
            align: 'center',
            dataIndex: 'index',
        },
        {
            title: '产品名称',
            align: 'center',
            dataIndex: 'productName',
            render: (value: string) => {
                return (
                    <a href="#" className={styles.auditStatus_color_2}  >{value}</a>
                )
            }
        },
        {
            title: '原价格',
            align: 'center',
            dataIndex: 'historyPrice',
        },
        {
            title: '现价',
            align: 'center',
            dataIndex: 'nowPrice',
        },
        {
            title: '所属地区/国家',
            align: 'center',
            dataIndex: 'country',
        },
        {
            title: '加入时间',
            align: 'center',
            dataIndex: 'joinTime',
        },
        {
            title: '审核状态',
            align: 'center',
            dataIndex: 'auditStatus',
            render: (value: number) => {
                console.log(value);
                let str = '';
                switch (value) {
                    case 0:
                        str = '通过';
                        break;
                    case 1:
                        str = '未通过';
                        break;
                    case 2:
                        str = '待审核';
                        break;
                    default:
                        break;
                }
                return (
                    <span className={styles[`auditStatus_color_${value}`]}>{str}</span>
                )

            }
        },
        {
            title: '状态',
            align: 'center',
            dataIndex: 'status',
            render: (value: number) => {
                let str = '';
                switch (value) {
                    case 0:
                        str = '已启用';
                        break;
                    case 1:
                        str = '未启用';
                        break;
                    default:
                        break;
                }
                return (

                    <Badge status={value === 0 ? 'success' : 'default'} text={str} />

                )

            }
        },
        {
            title: '操作',
            align: 'center',
            dataIndex: 'edit',
            render: (text: any, record: dataSourceArray, index: any) => {
                console.log(text);
                console.log(record);
                console.log(index);
                return (

                    <Row gutter={8} justify="space-around">
                        {record.status === 0 ? <Col className={styles.btn}><Button onClick={() => handleToggle(record)} className={styles.btn_1} block type="primary" size='small'><span style={{ fontSize: '12px' }}>禁用</span></Button></Col> :
                            <Col className={styles.btn}><Button onClick={() => handleToggle(record)} className={styles.btn_2} block type="primary" size='small'  > <CheckOutlined /></Button></Col>}
                        <Col className={styles.btn}><Button className={styles.btn_3} block type="primary" size='small'   ><EditOutlined /></Button></Col>
                        <Col className={styles.btn}><Button onClick={() => handleDelete(index)} className={styles.btn_4} block type="primary" size='small'   ><DeleteOutlined /></Button></Col>
                    </Row>

                )

            }
        },
    ]);
    const [dataSource, setDataSource] = useState<dataSourceArray[]>([{
        index: 965,
        productName: '实打实大苏打',
        historyPrice: 232,
        nowPrice: 22,
        country: '中国',
        joinTime: '2020-01-02',
        auditStatus: 0,
        status: 0,
    }, {
        index: 23,
        productName: '实打实大苏打1',
        historyPrice: 232,
        nowPrice: 22,
        country: '中国',
        joinTime: '2020-01-02',
        auditStatus: 1,
        status: 0,
    }, {
        index: 231,
        productName: '实打实大苏打1',
        historyPrice: 232,
        nowPrice: 22,
        country: '中国',
        joinTime: '2020-01-02',
        auditStatus: 2,
        status: 1,
    }])

    const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([])
    const onSelectChange = (selectedRowKey: any) => {
        console.log('selectedRowKeys changed: ', selectedRowKey);
        setSelectedRowKeys(selectedRowKey);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const handleToggle = (record: dataSourceArray) => {

        let newArr = dataSource.map((item) => {
            if (item.index === record.index) {
                item.status = item.status === 0 ? 1 : 0;
            }
            return {
                ...item
            }
        })
        setDataSource(newArr)
    }
    const handleDelete = (index: any) => {
        let newArr = dataSource.splice(0, 1)
        setDataSource(newArr)
    }

    return (
        <div>
            <Table
                rowKey={(record) => `comTable${record.index}`}
                bordered={true}
                rowSelection={rowSelection}
                columns={columns}
                dataSource={dataSource} />
        </div>
    )
}

export default ComContentTable;