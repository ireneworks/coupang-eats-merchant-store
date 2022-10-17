import styled from "styled-components";
import { useState } from "react";
import ChevronIcon from "./assets/bx-chevron-down.svg";
import IssueCouponModal from "./components/issueCouponModal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerImage from "./components/bannerImage";
import FeaturedCoupons from "./components/featuredCoupons";
import { tablet } from "../../components/styles/devices";
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
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0",
    arrows: false,
    dotsClass: "indicator",
  };

  return (
    <>
      {modal && <IssueCouponModal isModalOn={modal} setModal={setModal} />}
      <Main>
        <div className="section">
          <div className="sectionWrapper">
            <PageTitle>
              <h1>쿠폰 관리</h1>
              <button onClick={() => setModal(!modal)}>쿠폰 발행하기</button>
            </PageTitle>
            <Dropdown dropdown={dropdown}>
              <button onClick={() => setDropdown(!dropdown)}>
                <span>전체</span>
                <span>열기</span>
              </button>
              <ul>
                <li>
                  <button>전체</button>
                </li>
                <li>
                  <button>1,000원 할인쿠폰</button>
                </li>
                <li>
                  <button>2,000원 할인쿠폰</button>
                </li>
                <li>
                  <button>3,000원 할인쿠폰</button>
                </li>
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
                <h2>인기 쿠폰 TOP3</h2>
                <div>
                  <span onClick={() => setFeaturedCoupons(!featuredCoupons)}>
                    {featuredCoupons ? "접기" : "펼치기"}
                  </span>
                  <FeaturedCouponsButton
                    src={ChevronIcon}
                    featuredCoupons={featuredCoupons}
                  />
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
          <ul>
            <li>
              <div className="aside-icon" />
              <div className="aside-content-wrapper">
                <dt>매출을 올리는 쿠폰 발행 TIP</dt>
                <dd>
                  매장에 유치하려는 고객에 맞춰 쿠폰을 발행해보세요. (예: 첫
                  주문 고객 2,000원 할인 쿠폰)
                </dd>
                <a href="https://eats.coupang.com/hc/ko/articles/6157144757401">
                  쿠폰 발행 가이드
                </a>
              </div>
            </li>
          </ul>
        </aside>
      </Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-grow: 1;
  padding: 0 0 43px 42px;
  @media only screen and (max-width: ${tablet}) {
    padding-left: 0;
  }

  .section {
    width: 100%;
  }

  .sectionWrapper {
    max-width: 835px;
    @media only screen and (max-width: ${tablet}) {
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

    ul {
      position: relative;
      width: 100%;
      margin: 0;
      background: #ffffff;
      padding: 60px 20px 20px 20px;
      border: 1px solid rgb(221, 221, 221);
      box-shadow: rgb(0 0 0 / 10 %) 1px 1px 3px 0;
      box-sizing: border-box;
      font-size: 14px;
      font-weight: 700;
      line-height: 17px;
      color: #555555;
      list-style: none;

      .aside-icon {
        position: absolute;
        top: 20px;
        left: 20px;
        margin-bottom: 12px;
        width: 28px;
        height: 28px;
        border-radius: 24px;
        background: #eeeeee;
        border: none;
        box-shadow: none;
      }

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

const PageTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  padding-top: 42px;

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

const Dropdown = styled.div<{ dropdown: boolean }>`
  position: relative;

  button {
    cursor: pointer;

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
    display: ${(props) => (props.dropdown ? "none" : "block")};
    position: absolute;
    width: 100%;
    max-height: 300px;
    margin: 0;
    padding: 0;
    border: 1px solid rgb(206, 212, 218);
    border-top: none;
    border-radius: 3px;
    list-style: none;
    z-index: 10;
    box-sizing: border-box;

    li {
      background: #ffffff;

      :hover {
        background: rgb(231, 248, 240);
        transition: all 0.2s ease 0s;
      }

      button {
        display: block;
        padding: 14px 16px;
        border: none;
        background: none;
        font-size: 14px;
        color: #111111;
        text-align: left;
      }
    }
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

  //TODO 디자인 맞추기
  .indicator {
    bottom: 30px;
  }
`;

const IssuedCoupon = styled.p`
  margin-top: 25px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  color: rgb(163, 163, 163);
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

const FeaturedCoupon = styled.div`
  margin-top: 60px;
`;

const CouponTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 7px;

  h2 {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
    color: #111111;
  }

  div {
    cursor: pointer;
  }

  span {
    color: rgb(163, 163, 163);
    font-size: 14px;
    vertical-align: top;
  }
`;

const FeaturedCouponsButton = styled.img<{ featuredCoupons: boolean }>`
  transition: all 0.2s ease 0s;
  transform: ${(props) =>
    props.featuredCoupons ? "rotate(180deg)" : "rotate(0deg)"};
`;

const Coupons = styled.div`
  display: flex;
  margin-bottom: 50px;
  padding: 12px 0 0 12px;
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
