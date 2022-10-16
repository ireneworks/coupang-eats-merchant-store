import { ReactNode } from "react";
import PageFooter from "../pageFooter/pageFooter";
import PageHeader from "../pageHeader/pageHeader";

interface Props {
  children: ReactNode;
}

export default function PageLayout({ children }: Props) {
  return (
    <>
      <PageHeader />
      {children}
      <PageFooter />
    </>
  );
}
