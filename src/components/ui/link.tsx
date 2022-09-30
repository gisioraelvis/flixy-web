import classNames from "classnames";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

export interface LinkProps extends NextLinkProps {
  className?: string;
  title?: string;
  target?: string;
  variant?: "button";
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({
  href,
  children,
  variant,
  title,
  target,
  className,
  ...props
}) => {
  return (
    <NextLink href={href}>
      <a
        className={classNames(
          {
            "focus:ring-accent-700' inline-flex h-9 flex-shrink-0 items-center justify-center rounded border border-transparent bg-accent px-3 py-0 text-sm font-semibold leading-none text-light outline-none transition duration-300 ease-in-out hover:bg-accent-hover focus:shadow focus:outline-none focus:ring-1":
              variant === "button",
          },
          className
        )}
        title={title}
        {...props}
      >
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
