import React from "react";
import { Form, Input, Button } from "antd";
import { handleSignUp } from "../../firebase/index";
import styled from "styled-components";

const SignWapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const SignContentWapper = styled.div`
  max-width: ${p => p.theme.max_width};
  padding: ${props => props.theme.padding_content};
  width: 100%;
`;

interface Props {}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 6 }
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 8 }
};

const SignUp: React.FC<Props> = ({}) => {
  const onFinish = (values: any) => {
    handleSignUp(values.email, values.password, values.userName);
    console.log("Success:");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo.errorFields);
  };

  return (
    <>
      <SignWapper>
        <SignContentWapper>
          <Form
            {...layout}
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your Email!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="UserName"
              name="userName"
              rules={[
                { required: true, message: "Please input your UserName!" }
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" }
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!"
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      "The two passwords that you entered do not match!"
                    );
                  }
                })
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </SignContentWapper>
      </SignWapper>
    </>
  );
};
export default SignUp;
