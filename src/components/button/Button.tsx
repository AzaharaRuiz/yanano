import type { MouseEvent, ReactNode } from "react";
import cx from "classnames";

import styles from "./Button.module.css";

const SIZES = {
  XS: "xs",
  SM: "sm",
  MD: "md",
  LG: "lg",
};
type SizesType = keyof typeof SIZES;

export const VARIANTS = {
  PINK: "pink",
  BLUE: "blue",
} as const;

export type VariantsType = keyof typeof VARIANTS;

interface ButtonProps {
  children?: ReactNode;
  disabled?: boolean;
  isFullWidth?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  size?: typeof SIZES[SizesType];
  title?: string;
  variant?: typeof VARIANTS[VariantsType];
}

export default function Button({
  children,
  disabled,
  isFullWidth,
  onClick,
  size = SIZES.MD,
  variant = VARIANTS.PINK,
  title,
}: ButtonProps) {
  return (
    <button
      className={cx(
        styles.button,
        styles[`button--${size}`],
        styles[`button--${variant}`],
        isFullWidth && styles[`button--fullwidth`]
      )}
      disabled={disabled}
      onClick={onClick}
      title={title}
    >
      {children}
    </button>
  );
}

export { SIZES as buttonSizes, VARIANTS as buttonVariants };
