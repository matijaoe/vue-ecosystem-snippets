import { XSnippetDefinition } from "../../models/app.ts";

export const script: XSnippetDefinition = {
  meta: {
    title: "Script",
    description: "Script setup and composables",
    lang: "javascript",
  },
  snippets: {
    vref: {
      name: "ref",
      body: "const ${1:name} = ref($2)",
    },
  },
};
