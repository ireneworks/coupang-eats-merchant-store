import styled from "styled-components";
import Slider from "react-slick";
import { mobile } from "../../../components/styles/devices";
import ImageBanner from "../assets/Banner_img_01.png";

export default function ImageSlider() {
  const Settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 10000,
    centerMode: true,
    centerPadding: "0",
    arrows: false,
    dotsClass: "indicator",
  };

  return (
    <Container>
      <SliderWrapper {...Settings}>
        <BannerContentWrapper>
          <img
            src={ImageBanner}
            alt="쿠팡이츠 앱 내 쿠폰을 확인할 수 있습니다."
          />
          <dl>
            <dt>{`쿠폰은 고객의 매장 방문 증가와 \n 구매 전환에 효과적입니다`}</dt>
            <dd>{`특히 쿠폰은 주문을 고민하는 \n 고객의 구매 결정에 도움이 됩니다.`}</dd>
          </dl>
        </BannerContentWrapper>
        <BannerContentWrapper>
          <img
            src={ImageBanner}
            alt="쿠팡이츠 앱 내 쿠폰을 확인할 수 있습니다."
          />
          <dl>
            <dt>{`쿠폰은 고객의 매장 방문 증가와 \n 구매 전환에 효과적입니다`}</dt>
            <dd>{`특히 쿠폰은 주문을 고민하는 \n 고객의 구매 결정에 도움이 됩니다.`}</dd>
          </dl>
        </BannerContentWrapper>
        <BannerContentWrapper>
          <img
            src={ImageBanner}
            alt="쿠팡이츠 앱 내 쿠폰을 확인할 수 있습니다."
          />
          <dl>
            <dt>{`쿠폰은 고객의 매장 방문 증가와 \n 구매 전환에 효과적입니다`}</dt>
            <dd>{`특히 쿠폰은 주문을 고민하는 \n 고객의 구매 결정에 도움이 됩니다.`}</dd>
          </dl>
        </BannerContentWrapper>
      </SliderWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 25px;
  background: rgb(248, 248, 248);
  overflow: hidden;
`;

const SliderWrapper = styled(Slider)`
  position: relative;
  width: 600px;

  .indicator {
    position: absolute;
    display: inline-block;
    margin: 0;
    padding: 0;
    top: 180px;
    right: 270px;

    li {
      display: inline-block;

      button {
        border: none;
        background: none;

        @media only screen and (max-width: ${mobile}) {
          display: none;
        }
      }
    }
  }
`;

const BannerContentWrapper = styled.div`
  display: flex;
  max-width: 600px;
  margin: 0 20px;

  img {
    width: 240px;
    height: 240px;
  }

  dl {
    width: 300px;
    display: flex;
    flex-direction: column;
    margin: 56px 0 0 8px;
    line-height: 21px;

    @media screen and (max-width: ${mobile}) {
      width: 100%;
      align-items: center;
      text-align: center;
    }

    dt {
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 12px;
      white-space: pre-line;
    }

    dd {
      margin: 0;
      font-size: 14px;
      color: rgb(85, 85, 85);
      line-height: 20px;
      white-space: pre-line;
    }
  }

  @media screen and (max-width: ${mobile}) {
    flex-flow: column;
    width: 100%;
    align-items: center;
  }
`;
