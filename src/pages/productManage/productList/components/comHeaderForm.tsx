import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import {
    Form, DatePicker, Input, Button
} from 'antd';
import styles from './style/comHeaderForm.less';

const { RangePicker } = DatePicker;

const config = {
    rules: [{ type: 'object' as const, required: true, message: 'Please select time!' }],
};

interface ComHeaderFormProps {
    onFinish: (fieldsValue: any) => void
}

const ComHeaderForm = (props: ComHeaderFormProps) => {
    const { onFinish } = props;
    return (

        <Form name="time_related_controls" layout='inline' onFinish={onFinish}>
            <Form.Item name="product-name" label="产品名称"  >
                <Input placeholder="Basic usage" />
            </Form.Item>
            <Form.Item name="range-picker" label="添加时间"  >
                <RangePicker />
            </Form.Item>

            <Button type="primary" htmlType="submit">
                Submit
            </Button>

        </Form >


    )
}

export default ComHeaderForm;