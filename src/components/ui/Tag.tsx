import type { LucideIcon } from "lucide-react";
import { cls } from "@/lib/utils";

interface TagProps {
  text: string;
  icon?: LucideIcon;
  className?: string;
}

const Tag = ({ text, icon: Icon, className = "" }: TagProps) => (
  <span className={cls("flex items-center gap-1 px-3 py-1 text-sm card rounded", className)}>
    {Icon && <Icon className="h-(--text-sm) w-auto" />}
    {text}
  </span>
);

export default Tag;
