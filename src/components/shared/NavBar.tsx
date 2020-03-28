import React from "react";
import WriteBtn from "../fragments/WriteBtn";
import styled from "styled-components";
import { Link, RouteComponentProps } from "react-router-dom";

const NavBarWrapper = styled.header`
  position: fixed;
  top: 0px;
  width: 100%;
  background-color: white;
  box-shadow: 0px 1px 6px 1px rgba(0, 0, 0, 0.07);
  z-index: 10;
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  max-width: ${p => p.theme.max_width};
  padding-left: ${props => props.theme.padding_content};
  padding-right: ${props => props.theme.padding_content};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 48px;
`;

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
      <NavBarWrapper>
        <ContentWrapper>
          <BrandName>
            <Link to="/">logo</Link>
          </BrandName>
          <WriteBtn name="글쓰기" submit={handlePushToWritePage} />
        </ContentWrapper>
      </NavBarWrapper>
    </>
  );
};
export default NavBar;
