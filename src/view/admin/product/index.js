import { Table, Tooltip, Button, Modal } from "antd";
import 'antd/dist/antd.css';
import { EditOutlined, DeleteOutlined, EyeOutlined, CloudOutlined } from "@ant-design/icons";
import { useState } from "react";
import "./style.css";
import Detail from "./detail";
import Update from "./update";
const Product = () => {

    const [isDetail, setIsDetail] = useState(false);
    const [dataDetail,setDataDetail] = useState();
    const [isUpdate,setIsUpdate] = useState();
    const [dataUpdate,setDataUpdate]=useState();
    const data = [
        {
            id: 1,
            name: "Hoa Quả",
            origin: "Hà Nội",
            stock: 12,
            price: "3.000",
            rank:"5",
            images: "./../images/fruit_03.jpg",
            status: "còn hàng",
            category_id:"12",
            aricle_id:"12",
            vendor_id: "hoa quả sạch",
            sale_id:"12",
            dateCreate: "ngày tạo"
        },
        {
            id: 2,
            name: "Hoa Quả sạch",
            origin: "",
            stock: 12,
            price: "",
            rank:"5",
            images: "./../images/fruit_04.jpg",
            status: "còn hàng",
            category_id:"12",
            aricle_id:"12",
            vendor_id: "hoa quả sạch",
            sale_id:"12",
            dateCreate: "24/6/2021",
        },
    ];

    const columns = [
        {
            title:"Hình ảnh",
            dataIndex:"images",
            key:"images",
        },
        {
            title:"Mã SP",
            dataIndex:"id",
            key:"id",
        },
        {
            title:"Tên SP",
            dataIndex:"name",
            key:"name",
        },
        {
            title:"Đánh giá",
            dataIndex:"rank",
            key:"rank",
        },
    ]
    const renderBody = (item) => {
        return (
            <tr>
                <td data-label="STT">{item.id}</td>
                <td data-label="Tên sản phẩm">{item.name}</td>
                <td data-label="Hình ảnh">{item.images}</td>
                <td data-label="Giá SP">{item.price}</td>
                <td data-label="Xuất sứ">{item.origin}</td>
                <td data-label="Đã bán">{item.stock}  </td>
                <td data-label="Trạng thái">{item.status}</td>
                <td data-label="Ngày tạo" className="right__iconTable">{item.dateCreate}</td>
                <td data-label="Thao tác" className="right__iconTable">
                    {item.name}
                </td>
            </tr>
        )
    }
    return (
        <div className="right">
            <div className="right__content">
                <div className="right__title">Bảng điều khiển</div>
                <p className="right__desc">Xem sản phẩm</p>
                <div className="right__table">
                    <div className="right__tableWrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>Mã SP</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Hình ảnh</th>
                                    <th>Giá SP</th>
                                    <th>Xuất sứ</th>
                                    <th>Đã bán</th>
                                    <th>Trạng thái</th>
                                    <th>Ngày tạo</th>
                                    <th>Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label="STT">1</td>
                                    <td data-label="Tên sản phẩm">Dada Dress</td>
                                    <td data-label="Hình ảnh"><img src="images/product1.jpg" alt="" /></td>
                                    <td data-label="Giá SP">590.000 ₫</td>
                                    <td data-label="Đã bán">1</td>
                                    <td data-label="Từ khoá">dress, vay</td>
                                    <td data-label="Thời gian">2020-07-13 21:31:05</td>
                                    <td data-label="Sửa" className="right__iconTable"><a href><img src="./../assets/icon-edit.svg" alt="" /></a></td>
                                    <td data-label="Xoá" className="right__iconTable"><a href><img src="./../assets/icon-trash-black.svg" alt="" /></a></td>
                                </tr>
                                <tr>
                                    <td data-label="STT">2</td>
                                    <td data-label="Tên sản phẩm">Cobi Top, Tuta Skirt</td>
                                    <td data-label="Hình ảnh"><img src="images/product2.jpg" alt="" /></td>
                                    <td data-label="Giá SP">810.000 ₫</td>
                                    <td data-label="Đã bán">0</td>
                                    <td data-label="Từ khoá">top skirt</td>
                                    <td data-label="Thời gian">2020-07-13 22:19:01</td>
                                    <td data-label="Sửa" className="right__iconTable"><a href><img src="assets/icon-edit.svg" alt="" /></a></td>
                                    <td data-label="Xoá" className="right__iconTable"><a href><img src="assets/icon-trash-black.svg" alt="" /></a></td>
                                </tr>
                                <tr>
                                    <td data-label="STT">3</td>
                                    <td data-label="Tên sản phẩm">Beda Dress</td>
                                    <td data-label="Hình ảnh"><img src="images/product3.jpg" alt="" /></td>
                                    <td data-label="Giá SP">590.000 ₫</td>
                                    <td data-label="Đã bán">1</td>
                                    <td data-label="Từ khoá">dress, vay</td>
                                    <td data-label="Thời gian">2020-07-13 21:30:41</td>
                                    <td data-label="Sửa" className="right__iconTable"><a href><img src="assets/icon-edit.svg" alt="" /></a></td>
                                    <td data-label="Xoá" className="right__iconTable"><a href><img src="assets/icon-trash-black.svg" alt="" /></a></td>
                                </tr>

                                {data?.map((item, key) => {
                                    return (
                                        <tr key={key}>
                                            <td data-label="STT">{item.id}</td>
                                            <td data-label="Tên sản phẩm">{item.name}</td>
                                            <td data-label="Hình ảnh">
                                                <img src={item.images} style={{width:"100px"}}></img>
                                            </td>
                                            <td data-label="Giá SP">{item.price}</td>
                                            <td data-label="Xuất sứ">{item.origin}</td>
                                            <td data-label="Đã bán">{item.stock}  </td>
                                            <td data-label="Trạng thái">{item.status}</td>
                                            <td data-label="Ngày tạo" className="right__iconTable">{item.dateCreate}</td>
                                            <td data-label="Thao tác" className="right__iconTable">
                                                <div style={{ marginLeft: "10px", display: "inline-block" }}>
                                                    <Tooltip placement="top" title="Chi tiết">
                                                        <EyeOutlined
                                                            style={{ cursor: "pointer" }}
                                                            onClick={() => {setIsDetail(true); setDataDetail(item)}}
                                                        />
                                                    </Tooltip>
                                                </div>
                                                <div style={{ marginLeft: "10px", display: "inline-block" }}>
                                                    <Tooltip placement="top" title="Sửa">
                                                        <EditOutlined
                                                            style={{ cursor: "pointer" }}
                                                            onClick={() => {setIsUpdate(true); setDataUpdate(item)}}
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
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>                     
                    {isDetail && (
                        <Detail
                            data={dataDetail}
                            closeModal={() => setIsDetail(false)}
                        />
                    )}
                    {isUpdate && (
                        <Update
                        data={dataUpdate}
                        closeModal={() => setIsUpdate(false)}
                        />
                    )}
                    </div>
                </div>
            </div>
        </div>
    
    )
}
export default Product;