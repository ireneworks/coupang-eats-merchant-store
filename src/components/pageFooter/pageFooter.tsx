import styled from "styled-components";

export default function PageFooter() {
  return (
    <FooterWrapper>
      <ShortCut>
        <span>
          <a href="#">쿠팡이츠 서비스 이용약관</a>
        </span>
        <Divider />
        <span>
          <a href="#">쿠팡이츠 부속약관</a>
        </span>
        <Divider />
        <span>
          <a href="#">쿠팡페이 전자금융거래약관</a>
        </span>
        <Divider />
        <span>
          <a href="#">쿠팡개인정보 처리방침</a>
        </span>
        <Divider />
        <span>
          <a href="#">쿠팡이츠 서비스요금 안내</a>
        </span>
      </ShortCut>
      <FooterContent>
        <span> 상호명 및 호스팅 서비스 제공: 쿠팡(주)</span>
        <DividerLight>|</DividerLight>
        <span>대표이사: 박대준</span>
        <DividerLight>|</DividerLight>
        <span>주소: 서울시송파구 송파대로 570</span>
        <DividerLight>|</DividerLight>
        <span>사업자 등록번호 : 120-88-00767</span>
        <span>
          <LinkButton href="#">사업자정보확인</LinkButton>
        </span>
        <DividerLight>|</DividerLight>
        <span>통신판매업신고 : 2017-서울송파-0680</span>
        <DividerLight>|</DividerLight>
        <span>고객센터 : 1600-9827</span>
        <DividerLight>|</DividerLight>
        <span>이메일 : eatspartners@coupang.com</span>
        <DividerLight>|</DividerLight>
        <span>메뉴 정보 수정 : menu@coupang.com</span>
      </FooterContent>
    </FooterWrapper>
  );
}
const LinkButton = styled.a`
  margin-left: 4px;
  text-decoration-line: none;
  font-weight: 500;
  color: #555555;
`;

const Divider = styled.span`
  width: 1px;
  height: 11px;
  margin: 0 9px;
  background: #a3a3a3;
`;

const DividerLight = styled.span`
  color: #cccccc;
  margin: 0 9px;
`;

const FooterWrapper = styled.footer`
  padding: 40px 50px;
  box-sizing: border-box;
  border-top: 1px solid #aaaaaa;
  font-size: 12px;
`;

const ShortCut = styled.div`
  display: block;
  margin-bottom: 11px;
  line-height: 25px;

  a {
    text-decoration-line: none;
    font-weight: 700;
    margin-bottom: 11px;
    color: #555555;
  }
`;

const FooterContent = styled.div`
  display: block;
  max-width: 1100px;
  color: #888888;
  font-weight: 400;
  line-height: 23px;
  vertical-align: bottom;
  word-break: keep-all;
`;
