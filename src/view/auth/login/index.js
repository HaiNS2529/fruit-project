import { Form, Input, Button } from "antd";
import 'antd/dist/antd.css';
import "./style.css"
const Login = () => {
    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 16,
        },
      };
    return (
        <> 
        <div className="background-login">
        <div className="form_login">
            <Form  {...layout} onFinish={(value) => console.log(value)}>
                <h1>Đăng nhập</h1>
                <Form.Item
                    label="Tài khoản"
                    name="username"
                    rules={[
                        {
                            required:true,
                            message:"Tài khoản không được bỏ trống"
                        }
                    ]}
                >
                    <Input
                    placeholder="Nhập số điện thoại"
                    ></Input>
                </Form.Item>
                <Form.Item
                    label="Mật khẩu"
                    name="password"
                    rules={[
                        {
                            required:true,
                            message:"Mật khẩu không được bỏ trống"
                        }
                    ]}
                >
                    <Input
                    placeholder="Nhập mật khẩu"
                    ></Input>
                </Form.Item>
                <Form.Item>
                    <Button 
                    className="btn-login"
                    type="primary" 
                    htmlType="submit"
                    >
                    Đăng nhập
                    </Button>
                </Form.Item>
            </Form>
        
        </div>
        </div>
        </>
    )
}
export default Login;