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
        "export const use${1/(.*)/${1:/pascalcase}/} = () => {",
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
    "vcomposable:file": {
      name: "Vue define composable in file",
      body: [
        "export const use${TM_FILENAME_BASE/^(.*)$/${1:/pascalcase}/} = () => {",
        "\t$0",
        "\t",
        "\treturn {",
        "\t\t",
        "\t}",
        "}",
        "",
      ],
      alt: ["vdcf"],
    },
    vuse: {
      name: "Use composable",
      body: "const ${2:$1} = use${1/(.*)/${1:/capitalize}/}($3)",
      alt: ["vu"],
    },
    vused: {
      name: "Use composable with destructuring",
      body: "const { $2 } = use${1/(.*)/${1:/capitalize}/}($3)",
      alt: ["vud"],
    },
    "vmodel:manual": {
      name: "Implement v-model manually",
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
