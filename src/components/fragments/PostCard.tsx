import React from "react";
import { Card, Avatar } from "antd";
import { Content } from "../shared/interface";
import { Link } from "react-router-dom";
import styled from "styled-components";

const { Meta } = Card;

const CardWapper = styled.div`
  width: 340px;
  margin: 5px;
`;

interface Props {
  content: Content[];
  id: string;
}

const PostCard: React.FC<Props> = ({ content, id }) => {
  const desc = () => {
    const descSlice: string = content[0].content.substring(0, 256);
    return <div dangerouslySetInnerHTML={{ __html: descSlice }}></div>;
  };
  return (
    <>
      <CardWapper>
        <Link to={`/${content[0].section}/${id}`}>
          <Card hoverable>
            <Meta
              avatar={<Avatar src="https://ginsum.github.io/images/logo.png" />}
              title={content[0].title}
              description={desc()}
            />
          </Card>
        </Link>
      </CardWapper>
    </>
  );
};
export default PostCard;
