import React from "react";
import { Button, PageHeader, Dropdown, Menu } from "antd";
import { deletePostContentById } from "../../firebase/content";
import { EllipsisOutlined } from "@ant-design/icons";
import { UserContext } from "../../store/auth";
import { UserInfo } from "../shared/interface";

interface Props {
  content: any;
  postId: string;
  handlePushToReset: any;
  handlePushToSignin: any;
  handlePushToEdit: any;
}

const TitleArea: React.FC<Props> = ({
  content,
  postId,
  handlePushToReset,
  handlePushToSignin,
  handlePushToEdit
}) => {
  const {
    userInfo: [userInfo, setUserInfo]
  } = React.useContext(UserContext);
  const deletPost = () => {
    if (userInfo) {
      deletePostContentById(content.section, postId, handlePushToReset);
    } else {
      alert("로그인이 필요합니다.");
      // handlePushToSignin();
    }
  };
  const menu = (
    <Menu>
      <Menu.Item>
        <Button
          type="link"
          onClick={() => handlePushToEdit(content.section, postId)}
        >
          edit
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button type="link" onClick={deletPost}>
          delete
        </Button>
      </Menu.Item>
    </Menu>
  );
  const DropdownMenu = () => {
    return (
      <Dropdown key="more" overlay={menu}>
        <Button
          style={{
            border: "none",
            padding: 0
          }}
        >
          <EllipsisOutlined
            style={{
              fontSize: 20,
              verticalAlign: "top"
            }}
          />
        </Button>
      </Dropdown>
    );
  };
  return (
    <>
      {content ? (
        <PageHeader
          title={content.title}
          subTitle={content.date}
          backIcon={false}
          style={{ borderBottom: "1px solid #eee" }}
          extra={[<DropdownMenu key="more" />]}
        />
      ) : null}
    </>
  );
};
export default TitleArea;
