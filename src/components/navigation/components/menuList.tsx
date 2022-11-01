import styled, { css } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  disabledIconUrl: string;
  activeIconUrl: string;
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
  const navigate = useNavigate();
  const isLinkActive = hrefLink === location.pathname;
  const icon = isLinkActive ? activeIconUrl : disabledIconUrl;

  return (
    <MenuWrapper isLinkActive={isLinkActive} icon={icon} isNew={isNew}>
      <button onClick={() => navigate(hrefLink)}>
        <div />
        {menuTitle}
      </button>
    </MenuWrapper>
  );
}

const MenuWrapper = styled.li<{
  isLinkActive: boolean;
  icon: string;
  isNew: boolean;
}>`
  button {
    position: relative;
    display: block;
    width: 100%;
    margin-bottom: 12px;
    padding: 15px 25px;
    box-sizing: border-box;
    text-decoration-line: none;
    font-size: 16px;
    font-weight: 300;
    vertical-align: top;
    line-height: 1.5;
    color: #111111;
    border-left: 2px solid rgba(22, 131, 80, 0);
    border-right: none;
    border-top: none;
    border-bottom: none;
    background: transparent url(${(props) => props.icon}) left 40px bottom 16px /
      24px no-repeat;
    cursor: pointer;

    ${(props) => {
      if (props.isLinkActive) {
        return css`
          color: rgb(22, 131, 80);
          font-weight: 700;
          border-left: 2px solid rgba(22, 131, 80, 1);
        `;
      }
    }}
    div {
      position: absolute;
      top: 6px;
      left: 63px;
      margin: 0;
      padding: 0;
      width: 8px;
      height: 8px;
      background: #ff0000;
      border-radius: 4px;
      opacity: ${(props) => (props.isNew ? "100%" : "0")};
    }
  }
`;
