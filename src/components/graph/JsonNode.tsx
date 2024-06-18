import { Handle, type NodeProps, Position } from "@xyflow/react";

export default function JsonNode({ data }: NodeProps) {
  return (
    <div className="bg-white border">
      <div className="min-w-fit text-[12px] gap-y-[2px]">
        <span className={"h-[12px]"}>
          <span className="mtk20">key</span>
          <span className="mtk1">:</span>
          <span className="mtk7">value-number</span>
          <span className="mtk5">value-default</span>
        </span>
      </div>
      <Handle type="source" position={Position.Left} isConnectable />
      <Handle type="target" position={Position.Right} isConnectable />
    </div>
  );
}
