import { cn } from "@/lib/utils";
import { tabPageHeaderConfigType } from "./tabPageHeader.types";
import { buttonVariants } from "@/components/ui/button";
import { Surface } from "@/components/ui/customs/dashboard/surface";
import { SidebarTrigger } from "@/components/ui/sidebar";

interface Props {
  config: tabPageHeaderConfigType;
}

export function PageHeader({ config }: Props) {
  return (
    <Surface
      className="w-full max-w-4xl mx-auto
        py-3 gap-1 flex"
    >
      <SidebarTrigger className={"min-[1199px]:absolute min-[1199px]:top-0 min-[1199px]:left-0 hover:bg-brand-300"} />
      <div>
        <div className="space-y-1"> {/* space-y-1 adds a vertical margin of 0.25rem (which equals 4px) to every child element except the first one */}
          <h1 className="text-sm text-foreground">
            {config.title}
          </h1>
        </div>

        <p className="text-sm text-muted-foreground">
          {config.des}
        </p>

        <div
          className="mt-3 w-full gap-1.5
          flex flex-wrap items-center justify-start
        "
        >
          {config.tags.map((tag) => (
            <a
              key={tag.label}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "shrink-0 whitespace-nowrap text-xs sm:text-sm md:text-sm lg:text-base] hover:bg-brand-300 border-brand-900"
              )}
            >
              {tag.icon && <tag.icon className="size-2.5 md:size-3 lg:size-4" />}
              {tag.label}
            </a>
          ))}
        </div>
      </div>
    </Surface>
  );
}