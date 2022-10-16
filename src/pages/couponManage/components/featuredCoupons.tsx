import styled from "styled-components";
// @ts-ignore
import CouponBadge from "../assets/Star.png";
import { useState } from "react";

interface Props {
  rating: number;
  amount: string;
  isLastUnit: boolean;
}

export default function FeaturedCoupons({ rating, amount, isLastUnit }: Props) {
  const [modal, setModal] = useState(false);
  const CouponWrapper = styled.div`
    margin-right: ${() => (isLastUnit ? 0 : "25px")};
    min-width: 258px;
  `;

  return (
    <CouponWrapper>
      <CouponTopWrapper>
        <CouponBadgeWrapper>{rating}위</CouponBadgeWrapper>
        <div>
          <CouponTag>배달•포장</CouponTag>
          <span>매장명과 쿠폰이름</span>
        </div>
        <CouponAmount>{amount}원 할인</CouponAmount>
        <CouponDescription>
          <span>최소 주문금액 이상 주문 시</span>
          <span>종료일</span>
        </CouponDescription>
      </CouponTopWrapper>
      <CouponBottomWrapper>
        <button onClick={() => setModal(!modal)}>+ 쿠폰 발행하기</button>
      </CouponBottomWrapper>
    </CouponWrapper>
  );
}

const CouponBottomWrapper = styled.div`
  height: 40px;
  margin-top: -1px;
  text-align: center;
  background: rgb(248, 248, 248);
  border: 1px solid rgb(221, 221, 221);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-sizing: border-box;

  button {
    width: 100%;
    height: 100%;
    border: none;
    background: none;
    color: #555555;
    font-size: 14px;
    font-weight: 500;
    vertical-align: top;
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

const CouponTopWrapper = styled.div`
  position: relative;
  background: #ffffff;
  padding: 24px;
  border: 1px solid rgb(221, 221, 221);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;
