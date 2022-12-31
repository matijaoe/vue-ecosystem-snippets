import { XSnippetVariant } from "../models/app.ts";
import { vue } from "./vue/app.ts";
import { pinia } from "./pinia/app.ts";

export const variants: XSnippetVariant[] = [
  ...vue,
  ...pinia,
];
