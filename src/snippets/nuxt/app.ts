import { script } from "./script.ts";
import { template } from "./template.ts";

export const nuxt = [
  {
    label: "Nuxt Script",
    fileName: "nuxt-script",
    snippetDefinitions: [script],
  },
  {
    label: "Nuxt Template",
    fileName: "nuxt-template",
    snippetDefinitions: [template],
  },
];
