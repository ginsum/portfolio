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
  const desc = () => {
    const descSlice: string = content[0].content.substring(0, 26);
    return <div dangerouslySetInnerHTML={{ __html: descSlice }}></div>;
  };
  return (
    <>
      <Link to={`/${id}`}>
        <Card hoverable style={{ width: 340, margin: 5 }}>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={content[0].title}
            description={desc()}
          />
        </Card>
      </Link>
    </>
  );
};
export default PostCard;
