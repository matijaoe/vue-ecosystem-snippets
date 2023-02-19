import { XSnippetVariant } from "../../models/app.ts";
import { template } from "./template.ts";
import { script } from "./script.ts";

export const vueRouter: XSnippetVariant[] = [
  {
    fileName: "vue-router-script",
    snippetDefinitions: [script],
  },
  {
    fileName: "vue-router-template",
    snippetDefinitions: [template],
  },
];
