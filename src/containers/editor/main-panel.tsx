"use client";

import * as React from "react";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import LeftPanel from "@/containers/editor/left-panel";
import RightPanel from "@/containers/editor/right-panel";
import StatusBar from "@/containers/editor/statusbar";
import { cn } from "@/lib/utils";

interface MainPanelProps {
  defaultLayout: number[];
  defaultCollapsed: boolean;
}

export default function MainPanel({ defaultLayout = [50, 50], defaultCollapsed = false }: MainPanelProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);

  return (
    <div className="w-full h-full flex flex-col">
      <ResizablePanelGroup
        className={"flex-grow"}
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
        }}
      >
        <ResizablePanel defaultSize={defaultLayout[0]} minSize={0}>
          <LeftPanel />
        </ResizablePanel>
        <ResizableHandle withHandle className={cn("hover:bg-blue-600", isCollapsed && "w-3")} />
        <ResizablePanel
          defaultSize={defaultLayout[1]}
          minSize={10}
          collapsible={true}
          onCollapse={() => {
            setIsCollapsed(true);
            document.cookie = "react-resizable-panels:collapsed=true";
          }}
          onExpand={() => {
            setIsCollapsed(false);
            document.cookie = "react-resizable-panels:collapsed=false";
          }}
          className={cn(isCollapsed && "transition-all duration-300 ease-in-out")}
        >
          <RightPanel />
        </ResizablePanel>
      </ResizablePanelGroup>
      <Separator />
      <StatusBar />
    </div>
  );
}
