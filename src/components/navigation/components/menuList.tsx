import styled, { css } from "styled-components";

interface Props {
  imageSrc: URL;
  hrefLink: string;
  menuTitle: string;
  isNew: boolean;
}

export default function MenuList({
  imageSrc,
  hrefLink,
  menuTitle,
  isNew,
}: Props) {
  const Notification = styled.div`
    position: absolute;
    top: -8px;
    right: 15px;
    margin: 0;
    padding: 0;
    width: 8px;
    height: 8px;
    background: #ff0000;
    border-radius: 4px;

    ${() => {
      if (isNew) {
        return css`
          opacity: 100%;
        `;
      }
      return css`
        opacity: 0%;
      `;
    }}
  `;

  return (
    <ListWrapper>
      <a href={`${hrefLink}`}>
        <IconWrapper>
          <Notification />
          <img src={`${imageSrc}`} />
        </IconWrapper>
        <span>{menuTitle}</span>
      </a>
    </ListWrapper>
  );
}

const ListWrapper = styled.li`
  a {
    display: block;
    width: 100%;
    padding: 15px 25px;
    box-sizing: border-box;
    text-decoration-line: none;
    font-size: 16px;
    color: #111111;
    font-weight: 300;
    border-left: 2px solid rgba(22, 131, 80, 0);

    span {
      vertical-align: top;
      line-height: 1.5;
    }
  }

  :active {
    color: rgb(22, 131, 80);
    font-weight: 700;
    border-left: 2px solid rgba(22, 131, 80, 1);
  }
`;

const IconWrapper = styled.div`
  position: relative;
  display: inline-block;

  img {
    width: 24px;
    height: 24px;
    margin-right: 20px;
  }
`;
