import { XSnippetDefinition } from "../../models/app.ts";

export const reactivityTransform: XSnippetDefinition = {
  meta: {
    title: "Reactivity Transform",
    description:
      "[Reactivity Transform](https://vuejs.org/guide/extras/reactivity-transform.html) is currently an experimental feature. It is disabled by default and requires [explicit opt-in](https://vuejs.org/guide/extras/reactivity-transform.html#explicit-opt-in).",
    lang: "javascript",
  },
  snippets: {
    vref$: {
      name: "Vue $ref",
      body: "const ${1:name} = \\$ref($2)",
    },
    vcomputed$: {
      name: "Vue $computed",
      body: "const ${1:name} = \\$computed(() => $2)",
    },
    "vcomputed-gs$": {
      name: "Vue $computed (get/set)",
      body: [
        "const ${1:name} = \\$computed({",
        "\tget: () => ${2},",
        "\tset: (${3:value}: ${4:type}) => {",
        "\t\t${5}",
        "\t},",
        "})",
      ],
    },
    "v$": {
      name: "Vue $() destructuring",
      body: "$($1)",
    },
    "v$$": {
      name: "Vue $$$() escape hint",
      body: "$$($1)",
    },
  },
};
