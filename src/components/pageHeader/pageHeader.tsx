// @ts-ignore
import ProfileIcon from "../layout/assets/icon-profile.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function PageHeader() {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <ToBackButton onClick={() => navigate(-1)} />
      <HamburgerMenu />
      <RightSide>
        <div>
          <img src={ProfileIcon} />
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

const ToBackButton = styled.div`
  display: none;
  width: 32px;
  height: 32px;
  border: 1px solid #888888;
  border-radius: 8px;

  @media screen and (min-width: 767px) {
    display: block;
  }
`;

const HamburgerMenu = styled.div`
  display: block;
  width: 32px;
  height: 32px;
  background: #168350;
  border-radius: 28px;

  @media screen and (min-width: 767px) {
    display: none;
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
  a {
    display: inline-block;
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
