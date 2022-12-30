import { XSnippetDefinition } from "../../models/app.ts";

export const template: XSnippetDefinition = {
  meta: {
    title: "Template",
    lang: "html",
  },
  snippets: {
    vfor: {
      name: "v-for",
      body: 'v-for="${2:item} in ${1:items}" :key="$2$3"',
    },
  },
};
