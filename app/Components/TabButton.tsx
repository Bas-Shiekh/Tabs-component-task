'use client'

interface TabButtonProps {
  isActive: boolean;
  keyElement: string;
  label: string;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({
  isActive,
  keyElement,
  label,
  onClick,
}) => {
  return (
    <button
      type="button"
      key={keyElement}
      onClick={onClick}
      className={`
            px-[0.6rem]
            py-[0.6rem]
            relative
            transition
            before:absolute
            before:w-0
            before:h-[2px]
            before:bg-blue-500
            before:bottom-0
            before:left-0
            before:ease-in-out before:duration-300
            ${isActive && "text-blue-500 before:!w-full"}
          `}
    >
      {label}
    </button>
  );
};

export default TabButton;
