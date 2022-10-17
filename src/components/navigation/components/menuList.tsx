import styled, { css } from "styled-components";
import { useLocation } from "react-router-dom";

interface Props {
  disabledIconUrl: string;
  activeIconUrl?: string;
  hrefLink: string;
  menuTitle: string;
  isNew: boolean;
}

export default function MenuList({
  disabledIconUrl,
  activeIconUrl,
  hrefLink,
  menuTitle,
  isNew,
}: Props) {
  const location = useLocation();
  const isLinkActive = hrefLink === location.pathname;
  const icon = isLinkActive ? activeIconUrl : disabledIconUrl;
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
    opacity: ${isNew ? "100%" : "0"};
  `;
  const ListWrapper = styled.li`
    a {
      display: block;
      width: 100%;
      padding: 15px 25px;
      box-sizing: border - box;
      text-decoration-line: none;
      font-size: 16px;
      color: #111111;
      font-weight: 300;
      border-left: 2px solid rgba(22, 131, 80, 0);

      ${() => {
        if (isLinkActive) {
          return css`
            color: rgb(22, 131, 80);
            font-weight: 700;
            border-left: 2px solid rgba(22, 131, 80, 1);
          `;
        }
      }}
      span {
        vertical-align: top;
        line-height: 1.5;
      }
    }
  `;

  return (
    <ListWrapper>
      <a href={`${hrefLink}`}>
        <IconWrapper>
          <Notification />
          <img src={icon} />
        </IconWrapper>
        <span>{menuTitle}</span>
      </a>
    </ListWrapper>
  );
}

const IconWrapper = styled.div`
  position: relative;
  display: inline-block;

  img {
    width: 24px;
    height: 24px;
    margin-right: 20px;
  }
`;
