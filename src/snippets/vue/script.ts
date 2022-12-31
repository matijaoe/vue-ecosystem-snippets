import { XSnippetDefinition } from "../../models/app.ts";

// TODO
/**
 * - custom ref
 * - defineAsyncComponent with dynamic import
 */
export const script: XSnippetDefinition = {
  meta: {
    title: "Script",
    description: "Script setup and composables",
    lang: "javascript",
  },
  snippets: {
    vref: {
      name: "Vue ref",
      body: "const ${1:name} = ref($2)",
      alt: ["vr"],
    },
    "vref:ts": {
      name: "Vue ref (typed)",
      body: "const ${1:name} = ref<$2>($3)",
      alt: ["vrts"],
    },
    vcomputed: {
      name: "Vue computed",
      body: "const ${1:name} = computed(() => $2)",
      alt: ["vc"],
    },
    "vcomputed:ts": {
      name: "Vue computed (typed)",
      body: "const ${1:name} = computed<$2>(() => $3)",
      alt: ["vcts"],
    },
    "vcomputed-gs": {
      name: "Vue computed (get/set)",
      body: [
        "const ${1:name} = computed({",
        "\tget: () => ${2},",
        "\tset: (${3:value}: ${4:string}) => {",
        "\t\t${5}",
        "\t},",
        "})",
      ],
    },
    vreactive: {
      name: "Vue reactive",
      body: "const ${1:name} = reactive({$2})",
      alt: ["vrea"],
    },
    "vreactive:ts": {
      name: "Vue reactive (typed)",
      body: "const ${1:name}: ${2:type} = reactive({$3})",
    },
    vtoRef: {
      name: "Vue toRef",
      body: "const ${1:name} = toRef(${2:object}, '${3}')",
    },
    vtoRefs: {
      name: "Vue toRefs",
      body: "const $1 = toRefs(${2:object})",
    },
    vshallowRef: {
      name: "Vue shallowRef",
      body: "const ${1:name} = shallowRef($2)",
    },
    vunref: {
      name: "Vue unref",
      body: "const ${1:unwrapped} = unref(${2:ref})",
    },
    vreadonly: {
      name: "Vue readonly",
      body: "const ${1:copy} = readonly(${2:object})",
    },
    "vref:elem": {
      name: "Vue element ref",
      body:
        "const ${1:elem} = ref<${2|HTMLInputElement,HTMLInputElement,HTMLDivElement,HTMLFormElement|} | null>(null)",
    },
    vwatchEffect: {
      name: "Vue watchEffect",
      body: [
        "watchEffect(() => {",
        "\t$0",
        "})",
      ],
    },
    vwatch: {
      name: "Vue watch source",
      body: [
        "watch(${1:source}, (${2:val}) => {",
        "\t$0",
        "})",
      ],
    },
    "vwatch:inline": {
      name: "Vue watch inline",
      body: "watch(${1:source}, ${2:fn})",
    },
    "vwatch:getter": {
      name: "Vue watch getter",
      body: [
        "watch(() => ${1:source}, (${2:val}) => {",
        "\t$0",
        "})",
      ],
    },
    "vwatch:array": {
      name: "Vue watch array",
      body: [
        "watch([${1:source1}, ${2:source2}], ([new${1/(.*)/${1:/capitalize}/}, new${2/(.*)/${1:/capitalize}/}]) => {",
        "\t$0",
        "})",
      ],
    },
    "vwatch:log": {
      name: "Vue watch source | log",
      body: [
        "watch(${1:source}, (${2:val}) => {",
        "\tconsole.log('$1:', $2)",
        "})",
      ],
    },
    vprops: {
      name: "Vue defineProps",
      body: "${1:const props = }defineProps<${2:Props}>()",
    },
    "vprops:withDefaults": {
      name: "Vue defineProps with defaults",
      body: [
        "${1:const props = }withDefaults(defineProps<${2:Props}>(), {",
        "\t$0",
        "})",
      ],
    },
    vemits: {
      name: "Vue defineEmits",
      body: "${1:const emit = }defineEmits(['$2'])",
    },
    "vemits:ts": {
      name: "Vue defineEmits (typed)",
      body: [
        "${1:const emit = }defineEmits<{",
        "\t(e: '${2:click}', ${3:payload}: ${4:string}): void,$5",
        "}>()",
      ],
    },
    vemit: {
      name: "Vue emit event",
      body: "emit('$1', $2)",
    },
    vexpose: {
      name: "Vue defineExpose",
      body: [
        "defineExpose({",
        "\t$1",
        "})",
      ],
    },
    "v:onMounted": {
      name: "Vue onMounted",
      body: [
        "onMounted(() => {",
        "\t$0",
        "})",
      ],
    },
    "v:onBeforeMount": {
      name: "Vue onBeforeMount",
      body: [
        "onBeforeMounted(() => {",
        "\t$0",
        "})",
      ],
    },
    "v:onUnmounted": {
      name: "Vue onUnmounted",
      body: [
        "onUnmounted(() => {",
        "\t$0",
        "})",
      ],
    },
    "v:onBeforeUnmount": {
      name: "Vue onBeforeUnmount",
      body: [
        "onBeforeUnmount(() => {",
        "\t$0",
        "})",
      ],
    },
    "v:onUpdated": {
      name: "Vue onUpdated",
      body: [
        "onUpdated(() => {",
        "\t$0",
        "})",
      ],
    },
    "v:onBeforeUpdate": {
      name: "Vue onBeforeUpdate",
      body: [
        "onBeforeUpdate(() => {",
        "\t$0",
        "})",
      ],
    },
    "v:onErrorCaptured": {
      name: "Vue onErrorCaptured",
      body: [
        "onErrorCaptured(() => {",
        "\t$0",
        "})",
      ],
    },
    "v:onActivated": {
      name: "Vue onActivated",
      body: [
        "onActivated(() => {",
        "\t$0",
        "})",
      ],
    },
    "v:onDeactivated": {
      name: "Vue onDeactivated",
      body: [
        "onDeactivated(() => {",
        "\t$0",
        "})",
      ],
    },
    vprovide: {
      name: "Vue provide",
      body: "provide(${1:name}, ${2:value})",
    },
    vinject: {
      name: "Vue inject",
      body: "const $1 = inject(${2:key}, ${3:defaultValue})",
    },
    "vprovide:ts": {
      name: "Vue provide (typed)",
      body: "provide<${1:string}}>(${2:name}, ${3:value})",
    },
    "vinject:ts": {
      name: "Vue inject (typed)",
      body: "const $1 = inject<${2:string}}>(${3:key}, ${4:defaultValue})",
    },
    "vinjectkey": {
      name: "Vue injection key",
      body: "const ${1:key} = Symbol() as InjectionKey<${2:string}>",
    },
    vslots: {
      name: "Vue useSlots",
      body: "const slots = useSlots()",
    },
    vattrs: {
      name: "Vue useAttrs",
      body: "const attrs = useAttrs()",
    },
    vrouter: {
      name: "Vue router",
      body: "const ${1:router} = useRouter()",
    },
    vroute: {
      name: "Vue route",
      body: "const ${1:route} = useRoute()",
    },
    vimport: {
      name: "Import from vue",
      body: "import { $1 } from 'vue'",
    },
  },
};
