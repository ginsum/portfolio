import React from "react";
import WriteBtn from "../fragments/WriteBtn";
import styled from "styled-components";
import { Link, RouteComponentProps } from "react-router-dom";

const BrandName = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 15px;
  font-weight: 700;
  color: ${p => p.theme.title_gray};
`;

interface Props extends RouteComponentProps<any> {}

const NavBar: React.FC<Props> = ({ history }) => {
  const handlePushToWritePage = () => {
    history.push("/writepost");
  };
  return (
    <>
      <BrandName>logo</BrandName>

      <WriteBtn name="글쓰기" submit={handlePushToWritePage} />
    </>
  );
};
export default NavBar;
