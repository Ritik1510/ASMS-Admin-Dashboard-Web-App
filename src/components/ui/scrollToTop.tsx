"use client";

import * as React from "react";
import { Button } from "@base-ui/react";
import { ArrowUpIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const positionVariants = cva(
  "fixed z-50 transition-all duration-300",
  {
    variants: {
      position: {
        "bottom-right": "bottom-6 right-6",
        "bottom-left": "bottom-6 left-6",
        "top-right": "top-6 right-6",
        "top-left": "top-6 left-6",
      },
    },
    defaultVariants: {
      position: "bottom-right",
    },
  }
);

type ScrollToTopProps =
  React.ComponentProps<typeof Button> &
  VariantProps<typeof positionVariants>;

export function ScrollToTop({
  position,
  className,
  onClick,
  children,
  ...props
}: ScrollToTopProps) {
  return (
    <Button
      className={cn(positionVariants({ position }), className)}
      onClick={(event) => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        onClick?.(event);
      }}
      {...props}
    >
      {children ?? <ArrowUpIcon className="size-5 cursor-pointer" />}
    </Button>
  );
}