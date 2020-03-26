import React from "react";
import WriteBtn from "../fragments/WriteBtn";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BrandName = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 15px;
  font-weight: 700;
  color: ${p => p.theme.title_gray};
`;

const LinkToPage = styled(Link)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 15px;
`;

interface Props {}

const NavBar: React.FC<Props> = ({}) => {
  return (
    <>
      <BrandName>logo</BrandName>
      <LinkToPage to="/writepost">
        <WriteBtn name="글쓰기" />
      </LinkToPage>
    </>
  );
};
export default NavBar;
