import React from "react";
import { Button, Form } from "antd";
import { Input } from "antd";
import axios from "axios";
import { message } from "antd";
const login = async(values) => {
    const res = await axios.post('http://localhost:3001/user/login',{
      email:values.email,
      code:values.code
    })
    if(res.data === 'success'){
      message.success('登录成功')
    }else{
      message.error('登录失败')
    }
};
const App = () => {
  const [form] = Form.useForm();
  const sendEmailCode = async()=>{
    const {email} = form.getFieldsValue();
    if(!email){
      message.error("请输入邮箱地址");
      return;
    }
    const res = await axios.get('http://localhost:3001/email/code',{params:{address:email}})
    message.info(res.data)
  }
  return (
      <div style={{ width: "500px", margin: "100px auto" }}>
          <Form onFinish={login} form={form}>
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
}
export default App;
