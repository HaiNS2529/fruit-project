import { Table, Badge, Menu, Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
const Category =() =>{
    const expandedRowRender = () => {

        const menu = (
            <Menu>
              <Menu.Item>Action 1</Menu.Item>
              <Menu.Item>Action 2</Menu.Item>
            </Menu>
          );
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
    
      const columns = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Platform', dataIndex: 'platform', key: 'platform' },
        { title: 'Version', dataIndex: 'version', key: 'version' },
        { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
        { title: 'Creator', dataIndex: 'creator', key: 'creator' },
        { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
        { title: 'Action', key: 'operation', render: () => <a>Publish</a> },
      ];
    
      const data = [];
      for (let i = 0; i < 3; ++i) {
        data.push({
          key: i,
          name: 'Screem',
          platform: 'iOS',
          version: '10.3.4.5654',
          upgradeNum: 500,
          creator: 'Jack',
          createdAt: '2014-12-24 23:12:00',
        });
      }
    

    // const menu = (
    //     <Menu>
    //       <Menu.Item>Action 1</Menu.Item>
    //       <Menu.Item>Action 2</Menu.Item>
    //     </Menu>
    //   );

    // const data =[
    //     {
    //         id:"1",
    //         name:"Hoa quả sạch",
    //         images:"",
    //         parent_id:"0",
    //         status:"active",
    //     },
    //     {
    //         id:"2",
    //         name:"Hoa quả Hưng Yên",
    //         images:"",
    //         parent_id:"1",
    //         status:"active",
    //     },
    //     {
    //         id:"3",
    //         name:"Rau sạch",
    //         images:"",
    //         parent_id:"0",
    //         status:"active",
    //     },
    //     {
    //         id:"4",
    //         name:"Rau sạch child",
    //         images:"",
    //         parent_id:"3",
    //         status:"active",
    //     },
    // ];

    // const columns = [
    //     { title: 'Name', dataIndex: 'name', key: 'name' },
    //     { title: 'Platform', dataIndex: 'platform', key: 'platform' },
    //     { title: 'Version', dataIndex: 'version', key: 'version' },
    //     { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
    //     { title: 'Creator', dataIndex: 'creator', key: 'creator' },
    //     { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
    //     { title: 'Action', key: 'operation', render: () => <a>Publish</a> },
    // ];

    // const expandedRowRender = () => {
    //     const columns = [
    //       { title: 'Date', dataIndex: 'date', key: 'date' },
    //       { title: 'Name', dataIndex: 'name', key: 'name' },
    //       {
    //         title: 'Status',
    //         key: 'state',
    //         render: () => (
    //           <span>
    //             <Badge status="success" />
    //             Finished
    //           </span>
    //         ),
    //       },
    //       { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
    //       {
    //         title: 'Action',
    //         dataIndex: 'operation',
    //         key: 'operation',
    //         render: () => (
    //           <Space size="middle">
    //             <a>Pause</a>
    //             <a>Stop</a>
    //             <Dropdown overlay={menu}>
    //               <a>
    //                 More <DownOutlined />
    //               </a>
    //             </Dropdown>
    //           </Space>
    //         ),
    //       },
    //     ];
    
    //     const data = [];
    //     for (let i = 0; i < 3; ++i) {
    //       data.push({
    //         key: i,
    //         date: '2014-12-24 23:12:00',
    //         name: 'This is production name',
    //         upgradeNum: 'Upgraded: 56',
    //       });
    //     }
    //     return <Table columns={columns} dataSource={data} pagination={false} />;
    //   };
    return(
        <>
        {/* <div className="right">
        <div className="right__content">
            <div className="right__title">Bảng điều khiển</div>
            <p className="right__desc">Xem sản phẩm</p>
            <div className="right__table"> */}
        <Table
      className="components-table-demo-nested"
      columns={columns}
      expandable={{ expandedRowRender }}
      dataSource={data}
    />
    {/* </div>
    </div>
    </div> */}
    </>

    )
}
export default Category;