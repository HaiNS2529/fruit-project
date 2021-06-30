import { Table, Badge, Menu, Dropdown, Space, Tooltip, Button, Modal } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { EditOutlined, DeleteOutlined, EyeOutlined, CloudOutlined } from "@ant-design/icons";
import { useState } from "react";
import Detail from "./detail";
import Update from "./update";
import { Wrap } from './styled';
const Category = () => {
  const [isDetail, setIsDetail] = useState(false);
  const [dataDetail, setDataDetail] = useState();
  const [isUpdate, setIsUpdate] = useState();
  const [dataUpdate, setDataUpdate] = useState();
  const menu = (
    <Menu>
      <Menu.Item>Action 1</Menu.Item>
      <Menu.Item>Action 2</Menu.Item>
    </Menu>
  );

  const data = [
    {
      key:"1",
      id: "1",
      name: "Hoa quả sạch",
      images: "",
      parent_id: "0",
      status: "active",
    },
    {
      key:"2",
      id: "2",
      name: "Hoa quả Hưng Yên",
      images: "",
      parent_id: "1",
      status: "inactive",
    },
    {
      key:"3",
      id: "3",
      name: "Rau sạch",
      images: "",
      parent_id: "0",
      status: "inactive",
    },
    {
      key:"4",
      id: "4",
      name: "Rau sạch child",
      images: "",
      parent_id: "3",
      status: "active",
    },
  ];

  const columns = [
    { title: 'Mã', dataIndex: 'id', key: 'id' },
    { title: 'Tên danh mục', dataIndex: 'name', key: 'name' },
    { title: 'Hình ảnh', dataIndex: 'images', key: 'images' },
    { title: 'Trạng thái', dataIndex: 'status', key: 'status' },
    {
      title: 'Thao tác', key: 'operation', render: () =>
        <>
          <div style={{ marginLeft: "10px", display: "inline-block" }}>
            <Tooltip placement="top" title="Chi tiết">
              <EyeOutlined
                style={{ cursor: "pointer" }}
                onClick={() => { setIsDetail(true); setDataDetail() }}
              />
            </Tooltip>
          </div>
          <div style={{ marginLeft: "10px", display: "inline-block" }}>
            <Tooltip placement="top" title="Sửa">
              <EditOutlined
                style={{ cursor: "pointer" }}
                onClick={() => { setIsUpdate(true); setDataUpdate() }}
              />
            </Tooltip>
          </div>
          <div style={{ marginLeft: "10px", display: "inline-block" }}>
            <Tooltip placement="top" title="Xóa">
              <DeleteOutlined
                style={{ cursor: "pointer" }}
              />
            </Tooltip>
          </div>
        </>
    },
  ];

  const expandedRowRender = () => {
    const columns = [
      { title: 'Date', dataIndex: 'date', key: 'date' },
      { title: 'Name', dataIndex: 'name', key: 'name' },
      {
        title: 'Status',
        key: 'state',
        render: () => (
          <span>
            <Badge status="success" />
            Finished
          </span>
        ),
      },
      { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
      {
        title: 'Action',
        dataIndex: 'operation',
        key: 'operation',
        render: () => (
          <Space size="middle">
            <a>Pause</a>
            <a>Stop</a>
            <Dropdown overlay={menu}>
              <a>
                More <DownOutlined />
              </a>
            </Dropdown>
          </Space>
        ),
      },
    ];

    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i,
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56',
      });
    }
    return <Table columns={columns} dataSource={data} pagination={false} />;
  };

  return (
    <>
      <div className="right">
        <div className="right__content">
          <div className="right__title">Bảng điều khiển</div>
          <p className="right__desc">Xem sản phẩm</p>
          <div className="right__table">
            <Wrap>
              <Table
                className="components-table-demo-nested"
                columns={columns}
                expandable={{ expandedRowRender }}
                dataSource={data}
              />
            </Wrap>
          </div>
        </div>
      </div>
    </>

  )
}
export default Category;