import { cn } from "@/lib/utils";

export function Heading1({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <h1 className={cn("text-2xl mb-6 tracking-tighter font-bold", className)}>
      {title}
    </h1>
  );
}

export function Heading2({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <h2 className={cn("text-xl mb-3 tracking-tight font-bold", className)}>
      {title}
    </h2>
  );
}
