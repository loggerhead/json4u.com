// @ts-ignore
import Aioli from "@biowasm/aioli";

const version = "1.7";
const CLI = await new Aioli(
  [
    {
      tool: "jq",
      version: version,
      urlPrefix: `https://cdn.json4u.com/jq/${version}`,
    },
  ],
  {
    printInterleaved: false,
  },
);

export async function jq(text: string, filter: string) {
  const paths = await CLI.mount([
    {
      name: "text.txt",
      data: text,
    },
  ]);

  const args = ["--monochrome-output", "--compact-output", filter].concat(paths);
  const { stdout, stderr } = await CLI.exec("jq", args);
  return [await stdout, stderr];
}
