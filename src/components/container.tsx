import { Collapsible } from "@/components/ui/collapsible";

export function Container({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={"w-full h-full flex flex-col"} {...props}>
      {children}
    </div>
  );
}

interface ContainerHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  setOpen?: (v: boolean) => void;
}

export function ContainerHeader({ children, open, setOpen, ...props }: ContainerHeaderProps) {
  return (
    <Collapsible asChild defaultOpen={false} open={open} onOpenChange={setOpen}>
      <div className="flex items-center min-h-fit h-[42px] px-4" {...props}>
        {children}
      </div>
    </Collapsible>
  );
}

export function ContainerContent({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={"w-full flex-grow"} {...props}>
      {children}
    </div>
  );
}
