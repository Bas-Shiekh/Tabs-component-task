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
  color?: string;
  closeable: boolean;
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
  color,
  handleRemoveItem,
}) => {
  return (
    <div className="flex gap-3 items-center relative shrink-0">
      <button
        type="button"
        key={keyElement}
        onClick={onClick}
        disabled={disabled}
        className={classNames(
          "px-[0.2rem] py-[0.6rem] transition before:absolute before:w-0 before:h-0 before:bg-blue-500 before:ease-in-out before:duration-300",
          {
            "text-[1.1rem]": size === "middle",
            "text-[1.2rem]": size === "large",
            "cursor-not-allowed opacity-60": disabled,
            "before:bottom-0 before:left-0": position === "top",
            "before:top-0 before:left-0": position === "bottom",
            "before:top-0 before:right-0 !px-[1rem]": position === "left",
            "before:top-0 before:left-0 !px-[1rem]": position === "right",
            "text-blue-500 before:!w-full before:!h-[2px]":
              (position === "bottom" || position === "top") && isActive,
            "text-blue-500 before:!w-[2px] before:!h-full":
              (position === "left" || position === "right") && isActive,
          }
        )}
      >
        <div>{label}</div>
      </button>
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

// {
//   `
//         px-[0.2rem]
//         py-[0.6rem]
//         relative
//         transition
//         min-w-[50px]
//         before:absolute
//         before:w-0
//         before:h-0
//         before:bg-blue-500
//         before:ease-in-out before:duration-300
//         ${position === "top" && "before:bottom-0 before:left-0"}
//         ${position === "bottom" && "before:top-0 before:left-0"}
//         ${position === "left" && "before:top-0 before:right-0 !px-[1rem]"}
//         ${position === "right" && "before:top-0 before:left-0 !px-[1rem]"}
//         ${disabled && "cursor-not-allowed opacity-60"}
//         ${
//           isActive &&
//           position === "top" &&
//           "text-blue-500 before:!w-full before:!h-[2px]"
//         }
//         ${
//           isActive &&
//           position === "bottom" &&
//           "text-blue-500 before:!w-full before:!h-[2px]"
//         }
//         ${
//           isActive &&
//           position === "left" &&
//           "text-blue-500 before:!w-[2px] before:!h-full"
//         }
//         ${
//           isActive &&
//           position === "right" &&
//           "text-blue-500 before:!w-[2px] before:!h-full"
//         }
//         ${size === "middle" && "text-[1.1rem]"}
//         ${size === "large" && "text-[1.2rem]"}
//       `;
// }
