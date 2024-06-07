"use client";

import { forwardRef } from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface NavProps {
  isCollapsed: boolean;
  className?: string;
  btns: (Omit<NavButtonProps, "children"> & {
    title: string;
  })[];
}

export function Nav({ btns, isCollapsed, className }: NavProps) {
  return (
    <div
      data-collapsed={isCollapsed}
      className={cn("group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2", className)}
    >
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-px">
        {btns.map((btn, index) => (
          <NavButton key={index} isCollapsed={isCollapsed} {...btn} />
        ))}
      </nav>
    </div>
  );
}

interface NavButtonProps {
  title: string;
  icon: LucideIcon;
  isCollapsed?: boolean;
  active?: boolean;
  onClick?: () => void;
  popoverContent?: React.ReactNode;
}

function NavButton({ title, isCollapsed, active, onClick, ...props }: NavButtonProps) {
  const Btn = forwardRef<HTMLButtonElement, ButtonProps>((p, ref) => (
    <Button ref={ref} className={cn("justify-start", active && "bg-primary text-primary-foreground shadow")} {...p}>
      <props.icon className={cn("h-4 w-4", !isCollapsed && "mr-2")} />
      {p.children}
    </Button>
  ));
  Btn.displayName = "Btn";

  const WithPopover = ({ children }: React.HTMLAttributes<HTMLDivElement>) =>
    props.popoverContent ? (
      <Popover>
        <PopoverTrigger asChild>
          <Btn>{children}</Btn>
        </PopoverTrigger>
        <PopoverContent side="right" align="end" className={"w-fit"}>
          {props.popoverContent}
        </PopoverContent>
      </Popover>
    ) : (
      <Btn onClick={onClick}>{children}</Btn>
    );

  return isCollapsed ? (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <WithPopover>
          <span className="sr-only">{title}</span>
        </WithPopover>
      </TooltipTrigger>
      <TooltipContent side="right" className="flex items-center gap-4">
        {title}
      </TooltipContent>
    </Tooltip>
  ) : (
    <WithPopover>{title}</WithPopover>
  );
}
