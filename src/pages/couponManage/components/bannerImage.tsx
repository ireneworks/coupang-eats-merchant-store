// @ts-ignore
import ImageBanner from "./assets/Banner_img_01.png";
import styled from "styled-components";

interface Props {
  title: string;
  description: string;
}

export default function BannerImage({ title, description }: Props) {
  return (
    <BannerImageWrapper>
      <TestImage />
      <BannerContent>
        <BannerContentTitle>{title}</BannerContentTitle>
        <BannerContentDescription>{description}</BannerContentDescription>
        {/*<Pagination>*/}
        {/*  <div>*/}
        {/*    <div className="dot" />*/}
        {/*    <div className="dot" />*/}
        {/*    <div className="dot" />*/}
        {/*    <div className="dot" />*/}
        {/*  </div>*/}
        {/*</Pagination>*/}
      </BannerContent>
    </BannerImageWrapper>
  );
}

const BannerImageWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  max-width: 600px;
  @media screen and (max-width: 576px) {
    flex-flow: column;
    width: 100%;
    align-items: center;
  }
`;

const TestImage = styled.div`
  display: block;
  width: 240px;
  height: 240px;
  background: #dddddd;
`;

const BannerContent = styled.div`
  width: 296px;
  display: flex;
  flex-direction: column;
  margin: 56px 0 0 8px;
  line-height: 21px;
  @media screen and (max-width: 576px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;

const BannerContentTitle = styled.span`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 12px;
  white-space: pre-line;
`;

const BannerContentDescription = styled.span`
  font-size: 14px;
  color: rgb(85, 85, 85);
  line-height: 17px;
  white-space: pre-line;
`;

const Pagination = styled.div`
  width: 68px;

  div {
    display: flex;
    justify-content: center;
  }

  .dot {
    width: 8px;
    height: 8px;
    background: rgb(223, 227, 232);
    border-radius: 8px;
  }
`;
