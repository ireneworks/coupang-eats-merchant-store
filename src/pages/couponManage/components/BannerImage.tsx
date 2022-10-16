// @ts-ignore
import ImageBanner from "./assets/Banner_img_01.png";
import styled from "styled-components";

export default function BannerImage() {
  return (
    <BannerImageWrapper>
      <TestImage />
      <BannerContent>
        <BannerContentTitle>
          쿠폰을 본 고객은 \n 클릭할 가능성이 약 1.6배 높아지고 \n 구매로 이어질
          확률이 1.5배 높아집니다
        </BannerContentTitle>
        <BannerContentDescription>
          (2022.1.~3. 할인쿠폰을 7일 이상 노출한 매장 기준)\n기간 및 노출 조건에
          따라 변동될 수 있습니다.
        </BannerContentDescription>
        <Pagination>
          <div>
            <div className="Dot" />
            <div className="Dot" />
            <div className="Dot" />
            <div className="Dot" />
          </div>
        </Pagination>
      </BannerContent>
    </BannerImageWrapper>
  );
}

const TestImage = styled.div`
  display: block;
  width: 240px;
  height: 240px;
  background: #dddddd;
`;

const BannerImageWrapper = styled.div`
  display: flex;
  max-width: 600px;
  margin: 0;

  img {
    width: 230px;
  }
`;

const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 56px 0 0 8px;
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

const Pagination = styled.div`
  width: 68px;

  div {
    display: flex;
    justify-content: center;
  }

  .Dot {
    width: 8px;
    height: 8px;
    background: rgb(223, 227, 232);
    border-radius: 8px;
  }
`;
