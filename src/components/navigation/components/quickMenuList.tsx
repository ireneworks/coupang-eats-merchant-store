import styled from "styled-components";

interface Props {
  imageSrc: string;
  hrefLink: string;
  menuTitle: string;
}

export default function QuickMenuList({
  imageSrc,
  hrefLink,
  menuTitle,
}: Props) {
  return (
    <QuickMenuListWrapper imageSrc={imageSrc}>
      <a href={`${hrefLink}`} target="_blank" rel="noreferrer">
        {menuTitle}
      </a>
    </QuickMenuListWrapper>
  );
}

const QuickMenuListWrapper = styled.li<{ imageSrc: string }>`
  a {
    display: block;
    width: 100%;
    height: 50px;
    margin-bottom: 12px;
    padding: 10px 20px 10px 55px;
    border: 1px solid rgb(204, 204, 204);
    background: #ffffff url(${(props) => props.imageSrc}) left 20px bottom 12px /
      25px no-repeat;
    box-sizing: border-box;
    text-decoration-line: none;
    vertical-align: top;
    line-height: 1.8;
    color: #111111;
  }
`;
