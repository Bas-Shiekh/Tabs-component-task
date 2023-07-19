"use client";
import { useState } from "react";
import TabButton from "./TabButton";

interface ItemsProps {
  key: string;
  label: string | React.ReactElement;
  disabled?: boolean;
  closeable?: boolean;
  children?: string | React.ReactElement;
}

interface TabsProps {
  items: ItemsProps[];
  centered?: boolean;
  size?: string;
  position?: string;
  className?: string;
  id?: string;
  style?: {
    color?: string;
    activeColor?: string;
    [key: string]: string | undefined;
  };
  defaultActiveKey?: string;
}

const Tabs: React.FC<TabsProps> = ({
  items,
  defaultActiveKey,
  size,
  position,
  centered,
  style,
  className,
  id,
}) => {
  const [active, setActive] = useState(defaultActiveKey);
  const [newItems, setNewItems] = useState(items);

  const handleTabClick = (key: string) => {
    setActive(key);
  };

  const handleRemoveItem = (key: string) => {
    setNewItems((prev) => prev.filter((item) => item.key !== key));
  };

  return (
    <div
      id={id}
      className={`
        flex w-full gap-4 flex-col border border-[#aaaaaa] rounded-md p-2
        ${position === "bottom" && "flex-col-reverse"}
        ${position === "left" && "!flex-row"}
        ${position === "right" && "!flex-row-reverse"}
        ${className}
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
          ${centered && "justify-center"}
      `}
      >
        {newItems?.map((item) => (
          <TabButton
            isActive={item.key === active ? true : false}
            key={item.key}
            keyElement={item.key}
            size={size || "small"}
            position={position || "top"}
            disabled={item.disabled || false}
            closeable={item.closeable || false}
            handleRemoveItem={handleRemoveItem}
            onClick={() => handleTabClick(item.key)}
            label={item.label}
            style={style}
          />
        ))}
      </div>
      <div className="flex w-[90%] gap-8">
        {newItems?.map((item) => {
          if (item.key !== active) return;
          return <div key={item.key}>{item.children}</div>;
        })}
      </div>
    </div>
  );
};

export default Tabs;
