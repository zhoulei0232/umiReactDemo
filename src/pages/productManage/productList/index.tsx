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
} from 'antd';
import ComHeaderForm from './components/comHeaderForm';
import ComContentTable from './components/comContentTable';

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
            <Row>
                <ComHeaderForm
                    onFinish={onFinish}
                ></ComHeaderForm>
            </Row>
            <Row>
                <Button>添加商品</Button>
                <Button>批量删除</Button>
            </Row>
            <Row>
                <Col span={4}>1</Col>
                <Col span={20}>
                    <ComContentTable>

                    </ComContentTable>
                </Col>
            </Row>
        </div>
    )
}

export default ProductList;