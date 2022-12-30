import { parse } from "./deps.ts";
import { generateDocs, populateDocsBlock } from "./docs-gen/snippets.ts";
import { variants } from "./snippets/app.ts";
import {
  convertToVscSnippet,
  generateSnippets,
  groupSnippets,
} from "./utils/snippets.ts";

const main = () => {
  const flags = parse(Deno.args, {
    boolean: ["snippets", "docs"],
    default: { snippets: false, docs: false },
  });

  if (!flags.snippets && !flags.docs) {
    return console.log(
      "Please specify at least one flag: --snippets or --docs",
    );
  }

  // Convert XDefinitions to VscDefinitions, for every variant
  const variantsAsVsc = variants.map((variant) => {
    const snippetDefinitions = variant.snippetDefinitions
      .map((def) => ({
        ...def,
        snippets: convertToVscSnippet(def.snippets),
      }));

    return { ...variant, snippetDefinitions };
  });

  if (flags.snippets) {
    console.log("\nGenerating snippets...");

    variantsAsVsc.forEach((variant) => {
      const vscSnippetDict = groupSnippets(
        variant.snippetDefinitions.map((def) => def.snippets),
      );
      generateSnippets(variant.fileName, vscSnippetDict);
    });
  }

  // important to know it generates docs off of defined xSnippets
  // so .code-snippets could be out of date if you haven't run --snippets
  if (flags.docs) {
    console.log("\nGenerating docs...");
    const docs = generateDocs(variantsAsVsc);
    populateDocsBlock(docs);
  }
};

main();
