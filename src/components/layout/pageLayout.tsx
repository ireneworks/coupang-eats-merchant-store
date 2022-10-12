import styled from "styled-components";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom"; // @ts-ignore
import ProfileIcon from "./assets/icon-profile.png";

interface Props {
  children: ReactNode;
}

export default function PageLayout({ children }: Props) {
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <BackIcon onClick={() => navigate(-1)} />
        <RightSide>
          <div>
            <img src={ProfileIcon} />
            <span>쿠팡이츠 점주님</span>
          </div>
          <div>
            <a>이거다</a>
          </div>
        </RightSide>
      </Header>
      {children}
      <Footer>
        <ShortCut>
          <span>쿠팡이츠 서비스 이용약관</span>
          <span>쿠팡이츠 부속약관</span>
          <span>쿠팡페이 전자금융거래약관</span>
          <span>쿠팡개인정보 처리방침</span>
          <span>쿠팡이츠 서비스요금 안내</span>
        </ShortCut>
        <FooterContent>
          <span> 상호명 및 호스팅 서비스 제공: 쿠팡(주)</span>
          <span>대표이사: 박대준</span>
          <span>주소: 서울시송파구 송파대로 570</span>
          <span>사업자 등록번호 : 120-88-00767</span>
          <span>사업자정보확인통신판매업신고 : 2017-서울송파-0680</span>
          <span>고객센터 : 1600-9827</span>
          <span>이메일 : eatspartners@coupang.com</span>
          <span>메뉴 정보 수정 : menu@coupang.com</span>
        </FooterContent>
      </Footer>
    </>
  );
}

const Header = styled.header`
  display: flex;
  width: 100%;
  height: 70px;
  padding: 10px;
  border-bottom: 1px solid #cccccc;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

const BackIcon = styled.div`
  width: 32px;
  height: 32px;
  border: 1px solid #888888;
  border-radius: 8px;
`;

const RightSide = styled.div`
  display: block;
  width: auto;
  float: right;

  div {
    img {
      width: 40px;
      height: 40px;
      margin-right: 6px;
    }

    span {
      vertical-align: top;
      line-height: 2.8;
    }
  }

  a {
    width: 100px;
    height: 40px;
    padding: 10px;
    border: 1px solid red;
  }
`;

const Footer = styled.footer`
  padding: 26px 17px;
  box-sizing: border-box;
  border-top: 1px solid #111111;
  font-size: 12px;
`;

const ShortCut = styled.div`
  display: flex;
  font-weight: 700;
  margin-bottom: 11px;
  color: #555555;
`;

const FooterContent = styled.div`
  color: #888888;
  font-weight: 300;
  line-height: 23px;
`;
