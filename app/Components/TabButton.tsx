"use client";

import classNames from "classnames";
import { AiOutlineClose } from "react-icons/ai";

interface TabButtonProps {
  isActive: boolean;
  keyElement: string;
  label: string | React.ReactElement;
  size: string;
  position?: string;
  disabled: boolean;
  onClick: () => void;
  handleRemoveItem: (key: string) => void;
  closeable: boolean;
  style?: { color?: string; activeColor?: string };
}

const TabButton: React.FC<TabButtonProps> = ({
  isActive,
  keyElement,
  label,
  onClick,
  size,
  position,
  disabled,
  closeable,
  handleRemoveItem,
  style,
}) => {
  return (
    <div className="flex gap-3 items-center relative shrink-0" style={style}>
      <button
        type="button"
        key={keyElement}
        onClick={onClick}
        disabled={disabled}
        className={classNames("px-[0.2rem] py-[0.6rem]", {
          "text-[1.1rem]": size === "middle",
          "text-[1.2rem]": size === "large",
          "cursor-not-allowed opacity-60": disabled,
          "before:top-0 before:left-0": position === "bottom",
          "!px-[1rem]": position === "left" || position === "right",
        })}
        style={{
          color: `${
            isActive
              ? style?.activeColor
                ? style.activeColor
                : "blue"
              : style?.color
              ? style.color
              : "black"
          }`,
        }}
      >
        <div>{label}</div>
      </button>
      <div
        className={classNames(
          "absolute w-0 h-0 transition-all ease-in-out duration-300 bg-blue-500",
          {
            "bottom-0 left-0": position === "top",
            "top-0 left-0": position === "bottom" || position === "right",
            "top-0 right-0": position === "left",
            "!w-full !h-[2px]":
              (position === "bottom" || position === "top") && isActive,
            "!w-[2px] !h-full":
              (position === "left" || position === "right") && isActive,
          }
        )}
        style={{
          backgroundColor: `${
            isActive
              ? style?.activeColor
                ? style.activeColor
                : "blue"
              : style?.color
              ? style.color
              : "black"
          }`,
        }}
      />
      {closeable && (
        <AiOutlineClose
          onClick={() => handleRemoveItem(keyElement)}
          className="hover:cursor-pointer text-[#555555]"
        />
      )}
    </div>
  );
};

export default TabButton;
