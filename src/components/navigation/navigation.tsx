import styled from "styled-components";
import MenuItem from "./components/menuItem";
import QuickMenuItem from "./components/quickMenuList";
import Logo from "./assets/logo.png";
import NoticeIcon from "./assets/icon-notice-off@2x.png";
import PromotionOffIcon from "./assets/icon_promotion_off.png";
import PromotionOnIcon from "./assets/icon_promotion_on.png";
import ComputerIcon from "./assets/icon-computer.png";
import { tablet } from "../styles/devices";
import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <button className="logo-wrapper" onClick={() => navigate("/")} />
      <MenuWrapper>
        <MenuItem
          disabledIconUrl={NoticeIcon}
          activeIconUrl={NoticeIcon}
          hrefLink="#"
          menuTitle="공지사항"
          isNew={false}
        />
        <MenuItem
          disabledIconUrl={NoticeIcon}
          activeIconUrl={NoticeIcon}
          hrefLink="#"
          menuTitle="광고관리"
          isNew={true}
        />
        <MenuItem
          disabledIconUrl={PromotionOffIcon}
          activeIconUrl={PromotionOnIcon}
          hrefLink="/merchant/management/coupons/"
          menuTitle="쿠폰관리"
          isNew={false}
        />
      </MenuWrapper>
      <QuickMenuWrapper>
        <section>
          <strong>주문접수 프로그램</strong>
          <ul>
            <QuickMenuItem
              imageSrc={ComputerIcon}
              hrefLink="https://play.google.com/store/apps/details?id=com.coupang.mobile.eats.merchant&hl=ko"
              menuTitle="휴대폰 앱 설치"
            />
            <QuickMenuItem
              imageSrc={ComputerIcon}
              hrefLink="#"
              menuTitle="POS 설치"
            />
          </ul>
        </section>
        <section>
          <strong>사장님 이용가이드</strong>
          <ul>
            <QuickMenuItem
              imageSrc={ComputerIcon}
              hrefLink="https://eats.coupang.com/hc/ko/sections/900000801146"
              menuTitle="약관 및 정책"
            />
            <QuickMenuItem
              imageSrc={ComputerIcon}
              hrefLink="https://store.coupangeats.com/resources/20220929090527/files/Merchant%20FAQs.pdf"
              menuTitle="FAQ 보기"
            />
          </ul>
        </section>
      </QuickMenuWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  padding-top: 20px;
  width: 215px;
  background: #ffffff;
  box-shadow: rgb(0 0 0 / 15%) 1px 0 3px 0;
  overflow-x: hidden;

  @media screen and (max-width: ${tablet}) {
    transform: translateX(-100vw);
  }

  button.logo-wrapper {
    width: 100%;
    height: 66px;
    padding: 15px 40px;
    background: transparent url(${Logo}) center / 80% no-repeat;
    border: none;
    cursor: pointer;
  }
`;

const MenuWrapper = styled.ul`
  list-style: none;
  margin: 24px 0 0 0;
  padding: 0;
  border-bottom: 1px solid rgb(238, 238, 238);
`;

const QuickMenuWrapper = styled.div`
  margin: 32px 20px;
  font-size: 14px;
  color: #111111;

  section {
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
