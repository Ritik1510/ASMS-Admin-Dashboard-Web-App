import { cn } from "@/lib/utils";
import { tabPageHeaderConfigType } from "./tabPageHeader.types";
import { buttonVariants } from "@/components/ui/button";
import { Surface } from "@/components/ui/customs/dashboard/surface";

interface Props {
  config: tabPageHeaderConfigType;
}

export function PageHeader({ config }: Props) {
  return (
    <Surface className="grid w-[70%] mx-auto">
      <div>
        <h1 className="text-sm text-foreground">{config.title}</h1>
      </div>
      <div>
        <p className="text-sm">{config.des}</p>
      </div>
      <div className="w-full flex justify-end items-center gap-1">
        {config.tags.map(tag => (
          <a key={tag.label} className={cn(buttonVariants({ variant: "outline" }), "text-sm")}>
            {tag.icon && <tag.icon />}
            {tag.label}
          </a>
        ))}
      </div>
    </Surface>
  );
}