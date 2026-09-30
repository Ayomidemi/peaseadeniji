// import HomeBtn from "@/components/HomeBtn";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const SubPagesLayout = ({ children }: Props) => {
  return (
    <main className="min-h-screen bg-background">{children}</main>
  );
};

export default SubPagesLayout;
