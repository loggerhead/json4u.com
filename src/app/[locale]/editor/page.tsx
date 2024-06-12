import * as React from "react";
import { cookies } from "next/headers";
import { Separator } from "@/components/ui/separator";
import { TooltipProvider } from "@/components/ui/tooltip";
import MainPanel from "@/containers/editor/main-panel";
import SideNav from "@/containers/editor/sidenav";
import { safeParseCookie } from "@/lib/utils";

export default function Page() {
  const layout = cookies().get("react-resizable-panels:layout");
  const collapsed = cookies().get("react-resizable-panels:collapsed");

  const defaultLayout = safeParseCookie(layout);
  const defaultCollapsed = safeParseCookie(collapsed);

  return (
    <TooltipProvider delayDuration={0}>
      <div className={"flex h-full w-full"}>
        <SideNav />
        <Separator orientation={"vertical"}></Separator>
        <MainPanel defaultLayout={defaultLayout} defaultCollapsed={defaultCollapsed} />
      </div>
    </TooltipProvider>
  );
}
