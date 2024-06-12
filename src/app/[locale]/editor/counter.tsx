"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { jq } from "@/lib/jq";

export default function Counter() {
  const hasWindow = typeof window !== "undefined";
  const worker = useRef<Worker | null>(null);

  // 初始化 web worker
  useEffect(() => {
    if (hasWindow) {
      worker.current = new Worker(new URL("@/lib/worker.ts", import.meta.url));

      worker.current.onmessage = event => {
        console.log("received message in main thread:", event);
      };

      return () => worker.current!.terminate();
    }
  }, [hasWindow]);

  return (
    <div>
      <Button
        size={"sm"}
        onClick={async () => {
          worker.current!.postMessage({ msg: "hi" });
          const r = await jq('{"foo": 1}', ".foo");
          console.log(r);
        }}
      >
        Ghost
      </Button>
    </div>
  );
}
