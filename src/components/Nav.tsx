"use client";

import { ElementRef, forwardRef, HTMLAttributes } from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { type PopoverProps } from "@radix-ui/react-popover";
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
  const Btn = forwardRef<ElementRef<typeof Button>, ButtonProps>((p, ref) => (
    <Button ref={ref} className={cn("justify-start", active && "bg-primary text-primary-foreground shadow")} {...p}>
      <props.icon className={cn("h-4 w-4", !isCollapsed && "mr-2")} />
      {p.children}
    </Button>
  ));
  Btn.displayName = "Btn";

  const PopoverBtn = forwardRef<ElementRef<typeof Popover>, PopoverProps>(({ children }, ref) => (
    <Popover>
      <PopoverTrigger asChild>
        <Btn>{children}</Btn>
      </PopoverTrigger>
      <PopoverContent side="right" align="end" className={"w-fit"}>
        {props.popoverContent}
      </PopoverContent>
    </Popover>
  ));
  PopoverBtn.displayName = "PopoverBtn";

  const BtnMayPopover = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ children }, ref) =>
    props.popoverContent ? <PopoverBtn>{children}</PopoverBtn> : <Btn onClick={onClick}>{children}</Btn>,
  );
  BtnMayPopover.displayName = "BtnMayPopover";

  return isCollapsed ? (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <BtnMayPopover>
          <span className="sr-only">{title}</span>
        </BtnMayPopover>
      </TooltipTrigger>
      <TooltipContent side="right" className="flex items-center gap-4">
        {title}
      </TooltipContent>
    </Tooltip>
  ) : (
    <BtnMayPopover>{title}</BtnMayPopover>
  );
}
