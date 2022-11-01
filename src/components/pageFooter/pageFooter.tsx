import styled from "styled-components";
import { tablet } from "../styles/devices";

export default function PageFooter() {
  return (
    <FooterWrapper>
      <ul>
        <li>
          <a href="#">쿠팡이츠 서비스 이용약관</a>
        </li>
        <li>
          <a href="#">쿠팡이츠 부속약관</a>
        </li>
        <li>
          <a href="#">쿠팡페이 전자금융거래약관</a>
        </li>
        <li>
          <a href="#">쿠팡개인정보 처리방침</a>
        </li>
        <li>
          <a href="#">쿠팡이츠 서비스요금 안내</a>
        </li>
      </ul>
      <ul>
        <li className="sub-content"> 상호명 및 호스팅 서비스 제공: 쿠팡(주)</li>
        <li className="sub-content">대표이사: 박대준</li>
        <li className="sub-content">주소: 서울시송파구 송파대로 570</li>
        <li className="sub-content">사업자 등록번호 : 120-88-00767</li>
        <li>
          <a href="#">사업자정보확인</a>
        </li>
        <li className="sub-content">통신판매업신고 : 2017-서울송파-0680</li>
        <li className="sub-content">고객센터 : 1600-9827</li>
        <li className="sub-content">이메일 : eatspartners@coupang.com</li>
        <li className="sub-content">메뉴 정보 수정 : menu@coupang.com</li>
      </ul>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  padding: 40px 50px;
  box-sizing: border-box;
  border-top: 1px solid #aaaaaa;
  font-size: 12px;

  ul {
    display: block;
    list-style: none;
    margin: 0 0 11px 0;
    padding: 0;
    line-height: 25px;
    word-break: keep-all;

    li {
      position: relative;
      display: inline-block;
      padding-right: 9px;
      margin-right: 8px;

      &::after {
        position: absolute;
        display: block;
        width: 1px;
        height: 15px;
        right: 0;
        top: 6px;
        background: #a3a3a3;
        content: "";
      }

      &:last-child::after {
        display: none;
      }

      a {
        text-decoration-line: none;
        font-weight: 700;
        margin-bottom: 11px;
        color: #555555;
      }
    }

    li.sub-content {
      color: #888888;
      font-weight: 400;
      line-height: 23px;
      vertical-align: bottom;
      word-break: keep-all;

      &::after {
        @media screen and (max-width: ${tablet}) {
          display: none;
        }
      }

      @media screen and (max-width: ${tablet}) {
        display: block;
      }
    }
  }
`;
