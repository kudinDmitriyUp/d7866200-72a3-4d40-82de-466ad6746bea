import type { ReactNode } from "react";
import { cls } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => (
  <div className={cls("p-3 xl:p-4 2xl:p-5 card rounded", className)}>
    {children}
  </div>
);

export default Card;
