import styled from "styled-components";

interface Props {
  isModalOn: boolean;
}

export default function IssueCouponModal({ isModalOn }: Props) {
  const ModalWrapper = styled.div`
    position: fixed;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 20px;
    background: rgba(0, 0, 0, 0.5);
    z-index: 50;
    display: ${isModalOn ? "flex" : "none"};

    div {
      width: 520px;
      height: 100%;
      background: #ffffff;
    }
  `;

  return (
    <ModalWrapper>
      <div>
        <span>쿠폰 발행</span>
        <img />
      </div>
      <div>
        <div>
          <span>쿠폰 조건 설정하기</span>
          <span>
            고객과 매출을 늘리는 우리 매장 맞춤 쿠폰을 설정해보세요. (예: 첫
            주문 고객 할인쿠폰, 단골 고객 감사 이벤트 쿠폰)
          </span>
        </div>
        <div>
          <span>매장선택</span>
          <button>전체</button>
        </div>
      </div>
    </ModalWrapper>
  );
}
