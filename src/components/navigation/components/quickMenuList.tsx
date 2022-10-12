import styled from "styled-components";

interface Props {
  imageSrc: URL;
  hrefLink: string;
  menuTitle: string;
}

export default function QuickMenuList({
  imageSrc,
  hrefLink,
  menuTitle,
}: Props) {
  return (
    <QuickMenuListWrapper>
      <a href={`${hrefLink}`}>
        <img src={`${imageSrc}`} />
        <span>{menuTitle}</span>
      </a>
    </QuickMenuListWrapper>
  );
}

const QuickMenuListWrapper = styled.li`
  a {
    display: block;
    width: 100%;
    height: 50px;
    margin-bottom: 12px;
    padding: 10px 20px;
    border: 1px solid rgb(204, 204, 204);
    background: #ffffff;
    box-sizing: border-box;
    text-decoration-line: none;

    img {
      width: 25px;
      height: 25px;
      margin-right: 12px;
    }

    span {
      margin: 0;
      vertical-align: top;
      line-height: 1.8;
    }
  }
`;
