import { replaceInFile } from "../deps.ts";
import { VscSnippetDefinition, VscSnippetVariant } from "../models/app.ts";
import { parseMultiline, replaceSymbol } from "../utils/general.ts";
import {
  $col,
  $colCode,
  $colCodeBlock,
  $row,
  $table,
  htmlComment,
  joinByDoubleNewLine,
  joinByNewLine,
} from "./table-html.ts";

type SnippetRow = {
  prefix: string;
  name: string;
  body: string | string[];
};

const truncateOptions = (str: string) => {
  const regex = /\|([^|]+)\|/g;
  return str.replace(regex, (_match, p1) => {
    const [first] = p1.split(",").map((o: string) => o.trim());
    return `|${first},...|`;
  });
};

const snippetRow = ({ prefix, name, body }: SnippetRow, lang?: string) => {
  const cols = joinByNewLine([
    $colCode(prefix),
    $col(name),
    $colCodeBlock(truncateOptions(parseMultiline(body)), lang),
  ]);

  return $row(cols);
};

const generateSnippetTable = (items: SnippetRow[], lang?: string) => {
  const headings = ["Prefix", "Name", "Body"];
  const rows = items.map((item) => snippetRow(item, lang));

  return $table(headings, rows);
};

const generateSnippetSection = ({ meta, snippets }: VscSnippetDefinition) => {
  const title = `### ${meta.title}`;
  const description = meta.description ?? "";
  const table = generateSnippetTable(
    Object.entries(snippets).map(([name, { body, prefix, description }]) => ({
      name: replaceSymbol(name),
      body,
      prefix: parseMultiline(prefix),
      description,
    })),
    meta.lang,
  );

  return joinByNewLine([title, description, table, ""]);
};

// there are no strict sections in this projects, maybe in the future divided by Vue, Nuxt, etc.
const generateVariantSection = (variant: VscSnippetVariant) => {
  const sections = variant.snippetDefinitions.map(generateSnippetSection);

  return joinByNewLine(sections);
};

export const generateDocs = (variants: VscSnippetVariant[]) => {
  return joinByDoubleNewLine(variants.map(generateVariantSection));
};

const docsGenId = "docs-gen";
const docsGen = {
  start: htmlComment(`START:${docsGenId}`),
  end: htmlComment(`END:${docsGenId}`),
};

const docsBlock = (s: string) => {
  return joinByNewLine([docsGen.start, s, docsGen.end]);
};

export const populateDocsBlock = async (input: string) => {
  const regex = new RegExp(
    `${docsGen.start}[\\s\\S]*?${docsGen.end}`,
    "g",
  );

  const file = "./README.md";
  const options = {
    files: file,
    from: regex,
    to: docsBlock(input),
  };

  try {
    const results = await replaceInFile(options);
    const readmeResult = results.find((r) => r.file === file);

    if (readmeResult?.hasChanged) {
      console.log("✅ README updated");
    } else {
      console.log("👍 README already up to date");
    }
  } catch (error) {
    console.error("Error while updating README:", error);
  }
};
