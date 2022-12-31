import { ensureDirSync } from "../deps.ts";
import { VscSnippetDict, XSnippetDict } from "../models/app.ts";
import { addSymbol } from "./general.ts";

export const convertToVscSnippet = (snippets: XSnippetDict) => {
  return Object.entries(snippets)
    .reduce((acc, [prefix, { name, body, alt }]) => {
      const prefixes = [prefix];
      if (alt?.length) {
        prefixes.push(...alt);
      }
      acc[addSymbol(name)] = { prefix: prefixes, body };
      return acc;
    }, {} as VscSnippetDict);
};

export const groupSnippets = (dicts: VscSnippetDict[]) => {
  return dicts.reduce((acc, curr) => ({
    ...acc,
    ...curr,
  }));
};

export const generateSnippets = (name: string, data: VscSnippetDict) => {
  const path = "./dist";
  const fileName = `${name}.code-snippets`;
  try {
    ensureDirSync(path);
    const file = `${path}/${fileName}`;

    Deno.writeTextFileSync(
      file,
      JSON.stringify(data, null, 2),
    );

    console.log(`✅ ${fileName}`);
  } catch (error) {
    console.log(`❌ ${fileName}`);
    console.error(error);
  }
};
