import React from "react";
import { Card } from "antd";
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

const ProjectCard: React.FC<Props> = ({ content, id }) => {
  const desc = () => {
    const descSlice: string = content[0].content.substring(0, 26);
    return <div dangerouslySetInnerHTML={{ __html: descSlice }}></div>;
  };
  return (
    <>
      <CardWapper>
        <Link to={`/${content[0].catagory}/${id}`}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Meta title={content[0].title} description={desc()} />
          </Card>
        </Link>
      </CardWapper>
    </>
  );
};
export default ProjectCard;
