import { ReactNode } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

interface Props {
  children: ReactNode;
}

export default function PageLayout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
