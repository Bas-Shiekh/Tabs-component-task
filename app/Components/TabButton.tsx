"use client";

interface TabButtonProps {
  isActive: boolean;
  keyElement: string;
  label: string | React.ReactElement;
  size: string;
  position?: string;
  disabled: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({
  isActive,
  keyElement,
  label,
  onClick,
  size,
  position,
  disabled,
}) => {
  return (
    <button
      type="button"
      key={keyElement}
      onClick={onClick}
      disabled={disabled}
      className={`
        px-[0.2rem]
        py-[0.6rem]
        relative
        transition
        min-w-[50px]
        before:absolute
        before:w-0
        before:h-0
      before:bg-blue-500
        before:ease-in-out before:duration-300
        ${position === "top" && "before:bottom-0 before:left-0"}
        ${position === "bottom" && "before:top-0 before:left-0"}
        ${position === "left" && "before:top-0 before:right-0 !px-[1rem]"}
        ${position === "right" && "before:top-0 before:left-0 !px-[1rem]"}
        ${disabled && "cursor-not-allowed opacity-60"}
        ${
          isActive &&
          position === "top" &&
          "text-blue-500 before:!w-full before:!h-[2px]"
        }
        ${
          isActive &&
          position === "bottom" &&
          "text-blue-500 before:!w-full before:!h-[2px]"
        }
        ${
          isActive &&
          position === "left" &&
          "text-blue-500 before:!w-[2px] before:!h-full"
        }
        ${
          isActive &&
          position === "right" &&
          "text-blue-500 before:!w-[2px] before:!h-full"
        }
        ${size === "middle" && "text-[1.1rem]"}
        ${size === "large" && "text-[1.2rem]"}
      `}
    >
      {label}
    </button>
  );
};

export default TabButton;
