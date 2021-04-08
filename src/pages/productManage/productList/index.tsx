import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
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
import styles from './index.less';
import ComHeaderForm from './components/comHeaderForm';
import ComContentTable from './components/comContentTable';
import ComLeftTree from './components/comLeftTree'

const ProductList: React.FC = () => {
    const onFinish = (fieldsValue: any) => {
        // Should format date value before submit.
        console.log(fieldsValue);

        const rangeValue = fieldsValue['range-picker'];
        const startTime = rangeValue ? dayjs(rangeValue[0]).format('YYYY-MM-DD') : '';
        const endTime = rangeValue ? dayjs(rangeValue[1]).format('YYYY-MM-DD') : '';

        console.log('Received values of form: ', startTime, endTime);
    };
    return (
        <div>
            <Row className={styles.content}>
                <ComHeaderForm
                    onFinish={onFinish}
                ></ComHeaderForm>
            </Row>
            <Row className={styles.content} >
                <Col span={24}>
                    <Card  >
                        <Button className={styles.btn1}>添加商品</Button>
                        <Button className={styles.btn2}>批量删除</Button>
                    </Card>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={4}>
                    <ComLeftTree>

                    </ComLeftTree>
                </Col>
                <Col span={20}>
                    <ComContentTable>

                    </ComContentTable>
                </Col>
            </Row>
        </div>
    )
}

export default ProductList;