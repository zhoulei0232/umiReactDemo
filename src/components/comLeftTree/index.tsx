import React, { useState, useEffect } from 'react';
import { Tree, Card } from 'antd';

import styles from './style/index.less';



interface comLeftTreeProps {
    title: string;
    treeData?: treeRoot[];
}
interface treeRoot {
    title: string;
    key: string;
    icon: JSX.Element;
    children?: children[];
}
interface children {
    title: string;
    key: string;
    icon: JSX.Element;
    children?: children[];
}

const ComLeftTree: React.FC<comLeftTreeProps> = (props) => {
    const { treeData, title } = props;
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
            <Card title={title} className={styles.content} headStyle={{ backgroundColor: '#1890ff' }}   >
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