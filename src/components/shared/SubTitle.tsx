interface SubTitleProps {
  children: React.ReactNode;
}

export const SubTitle = ({ children }: SubTitleProps) => {
  return (
    <h1 className="text-heading-4 font-semibold text-0xl sm:text-1xl md:text-2xl">
      {" "}
      {children}{" "}
    </h1>
  );
};
