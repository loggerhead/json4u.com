import { useEffect, useState } from "react";
import { type Edge, type Node, useNodesInitialized, useReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import dagre from "dagre";

// https://reactflow.dev/api-reference/hooks/use-nodes-initialized
const useLayout = () => {
  const { getNodes, getEdges } = useReactFlow();
  const nodesInitialized = useNodesInitialized({ includeHiddenNodes: false });
  const [layoutedNodes, setLayoutedNodes] = useState(getNodes());

  useEffect(() => {
    if (nodesInitialized) {
      const { nodes } = layout(getNodes(), getEdges());
      setLayoutedNodes(nodes);
    }
  }, [nodesInitialized]);

  return layoutedNodes;
};

// https://ncoughlin.com/posts/react-flow-dagre-custom-nodes/
export function layout(nodes: Node[], edges: Edge[]) {
  // create dagre graph
  const dagreGraph = new dagre.graphlib.Graph();
  // this prevents error
  dagreGraph.setDefaultEdgeLabel(() => ({}));
  // https://github.com/dagrejs/dagre/wiki#configuring-the-layout
  dagreGraph.setGraph({
    rankdir: "LR",
    align: "UL",
    nodesep: 50,
    edgesep: 10,
    ranksep: 5,
  });

  nodes.forEach(node => dagreGraph.setNode(node.id, node));
  edges.forEach(edge => dagreGraph.setEdge(edge.source, edge.target));
  dagre.layout(dagreGraph);

  nodes = nodes.map(node => {
    const { x, y } = dagreGraph.node(node.id);
    return { ...node, position: { x, y } };
  });
  return { nodes, edges };
}

export default useLayout;
