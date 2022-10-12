import styled from "styled-components";
import MenuList from "./components/menuList";
import QuickMenuList from "./components/quickMenuList";
// @ts-ignore
import Logo from "./assets/logo.png";
// @ts-ignore
import NoticeIcon from "./assets/icon-notice-off@2x.png";
// @ts-ignore
import PromotionOffIcon from "./assets/icon_promotion_off.png";
// @ts-ignore
import PromotionOnIcon from "./assets/icon_promotion_on.png";
// @ts-ignore
import ComputerIcon from "./assets/icon-computer.png";

export default function Navigation() {
  return (
    <Wrapper>
      <LogoWrapper>
        <a href="/">
          <img src={Logo} />
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
            <span>주문접수 프로그램</span>
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
            <span>사장님 이용가이드</span>
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

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  padding-top: 3px;
  width: 215px;
  background: #ffffff;
  box-shadow: rgb(0 0 0 / 15%) 1px 0px 3px 0px;
  overflow: scroll;
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

  div {
    margin-bottom: 32px;

    span {
      display: inline-block;
      margin-bottom: 16px;
      font-size: 14px;
      font-weight: 700;
      color: #111111;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
  }
`;
