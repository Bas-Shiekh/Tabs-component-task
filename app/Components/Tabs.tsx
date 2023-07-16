"use client";
import { useState } from "react";
import TabButton from "./TabButton";

interface ItemsProps {
  key: string;
  label: string;
  children?: string | React.ReactElement;
}

interface TabsProps {
  items: ItemsProps[];
  defaultActiveKey?: string;
}

const Tabs: React.FC<TabsProps> = ({ items, defaultActiveKey }) => {
  const [active, setActive] = useState(defaultActiveKey);

  const handleTabClick = (key: string) => {
    setActive(key);
  };

  return (
    <>
      <div className="flex w-full items-center gap-8 border-b border-b-[#cccccc]">
        {items?.map((item) => (
          <TabButton
            isActive={item.key === active ? true : false}
            key={item.key}
            onClick={() => handleTabClick(item.key)}
            label={item.label}
          />
        ))}
      </div>
    </>
  );
};

export default Tabs;
