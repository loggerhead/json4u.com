"use client";

import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";
import "@/lib/editor";
import { Editor as MonacoEditor } from "@monaco-editor/react";

const Editor = forwardRef<ElementRef<typeof MonacoEditor>, ComponentPropsWithoutRef<typeof MonacoEditor>>(
  ({ className, ...props }, ref) => {
    return (
      <MonacoEditor
        language="json"
        loading={null}
        options={{
          fontSize: 13, // 设置初始字体大小
          scrollBeyondLastLine: false, // 行数超过一屏时才展示滚动条
          automaticLayout: true, // 当编辑器所在的父容器的大小改变时，编辑器会自动重新计算并调整大小
          wordWrap: "off", // 关闭软换行。避免软换行时，点击出现不规则滚动的问题
          minimap: { enabled: true },
        }}
      />
    );
  },
);
Editor.displayName = "Editor";

export default Editor;
