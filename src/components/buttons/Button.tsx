import { IButton } from "../../lib/types/types";

const Button = ({ handleClick, style, children }: IButton) => {
  return (
    <button
      className={`${style} rounded-3xl bg-orange-500 text-white`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
