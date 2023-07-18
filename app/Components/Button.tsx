"use client";
import classNames from 'classnames'

interface ButtonProps {
  onClick: any;
  value: string;
  position?: string;
  size?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, value, position, size }) => {

  return (
  <button
    type="button"
    onClick={onClick}
    value={value}
    className={classNames(
      "border border-blue-500 px-4 py-2 rounded-lg capitalize",
      { "bg-blue-500 text-white": value === position || value === size }
    )}
  >
    {value}
  </button>
)};

export default Button;
