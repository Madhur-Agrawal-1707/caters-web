import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
  narrow = false,
}: {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-12",
        narrow ? "max-w-3xl" : "max-w-[88rem]",
        className
      )}
    >
      {children}
    </div>
  );
}
