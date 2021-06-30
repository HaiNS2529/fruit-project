import "@assets/css/main.css";
import "@assets/css/main.css.map"
import React from 'react';
import { Pie, Line } from 'react-chartjs-2';
import { Button, DatePicker, Space } from "antd";
import { useState, useEffect } from "react";
import Header from "../../components/header";
const Dashboard = () => {

  const [typeChart,setTypeChart] = useState(0);
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const cardData = [
    {
      name:"Sản phẩm",
      number:72,
      href:"/admin/product"
    },
    {
      name:"Khách hàng",
      number:12,
      href:"/admin/customer"
    },
    {
      name:"Danh mục",
      number:4,
      href:"/admin/category"
    },
    {
      name:"Đơn hàng",
      number:72,
      href:"/admin/order"
    },
  ];

  const getCard = (cardItem,key) =>{
      return(
        <>
        <a className="right__card" href="view_product.html" key={key}>
          <div className="right__cardTitle">{cardItem.name}</div>
          <div className="right__cardNumber">{cardItem.number}</div>
          <div className="right__cardDesc">Xem Chi Tiết <img src="./../assets/arrow-right.svg" alt="" /></div>
        </a>
        </>
      )
  }
  const { RangePicker } = DatePicker;
  return (
    <div className="right">
      <div className="right__content">
        <Header></Header>
        <div style={{background:"white", padding:"20px", borderRadius:"5px"}}>
        <p className="right__desc" style={{background:"white"}}>Bảng điều khiển</p>
        <div className="right__cards">
          {cardData?.map( (item,key) => getCard(item,key))}
        </div>
        </div>
        
        <br></br>
        <div style={{background:"white", padding:"20px", borderRadius:"5px"}}>
        <p className="right__desc" style={{background:"white"}}>Biểu đồ</p>
        <div className="chart" style={{display:"flex"}}>
          <div className="chart-pie" style={{width:"50%"}}>
            <div>Danh mục sản phẩm</div>
            <div>
              <Space direction="vertical" size={12}>
                <RangePicker />
              </Space>
            </div>
            <div>
              <Button
              onClick={() =>setTypeChart(0)}
              >
                Tỉ trọng
              </Button>
              <Button
              onClick={()=>setTypeChart(1)}
              >
                Số Lượng
              </Button>
            </div>
            { (typeChart==0)? <Pie data={data} /> : <Line data={data}/>}
          </div>
          <div className="chart-line" style={{width:"50%"}}>
            <div>Doanh số</div>
            <div>
              <Space direction="vertical" size={12}>
                <RangePicker />
              </Space>
            </div>
            <br></br>
            <Line data={data}/>
          </div>
        </div>
        </div>

        <br></br>
        <div style={{background:"white", padding:"20px", borderRadius:"5px"}}>
        <div className="right__table">
          <p className="right__tableTitle">Đơn hàng mới</p>
          <div className="right__tableWrapper">
            <table>
              <thead>
                <tr>
                  <th>STT</th>
                  <th style={{ textAlign: 'left' }}>Email</th>
                  <th>Số Hoá Đơn</th>
                  <th>ID Sản Phẩm</th>
                  <th>Số Lượng</th>
                  <th>Kích thước</th>
                  <th>Trạng Thái</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="STT">1</td>
                  <td data-label="Email" style={{ textAlign: 'left' }}>chibaosinger@gmail.com</td>
                  <td data-label="Số Hoá Đơn">6577544</td>
                  <td data-label="ID Sản Phẩm">2</td>
                  <td data-label="Số Lượng">1</td>
                  <td data-label="Kích thước">Trung Bình</td>
                  <td data-label="Trạng Thái">
                    Đã Thanh Toán
                  </td>
                </tr>
                <tr>
                  <td data-label="STT">2</td>
                  <td data-label="Email" style={{ textAlign: 'left' }}>midu@gmail.com</td>
                  <td data-label="Số Hoá Đơn">4578644</td>
                  <td data-label="ID Sản Phẩm">4</td>
                  <td data-label="Số Lượng">2</td>
                  <td data-label="Kích thước">Nhỏ</td>
                  <td data-label="Trạng Thái">
                    Đang Xử Lý
                  </td>
                </tr>
                <tr>
                  <td data-label="STT">3</td>
                  <td data-label="Email" style={{ textAlign: 'left' }}>miku@gmail.com</td>
                  <td data-label="Số Hoá Đơn">2657544</td>
                  <td data-label="ID Sản Phẩm">3</td>
                  <td data-label="Số Lượng">5</td>
                  <td data-label="Kích thước">Lớn</td>
                  <td data-label="Trạng Thái">
                    Đang Xử Lý
                  </td>
                </tr>
                <tr>
                  <td data-label="STT">4</td>
                  <td data-label="Email" style={{ textAlign: 'left' }}>dangthimydung@gmail.com</td>
                  <td data-label="Số Hoá Đơn">9659544</td>
                  <td data-label="ID Sản Phẩm">8</td>
                  <td data-label="Số Lượng">12</td>
                  <td data-label="Kích thước">Trung Bình</td>
                  <td data-label="Trạng Thái">
                    Đang Xử Lý
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <a href className="right__tableMore"><p>Xem tất cả các đơn đặt hàng</p> <img src="./../assets/arrow-right-black.svg" alt="" /></a>
        </div>
        </div>
      </div>
    </div>

  )
}
export default Dashboard;