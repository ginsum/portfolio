import React from "react";
import { Card, Avatar } from "antd";
import { Content } from "../shared/interface";
import { Link } from "react-router-dom";

const { Meta } = Card;

interface Props {
  content: Content[];
  id: string;
}

const PostCard: React.FC<Props> = ({ content, id }) => {
  return (
    <>
      <Link to={`/${id}`}>
        <Card hoverable style={{ width: 300 }}>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={content[0].title}
            description={content[0].content}
          />
        </Card>
      </Link>
    </>
  );
};
export default PostCard;
