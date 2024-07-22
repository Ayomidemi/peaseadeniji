"use client";

import React from "react";
import useScreenSize from "./hooks/useScreenSize";

type Props = {
  children: React.ReactNode | any;
};

const ResponsiveComponent = ({ children }: Props) => {
  const size = useScreenSize();

  return <>{children({ size })}</>;
};

export default ResponsiveComponent;
