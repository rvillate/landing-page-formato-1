interface SubTitleProps {
  children: React.ReactNode;
}

export const SubTitle = ({ children }: SubTitleProps) => {
  return (
    <h1 className="text-heading-4 font-semibold text-1xl sm:text-2xl md:text-3xl">
      {" "}
      {children}{" "}
    </h1>
  );
};
