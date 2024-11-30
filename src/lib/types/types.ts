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
  price: { "25": number; "30": number; "35": number } & number;
  piece?: number;
  size?: string;
  imgLink: string;
  description: string;
}
