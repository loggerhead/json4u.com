import * as React from "react";
import { cookies } from "next/headers";
import MainContainer from "@/components/editor/main-container";
import SideNav from "@/components/editor/sidenav";
import { Separator } from "@/components/ui/separator";
import { TooltipProvider } from "@/components/ui/tooltip";
import { isArray, size, sum } from "lodash-es";

export default function Page() {
  const defaultLayout = [50, 50];
  const storedLayout = cookies().get("react-resizable-panels:layout");
  let layout = defaultLayout;

  if (storedLayout) {
    try {
      layout = JSON.parse(storedLayout.value);
    } catch (SyntaxError) {
      /* empty */
    }
  }

  if (!(isArray(layout) && size(layout) === 2 && Math.abs(100 - sum(layout)) <= 1)) {
    layout = defaultLayout;
  }

  return (
    <TooltipProvider delayDuration={0}>
      <div className={"flex h-full w-full"}>
        <SideNav />
        <Separator orientation={"vertical"}></Separator>
        <MainContainer defaultLayout={layout} />
      </div>
    </TooltipProvider>
  );
}
