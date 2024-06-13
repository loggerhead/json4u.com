// @ts-ignore
import Aioli from "@biowasm/aioli";

let CLI: unknown = null;

export async function init() {
  CLI = await new Aioli(
    [
      {
        tool: "jq",
        version: "1.7",
        urlPrefix: `${window.location.origin}/jq/1.7`,
      },
    ],
    {
      printInterleaved: false,
    },
  );
  console.log("load jq success.");
}

export async function jq(text: string, filter: string) {
  if (!CLI) {
    await init();
  }

  // @ts-ignore
  const paths: string[] = await CLI.mount([
    {
      name: "text.txt",
      data: text,
    },
  ]);

  const args = ["--monochrome-output", "--compact-output", filter].concat(paths);
  // @ts-ignore
  const { stdout, stderr }: { stdout: string; stderr: string } = await CLI.exec("jq", args);
  return [await stdout, stderr];
}
