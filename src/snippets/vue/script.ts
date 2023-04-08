import { XSnippetDefinition } from "../../models/app.ts";

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
      alt: ["vrt"],
    },
    vcomputed: {
      name: "Vue computed",
      body: "const ${1:name} = computed(() => $2)",
      alt: ["vc"],
    },
    "vcomputed:ts": {
      name: "Vue computed (typed)",
      body: "const ${1:name} = computed<$2>(() => $3)",
      alt: ["vct"],
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
      alt: ["vcgs"],
    },
    vreactive: {
      name: "Vue reactive",
      body: "const ${1:name} = reactive({$2})",
      alt: ["vra"],
    },
    "vreactive:ts": {
      name: "Vue reactive (typed)",
      body: "const ${1:name}: ${2:type} = reactive({$3})",
    },
    vtoRef: {
      name: "Vue toRef",
      body: "const ${1:name} = toRef(${2:object}, '$3')",
    },
    vtoRefs: {
      name: "Vue toRefs",
      body: "const ${1:name} = toRefs(${2:object})",
    },
    vshallowRef: {
      name: "Vue shallowRef",
      body: "const ${1:name} = shallowRef($2)",
    },
    vunref: {
      name: "Vue unref",
      body: "const ${1:unwrapped} = unref($2)",
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
      body: "watchEffect(() => {\n\t$0\n})",
    },
    vwatch: {
      name: "Vue watch source",
      body: "watch(${1:source}, (${2:val}) => {\n\t$0\n})",
    },
    "vwatch:inline": {
      name: "Vue watch inline",
      body: "watch(${1:source}, ${2:fn})",
    },
    "vwatch:getter": {
      name: "Vue watch getter",
      body: "watch(() => ${1:source}, (${2:val}) => {\n\t$0\n})",
    },
    "vwatch:multiple": {
      name: "Vue watch multiple",
      body:
        "watch([${1:source1}, ${2:source2}], ([new${1/(.*)/${1:/capitalize}/}, new${2/(.*)/${1:/capitalize}/}]) => {\n\t$0\n})",
    },
    "vwatch:immediate": {
      name: "Vue watch immediate",
      body: "watch(${1:source}, (${2:val}) => {\n\t$0\n}, { immediate: true })",
    },
    "vwatch:deep": {
      name: "Vue watch deep",
      body: "watch(${1:source}, (${2:val}) => {\n\t$0\n}, { deep: true })",
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
    "vprops:defaults": {
      name: "Vue defineProps with defaults",
      body: [
        "${1:const props = }withDefaults(defineProps<${2:Props}>(), {\n\t$0\n})",
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
    vmodel: {
      name: "Vue defineModel",
      body: "const ${1:modelValue} = defineModel<${2:string}>($3)",
    },
    vemit: {
      name: "Vue emit event",
      body: "emit('$1', $2)",
    },
    vexpose: {
      name: "Vue defineExpose",
      body: [
        "defineExpose({\n\t$1\n})",
      ],
    },
    "v:onMounted": {
      name: "Vue onMounted",
      body: [
        "onMounted(() => {\n\t$0\n})",
      ],
    },
    "v:onBeforeMount": {
      name: "Vue onBeforeMount",
      body: [
        "onBeforeMount(() => {\n\t$0\n})",
      ],
    },
    "v:onUnmounted": {
      name: "Vue onUnmounted",
      body: [
        "onUnmounted(() => {\n\t$0\n})",
      ],
    },
    "v:onBeforeUnmount": {
      name: "Vue onBeforeUnmount",
      body: [
        "onBeforeUnmount(() => {\n\t$0\n})",
      ],
    },
    "v:onUpdated": {
      name: "Vue onUpdated",
      body: [
        "onUpdated(() => {\n\t$0\n})",
      ],
    },
    "v:onBeforeUpdate": {
      name: "Vue onBeforeUpdate",
      body: [
        "onBeforeUpdate(() => {\n\t$0\n})",
      ],
    },
    "v:onErrorCaptured": {
      name: "Vue onErrorCaptured",
      body: [
        "onErrorCaptured(() => {\n\t$0\n})",
      ],
    },
    "v:onActivated": {
      name: "Vue onActivated",
      body: [
        "onActivated(() => {\n\t$0\n})",
      ],
    },
    "v:onDeactivated": {
      name: "Vue onDeactivated",
      body: [
        "onDeactivated(() => {\n\t$0\n})",
      ],
    },
    vprovide: {
      name: "Vue provide",
      body: "provide(${1:key}, ${2:value})",
    },
    "vprovide:ts": {
      name: "Vue provide (typed)",
      body: "provide<${1:string}>(${2:key}, ${3:value})",
    },
    vinject: {
      name: "Vue inject",
      body: "const ${1:value}  = inject(${2:key})",
    },
    "vinject:default": {
      name: "Vue inject with default",
      body: "const ${1:value}  = inject(${2:key}, ${3:defaultValue})",
    },
    "vinject:ts": {
      name: "Vue inject (typed)",
      body:
        "const ${1:value} = inject<${2:string}}>(${3:key}, ${4:defaultValue})",
    },
    "vinjectkey": {
      name: "Vue injection key",
      body: "const ${1:key} = Symbol('$2') as InjectionKey<${3:string}>",
    },
    vslots: {
      name: "Vue useSlots",
      body: "const slots = useSlots()",
    },
    vattrs: {
      name: "Vue useAttrs",
      body: "const attrs = useAttrs()",
    },
    vimport: {
      name: "Import from vue",
      body: "import { $1 } from 'vue'",
    },
  },
};
