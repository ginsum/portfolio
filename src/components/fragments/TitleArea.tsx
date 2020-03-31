import React from "react";
import { Button, PageHeader, Dropdown, Menu } from "antd";
import { deletePostContentById } from "../../firebase/content";
import { EllipsisOutlined } from "@ant-design/icons";

interface Props {
  content: any;
  postId: string;
  handlePushToReset: any;
}

const TitleArea: React.FC<Props> = ({ content, postId, handlePushToReset }) => {
  const deletPost = () => {
    deletePostContentById(content.catagory, postId, handlePushToReset);
  };
  const menu = (
    <Menu>
      <Menu.Item>
        <Button type="link" onClick={deletPost}>
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
