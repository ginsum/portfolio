import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { handleSignIn } from "../../firebase/index";
import { UserContext } from "../../store/auth";
import { RouteComponentProps } from "react-router-dom";

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
    userInfo: [userInfo, setUserInfo]
  } = React.useContext(UserContext);

  const handlePushToHome = () => {
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
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default SignIn;
