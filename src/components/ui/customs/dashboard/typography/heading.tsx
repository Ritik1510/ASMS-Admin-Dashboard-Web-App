// components/ui/typography/heading.tsx

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva(
  "tracking-tight",
  {
    variants: {
      level: {
        page: "text-text-page text-3xl font-bold",
        section: "text-text-section text-2xl font-semibold",
        card: "text-text-heading text-lg font-semibold",
      },
    },
    defaultVariants: {
      level: "section",
    },
  }
);

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants> & {
    as?: "h1" | "h2" | "h3" | "h4";
  };

export function Heading({
  as: Comp = "h2",
  level,
  className,
  ...props
}: HeadingProps) {
  return (
    <Comp
      className={cn(headingVariants({ level }), className)}
      {...props}
    />
  );
}