// components/ui/surface.tsx

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const sectionVariants = cva(
  "w-full",
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
      background: {
        none: "",
        brand: ""
      }
    },
    defaultVariants: {
      shadow: "sm",
      padding: "sm",
    },
  }
);

type SectionProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof sectionVariants>;

export function Surface({
  className,
  shadow,
  padding,
  ...props
}: SectionProps) {
  return (
    <div
      className={cn(
        sectionVariants({
          shadow,
          padding,
        }),
        className
      )}
      {...props}
    />
  );
}