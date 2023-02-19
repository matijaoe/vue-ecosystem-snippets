import { XSnippetVariant } from "../../models/app.ts";
import { template } from "./template.ts";
import { script } from "./script.ts";

export const vueRouter: XSnippetVariant[] = [
  {
    label: "Vue Router",
    fileName: "vue-router-script",
    snippetDefinitions: [script],
  },
  {
    label: "Vue Router",
    fileName: "vue-router-template",
    snippetDefinitions: [template],
  },
];
