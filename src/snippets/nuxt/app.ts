import { script } from "./script.ts";
import { template } from "./template.ts";

export const nuxt = [
  {
    fileName: "nuxt-script",
    snippetDefinitions: [script],
  },
  {
    fileName: "nuxt-template",
    snippetDefinitions: [template],
  },
];
