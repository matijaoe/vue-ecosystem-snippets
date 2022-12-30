import { XSnippetVariant } from "../../models/app.ts";

import { script } from "./script.ts";
import { template } from "./template.ts";
import { vueSfc } from "./vue.ts";
import { style } from "./style.ts";

export const vue: XSnippetVariant[] = [
  {
    label: "Vue",
    fileName: "vue",
    snippetDefinitions: [vueSfc],
  },
  {
    label: "Template",
    fileName: "vue-template",
    snippetDefinitions: [template],
  },
  {
    label: "Style",
    fileName: "vue-style",
    snippetDefinitions: [style],
  },
  {
    label: "Template",
    fileName: "vue-script",
    snippetDefinitions: [script],
  },
];
