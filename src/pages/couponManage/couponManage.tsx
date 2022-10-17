import styled, { css } from "styled-components";
import { useState } from "react"; // @ts-ignore
import ChevronIcon from "./assets/bx-chevron-down.svg";
import IssueCouponModal from "./components/issueCouponModal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerImage from "./components/bannerImage";
import FeaturedCoupons from "./components/featuredCoupons";
import { mobile } from "../../components/styles/devices";
import Slider from "react-slick";

export default function CouponManage() {
  const [dropdown, setDropdown] = useState(false);
  const [featuredCoupons, setFeaturedCoupons] = useState(true);
  const [modal, setModal] = useState(false);

  const Settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true,
    centerPadding: "0",
    arrows: false,
    responsive: [],
  };

  const Dropdown = styled.div`
    button {
      position: relative;
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: auto;
      padding: 16px 30px 16px 15px;
      box-sizing: border-box;
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
      position: absolute;
      width: 100%;
      max-height: 300px;
      margin: 0;
      padding: 0;
      border-width: 0 1px 1px 1px;
      border-style: none solid solid;
      border-left: rgb(221, 221, 221);
      border-right: rgb(221, 221, 221);
      border-bottom: rgb(221, 221, 221);
      border-radius: 0 3px 3px 3px;
      list-style: none;
      font-size: 14px;
      color: #111111;
      z-index: 10;

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
  const FeaturedCouponsButton = styled.img`
    transition: all 0.2s ease 0s;
    ${() => {
      if (featuredCoupons) {
        return css`
          transform: rotate(180deg);
        `;
        return css`
          transform: rotate(0deg);
        `;
      }
    }}
  `;

  return (
    <>
      {modal && <IssueCouponModal isModalOn={modal} />}
      <Main>
        <div className="section">
          <div className="sectionWrapper">
            <PageTitle>
              <span>쿠폰 관리</span>
              <button onClick={() => setModal(!modal)}>쿠폰 발행하기</button>
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
                <SliderWrapper {...Settings}>
                  <BannerImage
                    title={`쿠폰을 본 고객은 \n 클릭할 가능성이 약 1.6배 높아지고 \n 구매로 이어질 확률이 1.5배 높아집니다`}
                    description={`(2022.1.~3. 할인쿠폰을 7일 이상 노출한 매장 기준) \n 기간 및 노출 조건에 따라 변동될 수 있습니다.`}
                  />
                  <BannerImage
                    title={`쿠폰은 고객의 매장 방문 증가와 \n 구매 전환에 효과적입니다`}
                    description={`특히 쿠폰은 주문을 고민하는 \n 고객의 구매 결정에 도움이 됩니다.`}
                  />
                  <BannerImage
                    title={`쿠폰 발행수를 설정 할 수 있어 \n 계획적인 쿠폰 관리가 가능합니다`}
                    description={`계획한 만큼만 쿠폰을 발행할 수 있고 \n 활성화 스위치로 쉽게 쿠폰 이벤트를 관리할 수 있습니다.`}
                  />
                </SliderWrapper>
              </ImageSlider>
              <IssuedCoupon>발행된 쿠폰이 없습니다.</IssuedCoupon>
            </div>
            <FeaturedCoupon>
              <CouponTitleWrapper>
                <span className="coupon-title">인기 쿠폰 TOP3</span>
                <div>
                  <span
                    className="coupon-hidden"
                    onClick={() => setFeaturedCoupons(!featuredCoupons)}
                  >
                    {featuredCoupons ? "접기" : "펼치기"}
                  </span>
                  <FeaturedCouponsButton src={ChevronIcon} />
                </div>
              </CouponTitleWrapper>
              <Coupons>
                {featuredCoupons && (
                  <>
                    <FeaturedCoupons
                      rating={1}
                      amount="2,000"
                      isLastUnit={false}
                      onClick={() => setModal(!modal)}
                    />
                    <FeaturedCoupons
                      rating={2}
                      amount="3,000"
                      isLastUnit={false}
                      onClick={() => setModal(!modal)}
                    />
                    <FeaturedCoupons
                      rating={3}
                      amount="4,000"
                      isLastUnit={true}
                      onClick={() => setModal(!modal)}
                    />
                  </>
                )}
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
                    브랜드 및 이츠 진행 쿠폰 등은 본 페이지에서 확인이
                    불가합니다.
                  </li>
                </CouponDisclaim>
              </div>
            </FeaturedCoupon>
          </div>
        </div>
        <aside>
          <div>
            <div className="aside-icon" />
            <span>매출을 올리는 쿠폰 발행 TIP</span>
            <p className="aside-content">
              매장에 유치하려는 고객에 맞춰 쿠폰을 발행해보세요. (예: 첫 주문
              고객 2,000원 할인 쿠폰)
            </p>
            <a href="https://eats.coupang.com/hc/ko/articles/6157144757401">
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
  padding: 0 0 43px 42px;
  font-family: "Noto Sans CJK KR";
  @media only screen and (max-width: ${mobile}) {
    padding-left: 0;
  }

  .section {
    width: 100%;
  }

  .sectionWrapper {
    max-width: 835px;
    @media only screen and (max-width: ${mobile}) {
      padding: 0 20px;
    }
  }

  aside {
    flex-shrink: 0;
    width: 310px;
    margin: 0;
    padding: 30px;
    background: #f8f8f8;
    box-sizing: border-box;

    .aside-icon {
      margin-bottom: 12px;
      width: 24px;
      height: 24px;
      border-radius: 24px;
      background: #f8f8f8;
      border: none;
      box-shadow: none;
    }

    div {
      width: 100%;
      background: #ffffff;
      padding: 20px;
      border: 1px solid rgb(221, 221, 221);
      box-shadow: rgb(0 0 0 / 10 %) 1px 1px 3px 0px;
      box-sizing: border-box;
      font-size: 14px;
      font-weight: 700;
      line-height: 17px;
      color: #555555;

      .aside-content {
        margin-bottom: 20px;
        color: #555555;
        font-weight: 400;
      }

      p {
        line-height: 19px;
      }

      a {
        font-weight: 400;
        color: #168350;
      }
    }
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

const ImageSlider = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 25px;
  background: rgb(248, 248, 248);
  overflow: hidden;
`;

const SliderWrapper = styled(Slider)`
  width: 600px;
`;

const FeaturedCoupon = styled.div`
  margin-top: 60px;
`;

const CouponDisclaim = styled.ul`
  padding-left: 36px;
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  color: #888888;
`;

const Coupons = styled.div`
  display: flex;
  margin-bottom: 50px;
  padding: 12px 0 0 12px;
  @media only screen and (max-width: ${mobile}) {
    overflow-x: scroll;
  }
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

const CouponTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 7px;

  .coupon-title {
    font-size: 18px;
    font-weight: 700;
    color: #111111;
  }

  div {
    cursor: pointer;
  }

  .coupon-hidden {
    color: rgb(163, 163, 163);
    font-size: 14px;
    vertical-align: top;
  }
`;
