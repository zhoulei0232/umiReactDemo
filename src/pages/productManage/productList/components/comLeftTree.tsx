import React, { useState, useEffect } from 'react';
import { Tree, Card } from 'antd';
import { CarryOutOutlined } from '@ant-design/icons';
import styles from './style/comLeftTree.less';

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
const ComLeftTree: React.FC = () => {
    const [showLine, setShowLine] = useState<boolean | { showLeafIcon: boolean }>(true);

    const [showLeafIcon, setShowLeafIcon] = useState<boolean>(true);
    const onSelect = (keys: React.Key[], info: any) => {
        console.log('Trigger Select', keys, info);
    };

    const onExpand = () => {
        console.log('Trigger Expand');
    };
    return (
        <div>
            <Card title="Card title" className={styles.content} headStyle={{ backgroundColor: '#1890ff' }}   >
                <Tree
                    showLine={showLine}
                    defaultExpandedKeys={['0-0']}
                    onSelect={onSelect}
                    treeData={treeData}
                />
            </Card>
            <div className={styles.space}>

            </div>
        </div>


    )
}

export default ComLeftTree