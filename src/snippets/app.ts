import { XSnippetVariant } from "../models/app.ts";
import { vue } from "./vue/app.ts";
import { pinia } from "./pinia/app.ts";
import { nuxt } from "./nuxt/app.ts";
import { vueUse } from "./vueuse/app.ts";

export const variants: XSnippetVariant[] = [
  ...vue,
  ...pinia,
  ...nuxt,
  ...vueUse,
];
