import { loader } from "@monaco-editor/react";
// 查询框的 icon 图标以及折叠图标
import "monaco-editor/esm/vs/base/browser/ui/codicons/codiconStyles";
import "monaco-editor/esm/vs/editor/contrib/symbolIcons/browser/symbolIcons.js";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

// 进行 monaco editor 的初始化
loader.config({ monaco });
