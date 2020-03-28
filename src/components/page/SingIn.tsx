import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { handleSignIn } from "../../firebase/index";
import { PostContext } from "../../store/writePost";
import { UserContext } from "../../store/auth";
import { RouteComponentProps } from "react-router-dom";
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

interface Props extends RouteComponentProps<any> {}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 6 }
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 8 }
};

const SignIn: React.FC<Props> = ({ history }) => {
  const {
    hiddenBtn: [hiddenBtn, setHiddenBtn]
  } = React.useContext(PostContext);
  const {
    userInfo: [userInfo, setUserInfo]
  } = React.useContext(UserContext);

  const handlePushToHome = () => {
    setHiddenBtn(true);
    history.push(`/`);
  };

  const onFinish = async (values: any) => {
    handleSignIn(values.email, values.password, setUserInfo, handlePushToHome);
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
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" }
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Sing in
              </Button>
            </Form.Item>
          </Form>
        </SignContentWapper>
      </SignWapper>
    </>
  );
};
export default SignIn;
