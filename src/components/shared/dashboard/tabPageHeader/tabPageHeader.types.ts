import { LucideIcon } from "lucide-react";

export interface tabPageHeaderConfigType {
  title: string;
  des: string; 
  tags: tabPageHeaderConfigTagsType[]; 
}

export type tabPageHeaderConfigTagsType = {
  icon: LucideIcon;
  label: string; 
}