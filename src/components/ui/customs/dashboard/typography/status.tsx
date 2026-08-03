import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const statusVariants = cva("font-sm", {
  variants: {
    variant: {
      success: "text-text-success",
      warning: "text-text-warning",
      info: "text-text-info",
      destructive: "text-text-destructive",
    },
    emphasis: {
      true: "font-semibold",
      false: "font-normal",
    }
  },
  defaultVariants: {
    variant: "success",
    emphasis: true,
  }
});

type StatusProps = React.
  HTMLAttributes<HTMLElement> &
  VariantProps<typeof statusVariants> & {
    as?: "p" | "span" | "div";
  };

export function Status({
  as: Comp = "p",
  variant,
  className,
  ...props
}: StatusProps) {
  return (
    <Comp
      className={cn(statusVariants({ variant }), className)}
      {...props}
    />
  )
}