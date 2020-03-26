import styled from "styled-components";

export const BtnWrapper = styled.div<{
  _bgColor: string;
  _hoverBgColor: string;
}>`
  max-width: 130px;
  height: 100%;
  display: flex;
  align-items: center;
  color: white;
  background-color: ${p => p._bgColor};
  white-space: nowrap;
  padding: 0.4em 0.6em;
  border-radius: ${p => p.theme.border_radius_base};
  cursor: pointer;
  &:hover {
    background-color: ${p => p._hoverBgColor};
  }
  transition: background-color 0.2s linear;
`;

export const TitleInputWrapper = styled.input`
  width: 70%;
  height: 80px;
  font-size: 36px;
  border: none;
  transition: 0.5s;
  outline: none;
  margin: 40px;
  background-color: rgb(49, 49, 49, 0);
  padding-left: 40px;
  padding-bottom: 10px;
`;
