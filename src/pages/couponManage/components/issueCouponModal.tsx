import styled from "styled-components"; // @ts-ignore
import CloseIcon from "../assets/bx-x.svg"; // @ts-ignore
import ChevronDownIcon from "../assets/bx-chevron-down.svg";
import { useState } from "react";

interface Props {
  isModalOn: boolean;

  setModal(value: boolean): void;
}

export default function IssueCouponModal({ isModalOn, setModal }: Props) {
  const [orderWay, setOrderWay] = useState(false);
  const [dropDown, setDropDown] = useState(false);

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

    .modal-wrapper {
      position: relative;
      width: 520px;
      height: calc(100vh - 40px);
      max-height: 1027px;
      background: #ffffff;
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 62px;
      padding: 0 20px;
      border-bottom: 1px solid rgb(221, 221, 221);
      box-sizing: border-box;

      span {
        font-size: 18px;
        font-weight: 400;
        line-height: 21px;
        color: #111111;
      }

      img {
        cursor: pointer;
      }
    }

    .modal-cta {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 96px;
      padding: 20px;
      background: #ffffff;
      box-sizing: border-box;
      box-shadow: rgb(238 238 238) 0 -1px 0px;

      button {
        width: 100%;
        height: 48px;
        border: none;
        background: #d8d8d8;
        font-size: 14px;
        font-weight: 500;
        color: #ffffff;
      }
    }
  `;

  return (
    <ModalWrapper>
      <div className="modal-wrapper">
        <div className="modal-header">
          <span>쿠폰 발행</span>
          <img src={CloseIcon} onClick={() => setModal(!isModalOn)} />
        </div>
        <ModalContentWrapper>
          <div className="modal-title-wrapper">
            <span className="modal-title">쿠폰 조건 설정하기</span>
            <span className="modal-description">
              고객과 매출을 늘리는 우리 매장 맞춤 쿠폰을 설정해보세요.
            </span>
            <span className="modal-sub-text">
              (예: 첫 주문 고객 할인쿠폰, 단골 고객 감사 이벤트 쿠폰)
            </span>
          </div>
          <InputWrapper>
            <div className="input-title">
              <span>매장선택</span>
            </div>
            <div className="drop-down-wrapper">
              <button
                className="drop-down"
                onClick={() => setDropDown(!dropDown)}
              >
                <span>전체 (3개)</span>
                <div className="drop-down-icon" />
              </button>
              {dropDown && (
                <div className="drop-down-list">
                  <ul>
                    <li>
                      <input type="checkbox" />
                      하나가게
                    </li>
                    <li>
                      <input type="checkbox" />
                      둘가게
                    </li>
                    <li>
                      <input type="checkbox" />
                      셋가게
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </InputWrapper>
          <InputWrapper>
            <div className="input-title">
              <span>쿠폰대상</span>
            </div>
            <div className="radio-content">
              <div className="radio-button">
                <label>
                  <input type="radio" name="coupon-target" />
                  전체 고객
                </label>
                <label>
                  <input type="radio" name="coupon-target" />첫 주문 고객
                </label>
                <label>
                  <input type="radio" name="coupon-target" />
                  재주문 고객
                </label>
              </div>
              <span>• 쿠팡이츠 모든 고객입니다.</span>
            </div>
          </InputWrapper>
          <InputWrapper>
            <div className="input-title">
              <span>주문방법</span>
            </div>
            <div className="radio-content">
              <div className="radio-button">
                <label>
                  <input type="checkbox" checked={true} />
                  배달 시 할인
                </label>
                <label onClick={() => setOrderWay(!orderWay)}>
                  <input type="checkbox" checked={orderWay} />
                  포장 시 할인
                </label>
              </div>
              {orderWay && (
                <span>
                  • 선택된 매장 중 포장주문을 지원하는 매장에만 쿠폰이
                  적용됩니다.
                </span>
              )}
            </div>
          </InputWrapper>
          <InputWrapper>
            <div className="input-title">
              <span>쿠폰이름</span>
            </div>
            <div className="radio-content">
              <input
                type="text"
                className="input"
                placeholder="예: 오픈 이벤트, 첫 주문 할인, 단골 혜택"
              />
              <span>
                • 고객앱 할인쿠폰 리스트에&nbsp;
                <span className="highlight-span">
                  매장명과 쿠폰이름이 함께 노출
                </span>
                됩니다.(20자 이내)
              </span>
            </div>
          </InputWrapper>
          <InputWrapper>
            <div className="input-title">
              <span>쿠폰기간</span>
            </div>
          </InputWrapper>
        </ModalContentWrapper>
        <div className="modal-cta">
          <button>쿠폰 발행하기</button>
        </div>
      </div>
    </ModalWrapper>
  );
}
const ModalContentWrapper = styled.div`
  padding: 20px 20px 0px;

  .modal-title-wrapper {
    margin-bottom: 20px;
  }

  .modal-title {
    display: block;
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: 500;
    line-height: 26px;
  }

  .modal-description {
    display: block;
    color: rgb(85, 85, 85);
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
  }

  .modal-sub-text {
    display: block;
    font-size: 12px;
    color: rgb(85, 85, 85);
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 24px;

  .input-title {
    min-width: 77px;
    max-width: 94px;
    height: 40px;
    padding-right: 7px;

    span {
      font-size: 14px;
      font-weight: 500;
      line-height: 38px;
      color: #111111;
    }
  }

  .input {
    padding: 11px 26px 10px 16px;
    border: 1px solid #ddd;
  }

  .drop-down-wrapper {
    width: 100%;
  }

  .drop-down {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 40px;
    padding: 10px 5px 10px 16px;
    border: 1px solid rgb(204, 204, 204);
    background: #ffffff;
  }

  .drop-down-icon {
    width: 32px;
    height: 32px;
    background-image: url(${ChevronDownIcon});
    background-size: contain;
    background-repeat: no-repeat;
  }

  .drop-down-list {
    position: absolute;
    width: 100%;
    padding: 12px;
    background: #ffffff;
    box-shadow: rgb(0 0 0 / 15 %) 0px 2px 5px;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;

      input {
        margin-right: 7px;
      }

      li {
        display: block;
        margin-bottom: 12px;
      }
    }
  }

  .radio-content {
    display: flex;
    flex-direction: column;

    span {
      padding-top: 8px;
      font-size: 12px;
      font-weight: 400;
      line-height: 17px;
      color: rgb(85, 85, 85);
    }

    .highlight-span {
      color: #168350;
    }
  }

  .radio-button {
    display: flex;
    align-items: center;
    height: 40px;

    label {
      margin-right: 16px;
      font-size: 14px;
      line-height: 17px;
      color: #111111;

      input {
        margin: 0 8px 0 0;
      }
    }
  }
`;
