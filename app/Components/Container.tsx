"use client";

import { ReactElement } from "react";

interface ContainerProps {
  title: string;
  children: any;
}

const Container: React.FC<ContainerProps> = ({ title, children }) => (
  <div className="flex gap-2 flex-col md:flex-row md:items-center mt-4">
    <h1 className="text-[1.2rem] font-medium">{title} :</h1>
    <div className="flex gap-4">{children}</div>
  </div>
);

export default Container;
