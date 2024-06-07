"use client";

import * as React from "react";
import LeftContainer from "@/components/editor/left-container";
import RightContainer from "@/components/editor/right-container";
import StatusBar from "@/components/editor/statusbar";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";

export default function MainContainer({ defaultLayout }: { defaultLayout: number[] }) {
  return (
    <div className="w-full h-full flex flex-col">
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
        }}
      >
        <ResizablePanel defaultSize={defaultLayout[0]} minSize={0}>
          <LeftContainer />
        </ResizablePanel>
        <ResizableHandle withHandle className="hover:bg-blue-600" />
        <ResizablePanel defaultSize={defaultLayout[1]} minSize={0.1}>
          <RightContainer />
        </ResizablePanel>
      </ResizablePanelGroup>
      <Separator />
      <StatusBar />
    </div>
  );
}
