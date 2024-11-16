import { IButton } from "../../lib/types/types";

const Button = ({ handleClick, style, children }: IButton) => {
  return (
    <button
      className={`${style} text-white bg-orange-500 px-4 py-2 rounded-full`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
