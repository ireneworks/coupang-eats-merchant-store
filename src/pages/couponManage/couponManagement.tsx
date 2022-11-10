import styled from "styled-components";
import { useState } from "react";
import ChevronIcon from "./assets/bx-chevron-down.svg";
import IssueCouponModal from "./components/issueCouponModal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeaturedCouponItem from "./components/featuredCouponItem";
import { tablet } from "../../components/styles/devices";
import DropDown from "./components/dropDown";
import ImageSlider from "./components/imageSlider";
import StarIcon from "./assets/Star.png";

export default function CouponManagement() {
  const [featuredCoupons, setFeaturedCoupons] = useState(true);
  const [modal, setModal] = useState(false);

  return (
    <>
      {modal && <IssueCouponModal isModalOn={modal} setModal={setModal} />}
      <Main>
        <section>
          <div className="sectionWrapper">
            <PageTitle>
              <h1>쿠폰 관리</h1>
              <button onClick={() => setModal(!modal)}>쿠폰 발행하기</button>
            </PageTitle>
            <DropDown />
            <ImageSlider />
            <p>발행된 쿠폰이 없습니다.</p>
            <FeaturedCoupon>
              <CouponTitleWrapper featuredCoupons={featuredCoupons}>
                <h2>인기 쿠폰 TOP3</h2>
                <span onClick={() => setFeaturedCoupons(!featuredCoupons)}>
                  {featuredCoupons ? "접기" : "펼치기"}
                </span>
              </CouponTitleWrapper>
              <FeaturedCoupons>
                {featuredCoupons && (
                  <>
                    <FeaturedCouponItem
                      rating={1}
                      amount="2,000"
                      onClick={() => setModal(!modal)}
                    />
                    <FeaturedCouponItem
                      rating={2}
                      amount="3,000"
                      onClick={() => setModal(!modal)}
                    />
                    <FeaturedCouponItem
                      rating={3}
                      amount="4,000"
                      onClick={() => setModal(!modal)}
                    />
                  </>
                )}
              </FeaturedCoupons>
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
            </FeaturedCoupon>
          </div>
        </section>
        <aside>
          <div>
            <dl>
              <dt>매출을 올리는 쿠폰 발행 TIP</dt>
              <dd>
                매장에 유치하려는 고객에 맞춰 쿠폰을 발행해보세요. (예: 첫 주문
                고객 2,000원 할인 쿠폰)
              </dd>
            </dl>
            <a
              href="https://eats.coupang.com/hc/ko/articles/6157144757401"
              target="_blank"
              rel="noreferrer"
            >
              쿠폰 발행 가이드
            </a>
          </div>
        </aside>
      </Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-grow: 1;

  section {
    width: 100%;
    padding: 40px 0 40px 40px;

    @media screen and (max-width: ${tablet}) {
      padding: 0;
    }

    .sectionWrapper {
      max-width: 835px;

      @media screen and (max-width: ${tablet}) {
        padding: 40px 20px;
      }
    }

    p {
      margin-top: 25px;
      padding-bottom: 40px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      color: rgb(163, 163, 163);
      font-size: 16px;
      font-weight: 500;
      text-align: center;
    }
  }

  aside {
    flex-shrink: 0;
    width: 310px;
    margin: 0;
    padding: 30px;
    background: #f8f8f8;
    box-sizing: border-box;

    div {
      width: 100%;
      margin: 0;
      background: #ffffff url(${StarIcon}) left 20px top 30px / 30px no-repeat;
      padding: 60px 20px 20px 20px;
      border: 1px solid rgb(221, 221, 221);
      box-shadow: rgb(0 0 0 / 10 %) 1px 1px 3px 0;
      box-sizing: border-box;
      font-size: 14px;
      font-weight: 700;
      line-height: 17px;
      color: #555555;

      dd {
        margin: 12px 0 20px 0;
        color: #555555;
        font-weight: 400;
        line-height: 19px;
      }

      a {
        font-weight: 400;
        color: #168350;
      }
    }
  }
`;

const PageTitle = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  h1 {
    margin: 0;
    font-size: 28px;
  }

  button {
    cursor: pointer;
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

const FeaturedCoupon = styled.div`
  margin-top: 60px;
`;

const CouponTitleWrapper = styled.div<{ featuredCoupons: boolean }>`
  display: flex;
  justify-content: space-between;
  margin-bottom: 7px;

  h2 {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
    color: #111111;
  }

  span {
    padding-right: 28px;
    font-size: 14px;
    vertical-align: top;
    color: rgb(163, 163, 163);
    background: transparent url(${ChevronIcon}) right 2px bottom 4px / 24px
      no-repeat;
    cursor: pointer;
  }

  span::before {
    transition: all 0.2s ease 0s;
    transform: ${(props) =>
      props.featuredCoupons ? "rotate(180deg)" : "rotate(0deg)"};
  }
`;

const FeaturedCoupons = styled.ul`
  display: flex;
  margin-bottom: 50px;
  padding: 12px 0 0 12px;
  list-style: none;

  @media only screen and (max-width: ${tablet}) {
    overflow-x: scroll;
  }
`;

const CouponDisclaim = styled.ul`
  padding-left: 36px;
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  color: #888888;
`;
