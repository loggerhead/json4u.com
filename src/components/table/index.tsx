"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { isEmpty, keys as getKeys, reduce, uniq } from "lodash-es";

export function JsonTable({ data }: { data: any }) {
  return (
    <div className={"json-table-container w-full h-full overflow-auto pb-header"}>
      <ValueTable isRoot data={data}></ValueTable>
    </div>
  );
}

export function ValueTable({ data, isRoot = false }: { data: any; isRoot?: boolean }) {
  const [visible, setVisible] = useState(true);
  let t = "value";

  if (data === null) {
    t = "null";
  } else if (data === undefined) {
    t = "undefined";
  } else if (typeof data === "boolean") {
    t = "boolean";
  } else if (typeof data === "number") {
    t = "number";
  } else if (typeof data === "string") {
    t = "string";
  } else if (Array.isArray(data)) {
    t = "array";
  } else if (typeof data === "object") {
    t = "object";
  }

  // isZero
  if (isEmpty(data) && !(t === "boolean" || t === "number" || t === "null")) {
    if (t === "string") {
      return <span className="text-hl-empty">{'""'}</span>;
    } else if (t === "array") {
      return <span className="text-hl-empty">{"[]"}</span>;
    } else if (t === "object") {
      return <span className="text-hl-empty">{"{}"}</span>;
    } else {
      return <span className="text-hl-empty">{`${data}`}</span>;
    }
  } else if (t === "string") {
    return <span className="text-hl-string">{`${data}`}</span>;
  } else if (!(t === "array" || t === "object")) {
    return <span className="text-hl-value">{`${data}`}</span>;
  }

  return (
    <>
      {!isRoot && (
        <div
          className={cn("cursor-pointer codicon", visible ? "codicon-folding-expanded" : "codicon-folding-collapsed")}
          onClick={() => setVisible(!visible)}
        />
      )}
      <table
        className={cn(!visible && "hidden")}
        style={{ boxShadow: isRoot ? "none" : undefined, marginBottom: isRoot ? 0 : undefined }}
      >
        {t === "array" ? <ArrayTable data={data} /> : <ObjectTable data={data} />}
      </table>
    </>
  );
}

function ArrayTable({ data }: { data: any[] }) {
  const keys = uniq(
    reduce(
      data,
      (acc, v) => {
        return acc.concat(getKeys(v));
      },
      [] as string[],
    ),
  );

  return (
    <tbody>
      <tr>
        {keys.map(key => (
          <th key={key} className="bg-hl-key text-hl-key">{`${key}`}</th>
        ))}
      </tr>
      {data.map((row, i) => (
        <tr key={i}>
          {keys.map(key => (
            <th key={key}>
              <ValueTable data={row[key]}></ValueTable>
            </th>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

function ObjectTable({ data }: { data: any }) {
  const keys = getKeys(data);

  return (
    <tbody>
      {keys.map(key => (
        <tr key={key}>
          <td className="bg-hl-key text-hl-key">{`${key}`}</td>
          <td>
            <ValueTable data={data[key]}></ValueTable>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
