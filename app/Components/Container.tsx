"use client";

import { ReactElement } from "react";

interface ContainerProps {
  title: string;
  children: any;
}

const Container: React.FC<ContainerProps> = ({ title, children }) => (
  <div className="flex gap-2 items-center">
    <h1>{title} :</h1>
    <div className="flex gap-4">
      {children}
    </div>
  </div>
);

export default Container;
