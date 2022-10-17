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
      <ToBackButton onClick={() => navigate(-1)} />
      <HamburgerMenu onClick={() => setMenu(!menu)} />
      <RightSide>
        <div>
          <img src={ProfileIcon} alt="프로필 아이콘" />
          <span>쿠팡이츠 점주님</span>
        </div>
        <FaqLink>
          <a href="https://eats.coupang.com/hc/ko">도움말</a>
        </FaqLink>
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

const ToBackButton = styled.button`
  display: block;
  width: 32px;
  height: 32px;
  border: 1px solid #dddddd;
  border-radius: 8px;
  background: #ffffff;

  @media screen and (max-width: ${tablet}) {
    display: none;
  }
`;

const HamburgerMenu = styled.button`
  display: none;
  width: 32px;
  height: 32px;
  background: #168350;
  border-radius: 28px;

  @media screen and (max-width: ${tablet}) {
    display: block;
  }
`;

const RightSide = styled.div`
  display: flex;
  align-content: center;
  vertical-align: center;

  div {
    img {
      width: 40px;
      height: 40px;
      margin-right: 6px;
    }

    span {
      color: #111111;
      vertical-align: top;
      line-height: 2.6;
    }
  }
`;

const FaqLink = styled.div`
  margin-left: 20px;

  a {
    display: inline-block;
    width: 100px;
    height: 40px;
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
