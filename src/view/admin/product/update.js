import { valueToNode } from "@babel/types";
import { useState } from "react";
import { Modal, Descriptions, Typography, Badge, Tooltip, Input, Image  } from "antd";
import 'antd/dist/antd.css';
import "./style.css";
import UpImages from "../../components/upImages";
const Update =(props) => {
    const {closeModal} = props;
    const [data,setData] = useState(props.data);
    const onChange = (e) =>{
        setData({
            ...data,
            [e.target.name]:e.target.value,
        })
    }
    const display = (label,name,value,span) =>{
        return(
            <Descriptions.Item
                label={<Typography.Text strong >{label}</Typography.Text>}
                span={span}
                labelStyle={{textAlign:"center"}}
                className={(label == "Hình ảnh") && "product_image_update"}
            >
                {(label == "Hình ảnh")? (
                <>
                    {/* <Image
                        width={100}
                        src={value}
                    /> */}
                    <UpImages
                    imageUrl={value}
                    />
                </>)
                : (
                    <>
                    <Input
                    value={value}
                    placeholder={label}
                    name={name}
                    onChange={(e) => onChange(e)}
                    >
                    </Input>
                    </>
                )
                }

                {(label == "Trạng thái") && (
                    <>
                    <div>
                        <Tooltip placement="top" title="Đã bán 12">
                       <Badge status="success" style={{ marginRight:"15px"}}/>
                       </Tooltip>
                       <Tooltip placement="top" title="Đặt hàng 10">
                       <Badge color="blue"  style={{ marginRight:"15px"}}/>
                       </Tooltip>
                       <Tooltip placement="top" title="Còn hàng 8">
                       <Badge status="error" style={{ marginRight:"15px"}}/>
                       </Tooltip>
                    </div>
                    </>
                )}
            </Descriptions.Item>
        )
    }
    return(
        <Modal
        visible={true}
        onCancel={closeModal}
        onOk={closeModal}
        className="product_detail"
        >
        <Descriptions
            title="Cập nhật sản phẩm"
            bordered={true}
            layout="vertical"
            column={{ xxl: 4, xl: 4, lg: 3, md: 3, sm: 2, xs: 1 }}
            style={{fontSize:"20px"}}
        >
            {display(
                "Hình ảnh",
                "images",
                data?.images,
            )}
            {display(
                "Mã SP",
                "id",
                data?.id,
            )}
            {display(
                "Tên",
                "name",
                data?.name,
            )}
            {display(
                "Đánh giá",
                "rank",
                data?.rank,
            )}
            {display(
                "Giá bán",
                "price",
                data?.price,
            )}
            {display(
                "Trạng thái",
                "status",
                data?.status,
            )}
            {display(
                "Xuất sứ",
                "origin",
                data?.origin,
            )}
            {display(
                "Danh mục",
                "category_id",
                data?.category_id,
            )}
            {display(
                "Bài viết",
                "aricle_id",
                data?.aricle_id,
                4,
            )}
            {display(
                "Nhà cung cấp",
                "vendor_id",
                data?.vendor_id,
            )}
            {display(
                "Dịch vụ",
                "sale_id",
                data?.sale_id,
            )}
            {display(
                "Ngày tạo",
                "dateCreate",
                data?.dateCreate,
            )}

        </Descriptions>
        </Modal>
    ) 
}
export default Update;