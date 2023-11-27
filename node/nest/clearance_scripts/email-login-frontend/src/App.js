import React from "react";
import { Button, Form } from "antd";
import { Input } from "antd";
import axios from "axios";
const login = (values) => {
    console.log("success", values);
};
const sendEmailCode = async () => {
  const res = await axios.get('http://localhost:3001')
  console.log(res);
    console.log("sendEmailCode");
};
const App = () => (
    <div style={{ width: "500px", margin: "100px auto" }}>
        <Form onFinish={login}>
            <Form.Item label="邮箱" name="email" rules={[{ required: true, message: "请输入邮箱地址" }]}>
                <Input />
            </Form.Item>
            <Form.Item label="验证码" name="code" rules={[{ required: true, message: "请输入验证码" }]}>
                <Input />
            </Form.Item>
            <Form.Item>
                <Button onClick={sendEmailCode}>发送验证码</Button>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    登录
                </Button>
            </Form.Item>
        </Form>
    </div>
);
export default App;
