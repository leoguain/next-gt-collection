import React, { ReactNode } from "react";

import { Header } from "../Header";
import { Footer } from "../Footer";

type Props = {
  title: string;
  description: string;
  children: ReactNode | (() => void);
};

export const Page = ({ title, description, children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
