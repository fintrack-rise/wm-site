import type { ReactNode } from "react";

type MockWindowProps = {
  title: string;
  children: ReactNode;
  inverted?: boolean;
  footer?: ReactNode;
};

export function MockWindow({ title, children, inverted = false, footer }: MockWindowProps) {
  const border = inverted ? "border-background/10" : "border-foreground/10";
  const muted = inverted ? "text-background/40" : "text-muted-foreground";
  const dot = inverted ? "bg-background/20" : "bg-foreground/20";

  return (
    <div className={`overflow-hidden border ${inverted ? "bg-foreground" : "bg-background"} ${border}`}>
      <div className={`flex items-center justify-between border-b px-5 py-3 ${border}`}>
        <div className="flex gap-1.5">
          <div className={`h-2.5 w-2.5 rounded-full ${dot}`} />
          <div className={`h-2.5 w-2.5 rounded-full ${dot}`} />
          <div className={`h-2.5 w-2.5 rounded-full ${dot}`} />
        </div>
        <span className={`font-mono text-xs ${muted}`}>{title}</span>
      </div>
      <div className="p-5 sm:p-6">{children}</div>
      {footer ? <div className={`border-t px-5 py-3 ${border}`}>{footer}</div> : null}
    </div>
  );
}
