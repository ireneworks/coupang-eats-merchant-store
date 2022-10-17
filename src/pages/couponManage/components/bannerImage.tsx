import ImageBanner from "../assets/Banner_img_01.png";
import styled from "styled-components";
import { mobile } from "../../../components/styles/devices";

interface Props {
  title: string;
  description: string;
}

export default function BannerImage({ title, description }: Props) {
  return (
    <BannerImageWrapper>
      <img src={ImageBanner} />
      <BannerContent>
        <dt>{title}</dt>
        <dd>{description}</dd>
      </BannerContent>
    </BannerImageWrapper>
  );
}

const BannerImageWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  max-width: 600px;

  @media screen and (max-width: ${mobile}) {
    flex-flow: column;
    width: 100%;
    align-items: center;
  }

  img {
    display: block;
    width: 240px;
    height: 240px;
  }
`;

const BannerContent = styled.div`
  width: 296px;
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
`;
