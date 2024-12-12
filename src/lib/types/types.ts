import { ReactNode } from "react";

export interface IButton {
  handleClick?: () => void;
  style?: string;
  children: ReactNode;
}

export interface IDataSupabase {
  id: number;
  title: string;
  //* Типитизация объекта в объекте
  price: object & number;
  priceObj?: number;
  piece?: number;
  size?: string;
  imgLink: string;
  description: string;
}
