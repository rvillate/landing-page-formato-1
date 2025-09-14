type ButtonBaseProps = {
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButtonProps = ButtonBaseProps & {
  as?: 'button';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonAsAnchorProps = ButtonBaseProps & {
  as: 'a';
  href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

export const Button = (props: ButtonProps) => {
  const { children, className = '' } = props;
  const baseClass = `inline-flex items-center justify-center px-6 py-3 rounded-full outline-none cursor-pointer border border-transparent ${className}`;

  if (props.as === 'a') {
    const { as: _as, className: _cn, children: _ch, ...anchorProps } = props as ButtonAsAnchorProps;
    return (
      <a {...anchorProps} className={baseClass}>
        {children}
      </a>
    );
  }

  const { as: _as, className: _cn2, children: _ch2, ...buttonProps } = props as ButtonAsButtonProps;
  return (
    <button {...buttonProps} className={baseClass}>
      {children}
    </button>
  );
};

