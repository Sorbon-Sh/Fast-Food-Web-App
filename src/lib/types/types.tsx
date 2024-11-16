import { ReactNode } from "react";

export interface IButton {
  handleClick?: () => void;
  style?: string;
  children: ReactNode;
}
