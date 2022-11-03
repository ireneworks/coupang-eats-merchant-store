import BannerImage from "./bannerImage";
import styled from "styled-components";
import Slider from "react-slick";
import { mobile } from "../../../components/styles/devices";

export default function ImageSlider() {
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
    <ImageSliderWrapper>
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
    </ImageSliderWrapper>
  );
}

const ImageSliderWrapper = styled.div`
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
