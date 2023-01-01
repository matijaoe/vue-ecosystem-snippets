import { XSnippetDefinition } from "../../models/app.ts";

export const script: XSnippetDefinition = {
  meta: {
    title: "Pinia",
  },
  snippets: {
    pstore: {
      name: "Setup Pinia store",
      body: [
        "import { acceptHMRUpdate, defineStore } from 'pinia'",
        "",
        "export const ${1:useStore} = defineStore('${2:unique-id}', () => {",
        "\t$0",
        "\t",
        "\treturn {",
        "\t ",
        "\t}",
        "})",
        "",
        "if (import.meta.hot)",
        "\timport.meta.hot.accept(acceptHMRUpdate($1, import.meta.hot))",
        "",
      ],
    },
    "pstore:options": {
      name: "Setup Pinia store (Options)",
      body: [
        "import { acceptHMRUpdate, defineStore } from 'pinia'",
        "",
        "export const ${1:useStore} = defineStore('${2:unique-id}', {",
        "\tstate: () => ({",
        "\t  name: 'Evan',",
        "\t  count: 1,",
        "\t}),",
        "\tgetters: {",
        "\t  doubleCount: (state) => state.count * 2,",
        "\t},",
        "\tactions: {",
        "\t  increment() {",
        "\t    this.count++",
        "\t  },",
        "\t},",
        "})",
        "",
        "if (import.meta.hot)",
        "\timport.meta.hot.accept(acceptHMRUpdate($1, import.meta.hot))",
        "",
      ],
    },
    vuseStore: {
      name: "Use store",
      body: "const ${2:$1Store} = use${1/(.*)/${1:/capitalize}/}Store()",
    },
  },
};
