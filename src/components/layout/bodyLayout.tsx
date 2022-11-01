import styled from "styled-components";
import { ReactNode } from "react";
import { tablet } from "../styles/devices";

interface Props {
  children: ReactNode;
}

export default function BodyLayout({ children }: Props) {
  return <Body>{children}</Body>;
}

const Body = styled.body`
  height: 100%;
  margin: 0;
  padding-left: 215px;
  box-sizing: border-box;
  font-family: "Noto Sans CJK KR";
  letter-spacing: -0.2px;
  
  @media screen and (max-width: ${tablet}) {
    padding-left: 0;
  }
`;
