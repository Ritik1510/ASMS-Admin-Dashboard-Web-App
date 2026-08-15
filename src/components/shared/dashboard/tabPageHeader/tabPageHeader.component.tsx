import { cn } from "@/lib/utils";
import { tabPageHeaderConfigType } from "./tabPageHeader.types";
import { buttonVariants } from "@/components/ui/button";
import { Surface } from "@/components/ui/customs/dashboard/surface";

interface Props {
  config: tabPageHeaderConfigType;
}

export function PageHeader({ config }: Props) {
  return (
    <Surface
      className="
        w-full
        max-w-4xl
        mx-auto
        p-3 sm:p-4
      "
    >
      <div className="space-y-1">
        <h1 className="text-sm text-foreground">
          {config.title}
        </h1>

        <p className="text-sm text-muted-foreground">
          {config.des}
        </p>
      </div>

      <div
        className="
          mt-3
          flex
          w-full
          flex-wrap
          items-center
          justify-start
          gap-1.5
        "
      >
        {config.tags.map((tag) => (
          <a
            key={tag.label}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "shrink-0 whitespace-nowrap text-xs sm:text-sm md:text-sm lg:text-base]"
            )}
          >
            {tag.icon && <tag.icon className="size-2.5 md:size-3 lg:size-4" />}
            {tag.label}
          </a>
        ))}
      </div>
    </Surface>
  );
}