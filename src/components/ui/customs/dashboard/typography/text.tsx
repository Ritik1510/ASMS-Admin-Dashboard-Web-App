import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("", {
  variants: {
    variant: {
      primary: "text-text-primary",
      secondary: "text-text-secondary",
      tertiary: "text-text-tertiary",
    },

    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

type TextProps = React.
  HTMLAttributes<HTMLElement> &
  VariantProps<typeof textVariants> & {
    as?: "p" | "span" | "div";
  };

export function Text({
  as: Comp = "p",
  variant,
  size,
  className,
  ...props
}: TextProps) {
  return (
    <Comp
      className={cn(textVariants({ variant, size }), className)}
      {...props}
    />
  );
}