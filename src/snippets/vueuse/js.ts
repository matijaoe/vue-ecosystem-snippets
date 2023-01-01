import { XSnippetDefinition } from "../../models/app.ts";

// TODO
/**
 * - until
 * - callback options for every watcher
 * - array methods
 * - date format
 * - timeago
 * - get, set
 */
export const vueUseJs: XSnippetDefinition = {
  meta: {
    title: "VueUse",
  },
  snippets: {
    "vwatchArray": {
      "name": "VueUse watchArray",
      "body":
        "watchArray(${1:list}, (new${1/(.*)/${1:/capitalize}/}, old${1/(.*)/${1:/capitalize}/}, ${4:added}, ${5:removed}) => {\n\t$0\n})",
    },
    "vwatchAtMost": {
      "name": "VueUse watchAtMost",
      "body":
        "watchAtMost(${1:source}, (${2:val}) => {\n\t$0\n}, { max: ${3:3} })",
    },
    "vwatchDebounced": {
      "name": "VueUse watchDebounced",
      "body":
        "watchDebounced(${1:source}, (${2:val}) => {\n\t$0\n}, { debounce: ${3:500}, maxWait: ${4:1000} })",
    },
    "vwatchIgnorable": {
      "name": "VueUse watchIgnorable",
      "body":
        "const { stop:$3, ignoreUpdates:$4 } =  = watchIgnorable(${1:source}, (${2:val}) => {\n\t$0\n})",
    },
    "vwatchOnce": {
      "name": "VueUse watchOnce",
      "body": "watchOnce(${1:source}, (${2:val}) => {\n\t$0\n})",
    },
    "vwatchPausable": {
      "name": "VueUse watchPausable",
      "body":
        "const { stop$3, pause$4, resume$5 } = watchPausable(${1:source}, (${2:val}) => {\n\t$0\n})",
    },
    "vwatchThrottled": {
      "name": "VueUse watchThrottled",
      "body":
        "watchThrottled(${1:source}, (${2:val}) => {\n\t$0\n}, { throttle: ${3:500} })",
    },
    "vwatchTriggerable": {
      "name": "VueUse watchTriggerable",
      "body":
        "const { trigger$3, ignoreUpdates$4 } = watchTriggerable(${1:source}, (${2:val}) => {\n\t$0\n})",
    },
    "vwatchWithFilter": {
      "name": "VueUse watchWithFilter",
      "body":
        "watchWithFilter(${1:source}, (${2:val}) => {\n\t$0\n}, { eventFilter: $3 })",
    },
    "vwhenever": {
      "name": "VueUse whenever",
      "body": "whenever(${1:source}, (${2:val}) => {\n\t$0\n})",
    },
    "vuse:vmodel": {
      "name": "Implement v-model using useVModel",
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
      "name": "VueUse useElementHover",
      "body": [
        "const ${1:elem} = ref<${2|HTMLInputElement,HTMLDivElement,HTMLImageElement,HTMLFormElement|} | null>(null)",
        "const ${3:isHovered} = useElementHover($1)",
      ],
    },
    "vuse:fetch": {
      "name": "VueUse useFetch",
      "body": "const { data$2 } = useFetch('$1')",
    },
    "vget": {
      "name": "VueUse get",
      "body": "get($1)",
    },
    "vset": {
      "name": "VueUse set",
      "body": "set($1, $2)",
    },
  },
};
