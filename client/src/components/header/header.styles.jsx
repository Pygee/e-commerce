import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  margin-left: 60px;
  @media screen and (max-width: 800px) {
    margin-left: 0px;
    padding: 25px 0px 0px 0px;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 73px;
  margin-top: 25px;
  @media screen and (max-width: 800px) {
    margin-right: 25px;
    width: 0%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  white-space: nowrap;
`;
