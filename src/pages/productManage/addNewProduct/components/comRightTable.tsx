import React, { useState, useEffect, useCallback } from 'react';
import { Table, Card, Row, Col, Form, Input, Button, Switch, Upload, Modal } from 'antd';
import { DeleteOutlined, EditOutlined, CheckOutlined, PlusOutlined } from '@ant-design/icons';
import { right } from '@antv/x6/lib/registry/port-layout/line';
import styles from '../index.less';

interface comRightTableProps {
    title: string;
}


const { TextArea } = Input;
const uploadButton = (
    <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
    </div>
);

const reLabelNameFn = (name: string) => {
    return <span  >{name}</span>
}
const ComRightTable: React.FC<comRightTableProps> = (props) => {
    const { title } = props;
    const [form] = Form.useForm();
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState<any[]>([
        {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            uid: '-2',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            uid: '-3',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            uid: '-4',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            uid: '-xxx',
            percent: 50,
            name: 'image.png',
            status: 'uploading',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            uid: '-5',
            name: 'image.png',
            status: 'error',
        },
    ])
    const handlePreview = () => {

    };
    const handleCancel = () => setPreviewVisible(false);
    const handleChange = () => { };
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
    return (
        <div style={{ marginTop: '1px', marginLeft: '-1px' }}>
            <Card title={title} bordered={false} headStyle={{ backgroundColor: '#1890ff' }} bodyStyle={{ paddingRight: 0, paddingLeft: 0 }}   >
                <Form
                    layout='horizontal'
                    onFinish={onFinish}
                    form={form}
                    className={styles.form_box}
                >
                    <Form.Item
                        label={reLabelNameFn('图片标题')}
                        name="imageTitle"
                        rules={[{ required: true, message: '请输入图片名称!' }]}
                    >
                        <Input placeholder="请输入图片名称" />
                    </Form.Item>
                    <Form.Item
                        label={reLabelNameFn('简略标题')}
                        name="easyTitle"
                    >
                        <Input placeholder="请输入标题" />
                    </Form.Item>

                    <Row  >
                        <Col span={6}>
                            <Form.Item
                                label={reLabelNameFn('产品编号')}
                                name="produceNumber"
                            >
                                <Input placeholder="请输入" />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                label={reLabelNameFn('产 地')}
                                name="produceAdress"
                            >
                                <Input placeholder="请输入" />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item label={reLabelNameFn('材 质')}
                                name="material"  >
                                <Input placeholder="请输入" />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item label={reLabelNameFn('品 牌')}
                                name="brand"
                            >
                                <Input placeholder="请输入" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row  >
                        <Col span={6}>
                            <Form.Item label={reLabelNameFn('产品重量')}     >
                                <Input placeholder="请输入" />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item label={reLabelNameFn('单 位')}      >
                                <Input placeholder="请输入" />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item label={reLabelNameFn('展示价格')}    >
                                <Input placeholder="请输入" />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item label={reLabelNameFn('市场价格')}      >
                                <Input placeholder="请输入" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item label={reLabelNameFn('关键词')}    >
                        <Input placeholder="请输入标题" />
                    </Form.Item>
                    <Form.Item label={reLabelNameFn('内容概要')}    >
                        <TextArea rows={4} />
                    </Form.Item>
                    <Form.Item label={reLabelNameFn('图片上传')}    >
                        <Upload
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            listType="picture-card"
                            fileList={fileList}
                            onPreview={handlePreview}
                            onChange={handleChange}
                        >
                            {fileList.length >= 8 ? null : uploadButton}
                        </Upload>

                    </Form.Item>
                    <Form.Item label={reLabelNameFn('详细内容')}    >
                        <TextArea rows={6} />
                    </Form.Item>
                    <Form.Item label={reLabelNameFn('是否允许评论')}    >
                        <Switch defaultChecked />
                    </Form.Item>
                    <Form.Item label={reLabelNameFn('')} colon={false}>
                        <Button type="primary" htmlType="submit"  >
                            保存并提交审核
                        </Button>
                        <Button type="primary" style={{ marginLeft: '16px' }}  >
                            保存草稿
                        </Button>
                        <Button type="primary" style={{ marginLeft: '16px' }} >
                            取消
                        </Button>
                    </Form.Item>
                </Form>
                <Modal
                    visible={previewVisible}
                    title={previewTitle}
                    footer={null}
                    onCancel={handleCancel}
                >
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </Card>
        </div>
    )
}

export default ComRightTable;