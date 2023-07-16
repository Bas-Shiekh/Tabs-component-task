'use client'

interface TabButtonProps {
  isActive: boolean;
  key: string;
  label: string;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({
  isActive,
  key,
  label,
  onClick,
}) => {
  return (
    <button
      type="button"
      key={key}
      onClick={onClick}
      className={`
            px-[1rem]
            py-[0.8rem]
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
