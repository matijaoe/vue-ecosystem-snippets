import { XSnippetDefinition } from "../../models/app.ts";

export const script: XSnippetDefinition = {
  meta: {
    title: "Vue Macros",
    lang: "javascript",
  },
  snippets: {
    vdefineModel: {
      name: "Define model",
      body: [
        "const { modelValue$2 } = defineModel<{",
        "\tmodelValue: ${1:string}",
        "}>()"
      ],
      alt: ["vmacro:model"]
    },
    vdefinePropsRefs: {
      name: "Define props refs",
      body: [
        "const { $2 } = definePropsRefs<{",
        "\t$1",
        "}>()"
      ],
      alt: ["vmacro:props"]
    },
    vdefineOptions: {
      name: "Define options",
      body: [
        "defineOptions({",
        "\t$0",
        "})"
      ],
      alt: ["vmacro:options"]
    },
    vdefineSlots: {
      name: "Define slots",
      body: [
        "defineSlots<{",
        "\t$0",
        "}>()"
      ],
      alt: ["vmacro:slots"]
    },
    vdefineRender: {
      name: "Define render",
      body: [
        "defineRender(",
        "\t$0",
        ")"
      ],
      alt: ["vmacro:render"]
    },
    "vdefineRender:fn": {
      name: "Define render function",
      "body": [
        "defineRender(() => {",
        "\treturn (",
        "\t\t$0",
        "\t)",
        "})"
      ],
      alt: ["vmacro:render:fn"]
    },
  }
}
