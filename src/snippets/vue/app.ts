import { XSnippetVariant } from "../../models/app.ts";

import { codeSnippets } from "./code-snippets.ts";
import { script } from "./script.ts";
import { style } from "./style.ts";
import { template } from "./template.ts";
import { vueSfc } from "./vue.ts";

export const vue: XSnippetVariant[] = [
  {
    fileName: "vue",
    snippetDefinitions: [vueSfc],
  },
  {
    fileName: "vue-template",
    snippetDefinitions: [template],
  },
  {
    fileName: "vue-style",
    snippetDefinitions: [style],
  },
  {
    fileName: "vue-script",
    snippetDefinitions: [script, codeSnippets],
  },
];
