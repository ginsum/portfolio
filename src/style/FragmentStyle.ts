import styled from "styled-components";

export const BtnWrapper = styled.div<{
  _bgColor: string;
  _hoverBgColor: string;
}>`
  width: 76px;
  max-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: ${p => p._bgColor};
  white-space: nowrap;
  padding: 0.4em 0.6em;
  margin-left: 5px;
  border-radius: ${p => p.theme.border_radius_base};
  cursor: pointer;
  &:hover {
    background-color: ${p => p._hoverBgColor};
  }
  transition: background-color 0.2s linear;
`;

export const TitleInputWrapper = styled.input`
  width: 100%;
  font-size: 30px;
  border: none;
  transition: 0.5s;
  outline: none;
  padding: 20px 10px;
  ::placeholder {
    color: rgb(228, 228, 228);
  }
`;
