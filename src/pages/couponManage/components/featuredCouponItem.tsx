import styled from "styled-components";
import CouponBadge from "../assets/Star.png";

interface Props {
  rating: number;
  amount: string;

  onClick(): void;
}

export default function FeaturedCouponItem({ rating, amount, onClick }: Props) {
  return (
    <CouponWrapper>
      <dl>
        <div className="badge-wrapper">{rating}위</div>
        <div>
          <span className="tag-wrapper">배달•포장</span>
          <dt>매장명과 쿠폰이름</dt>
        </div>
        <dd>{amount}원 할인</dd>
        <CouponDescription>
          <dd className="minimum-cost-description">
            최소 주문금액 이상 주문 시
          </dd>
          <dd className="minimum-cost-description">종료일</dd>
        </CouponDescription>
      </dl>
      <button onClick={onClick}>+ 쿠폰 발행하기</button>
    </CouponWrapper>
  );
}

const CouponWrapper = styled.li`
  margin-right: 25px;
  min-width: 258px;

  dl {
    position: relative;
    background: #ffffff;
    margin: 0;
    padding: 24px;
    border: 1px solid rgb(221, 221, 221);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    div.badge-wrapper {
      position: absolute;
      top: -10px;
      left: -10px;
      width: 38px;
      height: 38px;
      background: transparent url(${CouponBadge}) center / 38px no-repeat;
      box-sizing: border-box;
      font-size: 12px;
      font-weight: 700;
      line-height: 3.2;
      color: #ffffff;
      text-align: center;
    }

    span.tag-wrapper {
      display: inline-block;
      margin-right: 8px;
      padding: 2px 5px;
      background: rgb(33, 43, 54);
      border-radius: 4px;
      color: #ffffff;
      font-size: 12px;
      font-weight: 700;
    }

    dt {
      display: inline-block;
      color: rgb(33, 43, 54);
      font-size: 13px;
      font-weight: bold;
    }

    dd {
      margin: 8px 0;
      color: rgb(1, 175, 255);
      font-size: 28px;
      line-height: 28px;
      font-weight: bold;
    }
  }

  button {
    width: 100%;
    height: 40px;
    margin-top: -1px;
    text-align: center;
    background: rgb(248, 248, 248);
    border: 1px solid rgb(221, 221, 221);
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    box-sizing: border-box;
    cursor: pointer;
    color: #555555;
    font-size: 14px;
    font-weight: 500;
    vertical-align: top;
  }
`;

const CouponDescription = styled.div`
  display: flex;
  justify-content: space-between;

  dd.minimum-cost-description {
    margin: 0;
    font-size: 12px;
    font-weight: 500;
    color: #888888;
  }
`;
