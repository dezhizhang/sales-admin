/*
 * :file description:
 * :name: /sales-admin/src/pages/banner/index.tsx
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-09-30 15:41:17
 * :last editor: 张德志
 * :date last edited: 2022-09-30 15:46:36
 */
import React from 'react';
import { Table } from 'antd';
import styles from './index.less';

const Banner: React.FC = () => {
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.filter}>filter</div>
      <div className={styles.table}>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
};

export default Banner;
