"use client";

import * as React from "react";
import { ElementRef, forwardRef, useState } from "react";
import JsonNode from "@/components/graph/JsonNode";
import { layout } from "@/components/graph/useLayout";
import {
  Background,
  Controls,
  Edge,
  Node,
  Position,
  ReactFlow,
  type ReactFlowInstance,
  type ReactFlowProps,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const Graph = forwardRef<ElementRef<typeof ReactFlow>, ReactFlowProps>(({ className, ...props }, ref) => {
  const nodes: Node[] = [
    {
      id: "1",
      sourcePosition: Position.Left,
      targetPosition: Position.Right,
      position: { x: 0, y: 0 },
      data: { label: "1" },
      type: "json",
    },
    {
      id: "2",
      sourcePosition: Position.Left,
      targetPosition: Position.Right,
      position: { x: 0, y: 0 },
      data: { label: "2" },
      type: "json",
    },
  ];
  const edges: Edge[] = [{ id: "e1-2", source: "1", target: "2" }];
  const { nodes: layoutedNodes, edges: layoutedEdges } = layout(nodes, edges);

  const [instance, setInstance] = useState<ReactFlowInstance<Node, Edge> | null>(null);

  return (
    <ReactFlow
      fitView
      nodeTypes={{ json: JsonNode }}
      maxZoom={2}
      nodes={layoutedNodes}
      edges={layoutedEdges}
      onInit={setInstance}
      onNodesChange={() => instance?.fitView()}
      {...props}
    >
      <Controls showInteractive={false} />
      <Background />
    </ReactFlow>
  );
});
Graph.displayName = "Graph";

export default Graph;
