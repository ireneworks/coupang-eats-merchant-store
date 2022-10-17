import styled from "styled-components";
import MenuList from "./components/menuList";
import QuickMenuList from "./components/quickMenuList";
import Logo from "./assets/logo.png";
import NoticeIcon from "./assets/icon-notice-off@2x.png";
import PromotionOffIcon from "./assets/icon_promotion_off.png";
import PromotionOnIcon from "./assets/icon_promotion_on.png";
import ComputerIcon from "./assets/icon-computer.png";
import { tablet } from "../styles/devices";

export default function Navigation() {
  return (
    <Wrapper>
      <LogoWrapper>
        <a href="/">
          <img src={Logo} alt="쿠팡이츠 포탈" />
        </a>
      </LogoWrapper>
      <div>
        <MenuWrapper>
          <MenuList
            disabledIconUrl={NoticeIcon}
            hrefLink="#"
            menuTitle="공지사항"
            isNew={false}
          />
          <MenuList
            disabledIconUrl={NoticeIcon}
            hrefLink="#"
            menuTitle="매출관리"
            isNew={false}
          />
          <MenuList
            disabledIconUrl={NoticeIcon}
            hrefLink="#"
            menuTitle="정산관리"
            isNew={false}
          />
          <MenuList
            disabledIconUrl={NoticeIcon}
            hrefLink="#"
            menuTitle="광고관리"
            isNew={true}
          />
          <MenuList
            disabledIconUrl={PromotionOffIcon}
            activeIconUrl={PromotionOnIcon}
            hrefLink="/merchant/management/coupons/"
            menuTitle="쿠폰관리"
            isNew={false}
          />
          <MenuList
            disabledIconUrl={NoticeIcon}
            hrefLink="#"
            menuTitle="리뷰관리"
            isNew={false}
          />
        </MenuWrapper>
        <QuickMenuWrapper>
          <div>
            <strong>주문접수 프로그램</strong>
            <ul>
              <QuickMenuList
                imageSrc={ComputerIcon}
                hrefLink="https://play.google.com/store/apps/details?id=com.coupang.mobile.eats.merchant&hl=ko"
                menuTitle="휴대폰 앱 설치"
              />
              <QuickMenuList
                imageSrc={ComputerIcon}
                hrefLink="#"
                menuTitle="POS 설치"
              />
            </ul>
          </div>
          <div>
            <strong>사장님 이용가이드</strong>
            <ul>
              <QuickMenuList
                imageSrc={ComputerIcon}
                hrefLink="https://eats.coupang.com/hc/ko/sections/900000801146"
                menuTitle="약관 및 정책"
              />
              <QuickMenuList
                imageSrc={ComputerIcon}
                hrefLink="https://store.coupangeats.com/resources/20220929090527/files/Merchant%20FAQs.pdf"
                menuTitle="FAQ 보기"
              />
            </ul>
          </div>
        </QuickMenuWrapper>
      </div>
    </Wrapper>
  );
}

//TODO nav 반응형
const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  padding-top: 3px;
  width: 215px;
  background: #ffffff;
  box-shadow: rgb(0 0 0 / 15%) 1px 0 3px 0;
  overflow-x: hidden;
  @media screen and (max-width: ${tablet}) {
    transform: translateX(-100vw);
  }
`;

const LogoWrapper = styled.div`
  width: 100%;
  height: auto;
  text-align: center;

  img {
    height: 55px;
  }
`;

const MenuWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 10px 0;
  border-bottom: 1px solid rgb(238, 238, 238);
`;

const QuickMenuWrapper = styled.div`
  margin: 32px 20px;
  font-size: 14px;
  color: #111111;

  div {
    margin-bottom: 32px;

    strong {
      display: block;
      margin-bottom: 16px;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
  }
`;
