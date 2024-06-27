"use client";

import * as React from "react";
import { useEffect } from "react";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";

export function Container({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={"relative w-full h-full flex flex-col"} {...props}>
      {children}
    </div>
  );
}

interface ContainerHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  mode?: string;
  modeHeaders?: { [key: string]: React.ReactNode };
}

export function ContainerHeader({ children, mode, modeHeaders, ...props }: ContainerHeaderProps) {
  const [open, setOpen] = React.useState(false);
  const modeHeader = modeHeaders?.[mode ?? ""];
  const showModeHeader = !!modeHeader;

  useEffect(() => {
    setOpen(showModeHeader);
  }, [showModeHeader]);

  return (
    <>
      <Collapsible className={"absolute z-10 w-full"} defaultOpen={false} open={open} onOpenChange={setOpen}>
        <div className={"flex items-center w-full min-h-fit h-header px-4"} {...props}>
          {children}
        </div>
        <CollapsibleContent className={"px-4"}>{showModeHeader ? modeHeader : null}</CollapsibleContent>
      </Collapsible>
      <Separator className={"mt-[42px]"} />
    </>
  );
}

export function ContainerContent({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={"w-full max-h-full flex-grow"} {...props}>
      {children}
    </div>
  );
}
