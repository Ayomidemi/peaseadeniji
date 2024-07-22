import HomeBtn from "@/components/HomeBtn";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const SubPagesLayout = ({ children }: Props) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8 xs:px-16 lg:px-32 py-20">
      <HomeBtn />
      {children}
    </main>
  );
};

export default SubPagesLayout;
