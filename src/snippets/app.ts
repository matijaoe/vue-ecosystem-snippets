import { XSnippetVariant } from "../models/app.ts";
import { nuxt } from "./nuxt/app.ts";
import { pinia } from "./pinia/app.ts";
import { vueRouter } from "./vue-router/app.ts";
import { vue } from "./vue/app.ts";
import { vueUse } from "./vueuse/app.ts";

export const variants: XSnippetVariant[] = [
  ...vue,
  ...vueRouter,
  ...pinia,
  ...nuxt,
  ...vueUse,
];
