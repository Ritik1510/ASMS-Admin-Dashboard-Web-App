// components/ui/surface.tsx

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const surfaceVariants = cva(
  "rounded-lg border bg-card text-card-foreground transition-colors",
  {
    variants: {
      shadow: {
        none: "",
        sm: "shadow-sm",
        md: "shadow-md",
        lg: "shadow-lg",
      },
      padding: {
        none: "",
        sm: "p-2",
        md: "p-4",
        lg: "p-6",
      },
      radius: {
        sm: "rounded-md",
        md: "rounded-lg",
        lg: "rounded-xl",
        xl: "rounded-2xl",
      },
    },
    defaultVariants: {
      shadow: "sm",
      padding: "sm",
      radius: "md",
    },
  }
);

type SurfaceProps = React.
  HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof surfaceVariants>;

export function Surface({
  className,
  shadow,
  padding,
  radius,
  ...props
}: SurfaceProps) {
  return (
    <div
      className={cn(
        surfaceVariants({
          shadow,
          padding,
          radius,
        }),
        className
      )}
      {...props}
    />
  );
}