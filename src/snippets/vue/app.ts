import { XSnippetVariant } from "../../models/app.ts";

import { script } from "./script.ts";
import { template } from "./template.ts";
import { vue as vueBase } from "./vue.ts";

export const vue: XSnippetVariant[] = [
  {
    label: "Vue",
    fileName: "vue",
    snippetDefinitions: [vueBase],
  },
  {
    label: "Template",
    fileName: "vue-template",
    snippetDefinitions: [template],
  },
  {
    label: "Template",
    fileName: "vue-script",
    snippetDefinitions: [script],
  },
];
