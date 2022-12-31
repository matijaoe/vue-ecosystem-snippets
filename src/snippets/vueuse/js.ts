import { XSnippetDefinition } from "../../models/app.ts";

export const vueUseJs: XSnippetDefinition = {
  meta: {
    title: "VueUse",
  },
  snippets: {
    "vuse:vmodel": {
      "name": "Define custom v-model using useVModel",
      "body": [
        "const props = defineProps<{",
        "\t${1:modelValue}: ${2:string}",
        "}>()",
        "",
        "const emit = defineEmits<{",
        "\t(e: 'update:$1', ${3:value}?: $2): void",
        "}>()",
        "",
        "const ${4:value} = useVModel(props, '$1', emit)",
      ],
    },
    "vuse:hover": {
      "name": "VueUse Element hover",
      "body": [
        "const ${1:elem} = ref<${2|HTMLInputElement,HTMLDivElement,HTMLImageElement,HTMLFormElement|} | null>(null)",
        "const ${3:isHovered} = useElementHover($1)",
      ],
    },
    "vuse:fetch": {
      "name": "VueUse useFetch",
      "body": "const { data$2 } = useFetch('$1')",
    },
  },
};
