import styled, { css } from "styled-components";
import { useState } from "react"; // @ts-ignore
import BannerImage from "./assets/Banner_img_01.png"; // @ts-ignore
import CouponBadge from "./assets/Star.png";
import IssueCouponModal from "./components/issueCouponModal";
import FeaturedCoupons from "./components/featuredCoupons";

export default function CouponManage() {
  const [dropdown, setDropdown] = useState(false);
  const [modal, setModal] = useState(false);

  const Dropdown = styled.div`
    button {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: auto;
      padding: 16px 30px 16px 15px;
      border: 1px solid rgb(206, 212, 218);
      border-radius: 0;
      background: #ffffff;
      font-size: 16px;
      color: #111111;
    }

    ul {
      ${() => {
        if (!dropdown) {
          return css`
            display: none;
          `;
        }
      }}
      width: 100%;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      border-width: 0 1px 1px 1px;
      border-style: none solid solid;
      border-left: rgb(221, 221, 221);
      border-right: rgb(221, 221, 221);
      border-bottom: rgb(221, 221, 221);
      border-radius: 0 3px 3px 3px;
      list-style: none;
      font-size: 14px;
      color: #111111;

      li {
        padding: 14px 16px;
        background: #ffffff;

        :hover {
          background: rgb(231, 248, 240);
          transition: all 0.2s ease 0s;
        }
      }
    }
  `;

  return (
    <>
      {modal && <IssueCouponModal />}
      <Main>
        <section>
          <PageTitle>
            <span>쿠폰 관리</span>
            <button>쿠폰 발행하기</button>
          </PageTitle>
          <Dropdown>
            <button onClick={() => setDropdown(!dropdown)}>
              <span>전체</span>
              <span>열기</span>
            </button>
            <ul>
              <li>전체</li>
              <li>1,000원 할인쿠폰</li>
              <li>5,000원 할인쿠폰</li>
              <li>2,000원 할인쿠폰(3만원 이상)</li>
            </ul>
          </Dropdown>
          <div>
            <ImageSlider>
              <BannerImageWrapper>
                <img src={BannerImage} />
                <BannerContent>
                  <BannerContentTitle>
                    쿠폰을 본 고객은 \n 클릭할 가능성이 약 1.6배 높아지고 \n
                    구매로 이어질 확률이 1.5배 높아집니다
                  </BannerContentTitle>
                  <BannerContentDescription>
                    (2022.1.~3. 할인쿠폰을 7일 이상 노출한 매장 기준)\n기간 및
                    노출 조건에 따라 변동될 수 있습니다.
                  </BannerContentDescription>
                  <Pagination>
                    <div>
                      <Dot />
                      <Dot />
                      <Dot />
                      <Dot />
                    </div>
                  </Pagination>
                </BannerContent>
              </BannerImageWrapper>
            </ImageSlider>
            <IssuedCoupon>발행된 쿠폰이 없습니다.</IssuedCoupon>
          </div>

          <FeaturedCoupon>
            <CouponTitleWrapper>
              <CouponTitle>인기 쿠폰 TOP3</CouponTitle>
              <span>접기</span>
            </CouponTitleWrapper>
            <Coupons>
              <FeaturedCoupons rating={1} amount="2,000" isLastUnit={false} />
              <FeaturedCoupons rating={2} amount="3,000" isLastUnit={false} />
              <FeaturedCoupons rating={3} amount="4,000" isLastUnit={true} />
            </Coupons>
            <div>
              <CouponDisclaim>
                <li>
                  생성하신 쿠폰은 수정이 불가하니 다운로드 비활성화 후 새로
                  발행해 주시기 바랍니다.
                </li>
                <li>
                  쿠팡이츠 포털 내 쿠폰발행 서비스 오픈 전 등록하신 쿠폰은 본
                  페이지에서 확인 및 상태수정이 불가하며, 스토어
                  센터(1600-9827)로 연락주시기 바랍니다.
                </li>
                <li>
                  사장님께서 직접 설정하신 쿠폰만 확인가능하며, 프랜차이즈
                  브랜드 및 이츠 진행 쿠폰 등은 본 페이지에서 확인이 불가합니다.
                </li>
              </CouponDisclaim>
            </div>
          </FeaturedCoupon>
        </section>
        <Aside>
          <div>매출을 올리는 쿠폰 발행 TIP</div>
        </Aside>
      </Main>
    </>
  );
}

const CouponDisclaim = styled.ul`
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  color: #888888;
`;

const CouponBottomWrapper = styled.div`
  height: 40px;
  margin-top: -1px;
  padding: 5px 20px;
  text-align: center;
  background: rgb(248, 248, 248);
  border: 1px solid rgb(221, 221, 221);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  button {
    width: 100%;
    height: 100%;
    border: none;
    background: none;
    color: #555555;
    font-size: 14px;
  }
`;

const CouponAmount = styled.div`
  margin: 8px 0;
  color: rgb(1, 175, 255);
  font-size: 28px;
  line-height: 28px;
  font-weight: bold;
`;

const CouponDescription = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 500;
  color: rgb(145, 158, 171);
`;

const CouponTag = styled.span`
  display: inline-block;
  margin-right: 8px;
  padding: 3px 5px 2px;
  background: rgb(33, 43, 54);
  border-radius: 4px;
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;

  + span {
    display: inline-block;
    color: rgb(33, 43, 54);
    font-size: 13px;
    font-weight: bold;
  }
`;

const CouponBadgeWrapper = styled.div`
  position: absolute;
  top: -10px;
  left: -10px;
  width: 38px;
  height: 38px;
  background-image: url(${CouponBadge});
  background-size: 38px;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  line-height: 3.2;
  color: #ffffff;
`;

const Coupons = styled.div`
  display: flex;
  margin-bottom: 50px;
  padding: 12px 0 0 12px;
`;

const CouponWrapper = styled.div`
  margin-right: 25px;
`;

const CouponTopWrapper = styled.div`
  position: relative;
  width: 258px;
  background: #ffffff;
  padding: 24px;
  border: 1px solid rgb(221, 221, 221);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const ImageSlider = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 25px;
  background: rgb(248, 248, 248);
`;

const BannerImageWrapper = styled.div`
  display: flex;
  width: 600px;
  margin: 0;

  img {
    width: 230px;
  }
`;

const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 56px;
  line-height: 21px;
`;

const BannerContentTitle = styled.span`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 12px;
  white-space: pre-wrap;
`;

const BannerContentDescription = styled.span`
  font-size: 14px;
  color: rgb(85, 85, 85);
  line-height: 17px;
`;

const IssuedCoupon = styled.span`
  display: block;
  margin-top: 25px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  color: rgb(163, 163, 163);
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

const Pagination = styled.div`
  width: 68px;

  div {
    display: flex;
    justify-content: space-between;
  }
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  background: rgb(223, 227, 232);
  border-radius: 8px;
`;

const FeaturedCoupon = styled.div`
  margin-top: 60px;
`;

const CouponTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 7px;
`;

const CouponTitle = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #111111;

  + span {
    color: rgb(163, 163, 163);
    font-size: 14px;
  }
`;

const Main = styled.main`
  display: flex;
  flex-grow: 1;
  padding: 0 0 43px 42px;

  section {
    width: 100%;
  }
`;

const PageTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  padding-top: 42px;

  span {
    font-size: 28px;
    font-weight: 400;
  }

  button {
    width: 122px;
    height: 40px;
    background: #168350;
    border: none;
    color: #ffffff;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
  }
`;

const Aside = styled.aside`
  flex-shrink: 0;
  width: 310px;
  margin: 0;
  padding: 30px;
  background: #f8f8f8;

  div {
    width: 100%;
    background: #ffffff;
    padding: 20px;
    border: 1px solid rgb(221, 221, 221);
    box-shadow: rgb(0 0 0 / 10%) 1px 1px 3px 0px;
    box-sizing: border-box;
  }
`;
