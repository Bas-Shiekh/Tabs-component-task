"use client";
import { useState } from "react";
import TabButton from "./TabButton";

interface ItemsProps {
  key: string;
  label: string | React.ReactElement;
  disabled?: boolean;
  children?: string | React.ReactElement;
}

interface TabsProps {
  items: ItemsProps[];
  centered?: boolean;
  size?: string;
  position?: string;
  defaultActiveKey?: string;
}

const Tabs: React.FC<TabsProps> = ({
  items,
  defaultActiveKey,
  size,
  position,
  centered,
}) => {
  const [active, setActive] = useState(defaultActiveKey);

  const handleTabClick = (key: string) => {
    setActive(key);
  };

  return (
    <div
      className={`
        flex w-full gap-4 flex-col
        ${position === "bottom" && "flex-col-reverse"}
        ${position === "left" && "!flex-row"}
        ${position === "right" && "!flex-row-reverse"}
    `}
    >
      <div
        className={`
          flex gap-4 border-b border-b-[#cccccc] w-full overflow-auto scroll-smooth
          ${position === "bottom" && "border-t border-t-[#cccccc] border-b-0"}
          ${
            position === "left" &&
            "border-r border-r-[#cccccc] flex-col border-b-0 !w-[150px] h-[600px]"
          }
          ${
            position === "right" &&
            "border-l border-l-[#cccccc] flex-col border-b-0 !w-[150px] h-[600px]"
          }
          ${
            centered && "justify-center"
          }
      `}
      >
        {items?.map((item) => (
          <TabButton
            isActive={item.key === active ? true : false}
            key={item.key}
            keyElement={item.key}
            size={size || "small"}
            position={position || "top"}
            disabled={item.disabled || false}
            onClick={() => handleTabClick(item.key)}
            label={item.label}
          />
        ))}
      </div>
      <div className="flex w-[90%] gap-8">
        {items?.map((item) => {
          if (item.key !== active) return;
          return <div key={item.key}>{item.children}</div>;
        })}
      </div>
    </div>
  );
};

export default Tabs;
