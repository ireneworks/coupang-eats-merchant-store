import styled from "styled-components";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return <Section>{children}</Section>;
}

const Section = styled.div`
  display: block;
  height: 100%;
  margin: 0;
  padding-left: 215px;
  box-sizing: border-box;
`;
