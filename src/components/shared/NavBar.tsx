import React from "react";
import WriteBtn from "../fragments/WriteBtn";
import styled from "styled-components";
import { PostContext } from "../../store/writePost";
import { UserContext } from "../../store/auth";
import { Link, RouteComponentProps } from "react-router-dom";
import { handleSignOut } from "../../firebase/auth";

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
  height: 50px;
`;

const BrandName = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 15px;
  font-weight: 700;
  color: ${p => p.theme.title_gray};
`;

const NavBtnWrapper = styled.div`
  display: flex;
`;

interface Props extends RouteComponentProps<any> {}

const NavBar: React.FC<Props> = ({ history, match }) => {
  const {
    hiddenBtn: [hiddenBtn, setHiddenBtn]
  } = React.useContext(PostContext);

  const {
    userInfo: [userInfo, setUserInfo]
  } = React.useContext(UserContext);

  const handlePushToPage = (path: string) => {
    history.push(`${path}`);
  };

  const handleWriteBtn = () => {
    setHiddenBtn(true);
  };

  const handleClickSignOut = () => {
    handleSignOut(setUserInfo, handlePushToPage);
  };

  return (
    <>
      <NavBarWrapper>
        <ContentWrapper>
          <BrandName onClick={handleWriteBtn}>
            <Link to="/">logo</Link>
          </BrandName>
          {hiddenBtn && (
            <NavBtnWrapper>
              <WriteBtn name="글쓰기" submit={handlePushToPage} />
              {userInfo ? (
                <WriteBtn name="로그아웃" submit={handleClickSignOut} />
              ) : (
                <WriteBtn name="로그인" submit={handlePushToPage} />
              )}
            </NavBtnWrapper>
          )}
        </ContentWrapper>
      </NavBarWrapper>
    </>
  );
};
export default NavBar;
