import ProfileIcon from "../layout/assets/icon-profile.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { tablet } from "../styles/devices";

export default function PageHeader() {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);

  return (
    <HeaderWrapper>
      <DesktopButton onClick={() => navigate(-1)} />
      <MobileButton onClick={() => setMenu(!menu)} />
      <RightSide>
        <button>쿠팡이츠 점주님</button>
        <a href="https://eats.coupang.com/hc/ko">도움말</a>
      </RightSide>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  height: 70px;
  padding: 10px;
  border-bottom: 1px solid #cccccc;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

const DesktopButton = styled.button`
  display: block;
  width: 32px;
  height: 32px;
  border: 1px solid #dddddd;
  border-radius: 8px;
  background: #ffffff;
  cursor: pointer;

  @media screen and (max-width: ${tablet}) {
    display: none;
  }
`;

const MobileButton = styled.button`
  display: none;
  width: 32px;
  height: 32px;
  background: #168350;
  border-radius: 28px;
  border: none;
  cursor: pointer;

  @media screen and (max-width: ${tablet}) {
    display: block;
  }
`;

const RightSide = styled.div`
  display: flex;
  align-content: center;
  vertical-align: center;

  button {
    padding: 0 8px 0 50px;
    background: transparent url(${ProfileIcon}) left 2px bottom 0 / 40px
      no-repeat;
    font-size: 14px;
    font-weight: 500;
    color: #111111;
    vertical-align: top;
    line-height: 2.6;
    border: none;
    cursor: pointer;
  }

  a {
    width: 100px;
    height: 40px;
    margin-left: 20px;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #aaaaaa;
    background: #ffffff;
    text-decoration-line: none;
    font-size: 13px;
    color: #111111;
    text-align: center;
  }
`;
