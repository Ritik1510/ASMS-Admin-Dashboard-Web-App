import { cn } from "@/lib/utils";
import { tabPageHeaderConfigType } from "./tabPageHeader.types";
import { buttonVariants } from "@/components/ui/button";
import { Surface } from "@/components/ui/customs/surface";
import { SidebarTrigger } from "@/components/ui/sidebar";

interface Props {
  config: tabPageHeaderConfigType;
}

export function PageHeader({ config }: Props) {
  return (
    <Surface className="grid w-[65%]">
      <div>
         <SidebarTrigger className=""/>
      </div>
      <div>
        <h1 className="text-sm">{config.title}</h1>
      </div>
      <div>
        <p className="text-sm">{config.des}</p>
      </div>
      <div className="w-full flex justify-end items-center">
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