import { XSnippetDefinition } from "../../models/app.ts";

export const codeSnippets: XSnippetDefinition = {
  meta: {
    title: "Code snippets",
    description: "Useful vue snippets and helpers",
  },
  snippets: {
    vcomposable: {
      name: "Vue define composable",
      body: [
        "export const ${1:useComposable} = () => {",
        "\t$0",
        "\t",
        "\treturn {",
        "\t\t",
        "\t}",
        "}",
        "",
      ],
      alt: ["vdc"],
    },
    vuse: {
      name: "Use composable",
      body: "const { $3 } = use${1/(.*)/${1:/capitalize}/}($2)",
      alt: ["vu"],
    },
    "vuse:alt": {
      name: "Use composable without destructuring",
      body: "const ${3:$1} = use${1/(.*)/${1:/capitalize}/}($2)",
      alt: ["vua"],
    },
    vmodel: {
      name: "Implement v-model",
      body: [
        "const props = defineProps<{",
        "\t${1:modelValue}: ${2:string}",
        "}>()",
        "",
        "const emit = defineEmits<{",
        "\t(e: 'update:$1', ${3:value}?: $2): void",
        "}>()",
        "",
        "const ${4:value} = computed({",
        "\tget: () => props.$1,",
        "\tset: (val: $2) => emit('update:$1', val),",
        "})",
      ],
    },
    "v:has-slot": {
      name: "Vue check for slots",
      body: [
        "const slots = useSlots()",
        "const hasSlot = (name: string) => !!slots[name]",
      ],
    },
  },
};
