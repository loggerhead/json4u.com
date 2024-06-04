import Parser from "web-tree-sitter";

// load parser only once across all SyntaxTree instances
export const initParser = (async () => {
  await Parser.init({
    locateFile(scriptName: string, scriptDirectory: string) {
      return scriptName;
    },
  });
  const parser = new Parser();
  const Lang = await Parser.Language.load("https://unpkg.com/tree-sitter-wasms@0.1.11/out/tree-sitter-json.wasm");
  parser.setLanguage(Lang);
  return parser;
})();

export async function parse(code: string) {
  const parser = await initParser;
  return parser.parse(code);
}
