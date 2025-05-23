import { cn } from "@/lib/utils";

interface HeadingProps{
 title: string;
  className?: string;
  children?:React.ReactNode;
}
export function Heading1({
  title,
  className,
  children
}: HeadingProps) {
  return (
    <h1 className={cn("text-2xl flex items-center gap-2 mb-6 tracking-tighter font-bold", className)}>
      {title} {children}
    </h1>
  );
}

export function Heading2({
  title,
  className,children
}: HeadingProps) {
  return (
    <h2 className={cn("text-xl flex items-center gap-2 mb-3 tracking-tight font-bold", className)}>
      {title} {children}
    </h2>
  );
}
