type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className = "" }: Props) {
  return (
    <div
      className={`laptop:space-y-16 laptop:px-16 desktop:max-w-screen-laptop container relative mx-auto space-y-10 px-4 ${className}`}
    >
      {children}
    </div>
  );
}
