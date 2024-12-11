import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const ContentContainer = ({ children }: IProps) => {
  return (
    <section className="grid gap-x-4 gap-y-5 -4xl:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] -md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] -sm-table:grid-cols-2">
      {children}
    </section>
  );
};

export default ContentContainer;
