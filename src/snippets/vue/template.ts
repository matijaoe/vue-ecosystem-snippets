import { XSnippetDefinition } from "../../models/app.ts";

// TODO
/**
 * - transition elements
 * - transition classes and events
 * - router link
 * - class bindings
 */
export const template: XSnippetDefinition = {
  meta: {
    title: "Template",
    lang: "html",
  },
  snippets: {
    slot: {
      name: "slot",
      body: "<slot$1>$0</slot>",
    },
    template: {
      name: "template",
      body: "<template>$0</template>",
    },
    nslot: {
      name: "named slot",
      body: [
        '<slot name="${1:default}">',
        "\t$0",
        "</slot>",
      ],
    },
    ntemplate: {
      name: "named template",
      body: [
        "<template #${1:default}>",
        "\t$0",
        "</template>",
      ],
    },
    vcomponent: {
      name: "Vue component",
      body: '<component :is="$1">$0</component>',
    },
    vkeepAlive: {
      name: "Vue KeepAlive",
      "body": [
        "<KeepAlive $1>\n\t$0\n</KeepAlive>",
      ],
    },
    vteleport: {
      name: "Vue teleport",
      body: '<Teleport to="$1">\n\t$0\n</Teleport>',
    },
    vtext: {
      name: "v-text",
      body: 'v-text="$1"',
    },
    vhtml: {
      name: "v-html",
      body: 'v-html="$1"',
    },
    vshow: {
      name: "v-show",
      body: 'v-show="$1"',
    },
    vif: {
      name: "v-if",
      body: 'v-if="$1"',
    },
    velse: {
      name: "v-else",
      body: "v-else",
    },
    velif: {
      name: "v-else-if",
      body: 'v-else-if="$1"',
    },
    vfor: {
      name: "v-for",
      body: 'v-for="${2:item} in ${1:items}" :key="$2$3"',
    },
    vfori: {
      name: "v-for (indexed)",
      body: 'v-for="(${2:item}, ${3:i}) in ${1:items}" :key="${4:$3}"',
    },
    vforr: {
      name: "v-for range",
      body: 'v-for="${1:n} in ${2:5}" :key="$1"',
    },
    von: {
      name: "v-on",
      body: 'v-on="${1:emits}"',
    },
    vbind: {
      name: "v-bind",
      body: 'v-bind="$1"',
    },
    vmodel: {
      name: "v-model",
      body: 'v-model="$1"',
    },
    "vmodel-number": {
      name: "v-model.number",
      body: 'v-model.number="$1"',
    },
    "vmodel-trim": {
      name: "v-model.trim",
      body: 'v-model.trim="$1"',
    },
    "vmodel-custom": {
      name: "custom v-model",
      body: 'v-model:${1:custom}="${2:value}"',
    },
    vslot: {
      name: "scoped slot",
      body: 'v-slot="{$1}"',
    },
    vpre: {
      name: "v-pre",
      body: 'v-pre="$1"',
    },
    vonce: {
      name: "v-once",
      body: "v-once",
    },
    vmemo: {
      name: "v-memo",
      body: 'v-memo="[$1]"',
    },
    vcloak: {
      name: "v-cloak",
      body: "v-cloak",
    },
    vkey: {
      name: "Vue key",
      body: ':key="$1"',
    },
    vref: {
      name: "Vue ref",
      body: 'ref="$1"',
    },
    vto: {
      name: "router link :to prop",
      body: '${1|to,:to|}="$2"',
    },
    vname: {
      name: "name property",
      body: 'name="$1"',
    },
    vis: {
      name: "is property",
      body: '${1|is,:is|}="$2"',
    },
    vb: {
      name: "bind property",
      body: ':${1:prop}="$2"',
    },
    "von-emit": {
      name: "emit event",
      body:
        "@${1|click,input,change,focus,blur|}=\"\\$emit('${2:$1}', \\$event)\"",
    },
    "vif:slot": {
      name: "v-if slot defined",
      body: 'v-if="\\$slots.${1:default}"',
    },
    "vif:slot-prop": {
      name: "v-if slot or prop defined",
      body: 'v-if="\\$slots.${1:label} || ${2:$1}"',
    },
    vti: {
      name: "Vue text interpolation",
      body: "{{ $1 }}",
    },
    vform: {
      name: "form submit.prevent",
      body: [
        '<form @submit${1:.prevent}="${2:onSubmit}">',
        "\t$0",
        "</form>",
      ],
    },
    "vfor:template": {
      name: "v-for in template",
      body: [
        '<${1|template,div,li|} v-for="${3:item} in ${2:items}" :key="$3$4">',
        "\t$0",
        "</$1>",
      ],
    },
    "vfori:template": {
      name: "v-for (indexed) in template",
      body: [
        '<${1|template,div,li|} v-for="(${3:item}, ${4:i}) in ${2:items}" :key="${5:$4}">',
        "\t$0",
        "</$1>",
      ],
    },
    "vif:template": {
      name: "v-if in template",
      body: [
        '<${1|template,div,p,ul,section|} v-if="$2">',
        "\t$0",
        "</$1>",
      ],
    },
  },
};
