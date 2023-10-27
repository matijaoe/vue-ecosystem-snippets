import { XSnippetDefinition } from "../../models/app.ts";

export const vueUseJs: XSnippetDefinition = {
  meta: {
    title: "VueUse (script)",
  },
  snippets: {
    "vRefAutoReset": {
      name: "VueUse refAutoReset",
      body:
        "const ${1:name} = refAutoReset('$2', ${3:1000})",
    },
    "vwatchArray": {
      name: "VueUse watchArray",
      body:
        "watchArray(${1:list}, (new${1/(.*)/${1:/capitalize}/}, old${1/(.*)/${1:/capitalize}/}, ${4:added}, ${5:removed}) => {\n\t$0\n})",
    },
    "vwatchAtMost": {
      name: "VueUse watchAtMost",
      body:
        "watchAtMost(${1:source}, (${2:val}) => {\n\t$0\n}, { max: ${3:3} })",
    },
    "vwatchDebounced": {
      name: "VueUse watchDebounced",
      body:
        "watchDebounced(${1:source}, (${2:val}) => {\n\t$0\n}, { debounce: ${3:500}, maxWait: ${4:1000} })",
    },
    "vwatchIgnorable": {
      name: "VueUse watchIgnorable",
      body:
        "const { stop:$3, ignoreUpdates:$4 } =  = watchIgnorable(${1:source}, (${2:val}) => {\n\t$0\n})",
    },
    "vwatchOnce": {
      name: "VueUse watchOnce",
      body: "watchOnce(${1:source}, (${2:val}) => {\n\t$0\n})",
    },
    "vwatchImmediate": {
      name: "VueUse watchImmediate",
      body:
        "vwatchImmediate(${1:source}, (${2:val}) => {\n\t$0\n})",
    },
    "vwatchPausable": {
      name: "VueUse watchPausable",
      body:
        "const { stop$3, pause$4, resume$5 } = watchPausable(${1:source}, (${2:val}) => {\n\t$0\n})",
    },
    "vwatchThrottled": {
      name: "VueUse watchThrottled",
      body:
        "watchThrottled(${1:source}, (${2:val}) => {\n\t$0\n}, { throttle: ${3:500} })",
    },
    "vwatchTriggerable": {
      name: "VueUse watchTriggerable",
      body:
        "const { trigger$3, ignoreUpdates$4 } = watchTriggerable(${1:source}, (${2:val}) => {\n\t$0\n})",
    },
    "vwatchWithFilter": {
      name: "VueUse watchWithFilter",
      body:
        "watchWithFilter(${1:source}, (${2:val}) => {\n\t$0\n}, { eventFilter: $3 })",
    },
    "vwhenever": {
      name: "VueUse whenever",
      body: "whenever(${1:source}, (${2:val}) => {\n\t$0\n})",
    },
    "vuse:vmodel": {
      name: "Implement v-model using useVModel",
      body: [
        "const ${2:value} = useVModel(props, '${1:modelValue}', emit)",
      ],
    },
    "vuse:vmodels": {
      name: "Implement v-model using useVModels",
      body: [
        "const { ${1:modelValue}$2 } = useVModels(props, emit)",
      ],
    },
    "vuse:hover": {
      name: "VueUse useElementHover",
      body: [
        "const ${1:elem} = ref<${2|HTMLInputElement,HTMLDivElement,HTMLImageElement,HTMLFormElement|} | null>(null)",
        "const ${3:isHovered} = useElementHover($1)",
      ],
    },
    "vuse:fetch": {
      name: "VueUse useFetch",
      body: "const { data: ${1:data} } = useFetch('$2'$3)",
      alt: ["vuf"],
    },
    vget: {
      name: "VueUse get",
      body: "get($1)",
    },
    vset: {
      name: "VueUse set",
      body: "set($1, $2)",
    },
    vdef: {
      name: "VueUse isDefined",
      body: "isDefined($1)",
    },
    "vuse:toggle": {
      name: "VueUse useToggle",
      body: "const [${1:value}, ${2:toggle}] = useToggle()",
      alt: ["vut"]
    },
    "vuse:toggle:fn": {
      name: "VueUse useToggle function",
      body: "const toggle${2/(.*)/${1:/capitalize}/} = useToggle($1)",
      alt: ["vutt"]
    },
    "vuse:import": {
      name: "Import from vueuse",
      body: "import { $1 } from '@vueuse/core'",
      alt: ["vuim"],
    },
  },
};
