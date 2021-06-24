import { valueToNode } from "@babel/types";
import { Modal, Descriptions, Typography, Badge, Tooltip, Image } from "antd";
import "./style.css"
const Detail =(props) => {
    const {data, closeModal} = props;
    const display = (label,value,span) =>{
        return(
            <Descriptions.Item
                label={<Typography.Text strong >{label}</Typography.Text>}
                span={span}
                labelStyle={{textAlign:"center"}}
                className={(label == "Hình ảnh") && "product_image"}
            >
                {(label == "Hình ảnh")? (
                <>
                    <Image
                        width={100}
                        src={value}
                    />
                </>)
                : value
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
            title="Chi tiết sản phẩm"
            bordered={true}
            layout="vertical"
            column={{ xxl: 4, xl: 4, lg: 3, md: 3, sm: 2, xs: 1 }}
            style={{fontSize:"20px"}}
        >
            {display(
                "Hình ảnh",
                data?.images,
            )}
            {display(
                "Mã SP",
                data?.id,
            )}
            {display(
                "Tên",
                data?.name,
            )}
            {display(
                "Đánh giá",
                data?.rank,
            )}
            {display(
                "Giá bán",
                data?.price,
            )}
            {display(
                "Trạng thái",
                data?.status,
            )}
            {display(
                "Xuất sứ",
                data?.origin,
            )}
            {display(
                "Danh mục",
                data?.category_id,
            )}
            {display(
                "Bài viết",
                data?.aricle_id,
                4,
            )}
            {display(
                "Nhà cung cấp",
                data?.vendor_id,
            )}
            {display(
                "Dịch vụ",
                data?.sale_id,
            )}
            {display(
                "Ngày tạo",
                data?.dateCreate,
            )}

        </Descriptions>
        </Modal>
    ) 
}
export default Detail;