"use client";

import { useEffect, useState } from "react";
import { parse } from "@/utils/parse";

export default function Counter() {
  const [text, setText] = useState("");

  useEffect(() => {
    const foo = async () => {
      const tree = await parse('{"foo":123}');
      setText(tree.rootNode.toString());
    };

    foo();
  }, []);

  console.log("test", text);

  return (
    <div>
      <h2>hi</h2>
      <p>{text}</p>
    </div>
  );
}
