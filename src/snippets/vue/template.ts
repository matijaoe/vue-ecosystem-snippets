import { XSnippetDefinition } from "../../models/app.ts";

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
      alt: ["vtemplate"]
    },
    component: {
      name: "component",
      body: "<component>$0</component>",
      alt: ["vcomponent"]
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
    vKeepAlive: {
      name: "Vue KeepAlive",
      "body": [
        "<KeepAlive $1>\n\t$0\n</KeepAlive>",
      ],
    },
    vTeleport: {
      name: "Vue teleport",
      body: '<Teleport to="$1">\n\t$0\n</Teleport>',
    },
    vTransition: {
      name: "Vue Transition",
      body: "<Transition $1>\n\t$0\n</Transition>",
    },
    "vTransition:name": {
      name: "Vue Transition with name",
      body: '<Transition name="$1" $2>\n\t$0\n</Transition>',
      alt: ["nTransition"],
    },
    "vTransition:type": {
      name: "Vue Transition with type",
      body:
        '<Transition type="${1|transition,animation|}" $2>\n\t$0\n</Transition>',
    },
    "vTransition:appear": {
      name: "Vue Transition with appear",
      body: "<Transition appear $1>\n\t$0\n</Transition>",
    },
    vTransitionGroup: {
      name: "Vue TransitionGroup",
      body:
        '<TransitionGroup name="$1" as="${2|ul,div,section|}" $3>\n\t$0\n</TransitionGroup>',
    },
    vSuspense: {
      name: "Vue Suspense",
      body: "<Suspense>\n\t$0\n</Suspense>",
    },
    "vSuspense:fallback": {
      name: "Vue Suspense with fallback",
      body: [
        "<Suspense>",
        "\t$0",
        "\t<template #fallback>",
        "\t\t$1",
        "\t</template>",
        "</Suspense>",
      ],
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
      alt: ["if"],
    },
    veif: {
      name: "v-else-if",
      body: 'v-else-if="$1"',
      alt: ["elif"],
    },
    velse: {
      name: "v-else",
      body: "v-else",
      alt: ["else"],
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
    vemit: {
      name: "emit",
      body: "emit('$1'$2)",
      alt: ["emit"]
    },
    "vemit:pass": {
      name: "Vue pass emit",
      body:
        "@${1|click,input,change,focus,blur|}=\"\\$emit('${2:$1}', \\$event)\"",
    },
    von: {
      name: "v-on",
      body: 'v-on="${1:emits}"',
    },
    "von:event": {
      name: "event handler",
      body: '@$1="$2"',
      alt: ['voe']
    },
    "von:click": {
      name: "click handler",
      body: '@click="${1:onClick}"',
      alt: ['voc']
    },
    "von:input": {
      name: "input handler",
      body: '@input="${1:onInput}"',
      alt: ['voi']
    },
    "von:update": {
      name: "update handler",
      body: '@update="${1:onUpdate}"',
    },
    "von:change": {
      name: "change handler",
      body: '@change="${1:onChange}"',
    },
    "von:blur": {
      name: "blur handler",
      body: '@blur="${1:onBlur}"',
    },
    "von:focus": {
      name: "focus handler",
      body: '@focus="${1:onFocus}"',
    },
    "von:submit": {
      name: "submit handler",
      body: '@submit${1:.prevent}="${2:onSubmit}"',
    },
    vbind: {
      name: "v-bind",
      body: 'v-bind="$1"',
    },
    "vbind:attrs": {
      name: "v-bind attrs",
      body: 'v-bind="\\$attrs"',
    },
    "vbind:props": {
      name: "v-bind props",
      body: 'v-bind="\\$props"',
    },
    "vbind:full": {
      name: "v-bind props and attrs",
      body: 'v-bind="[\\$props, \\$attrs]"',
    },
    vmodel: {
      name: "v-model",
      body: 'v-model="$1"',
    },
    "vmodel:number": {
      name: "v-model.number",
      body: 'v-model.number="$1"',
    },
    "vmodel:trim": {
      name: "v-model.trim",
      body: 'v-model.trim="$1"',
    },
    "vmodel:custom": {
      name: "custom v-model",
      body: 'v-model:${1:custom}="$2"',
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
    vname: {
      name: "name property",
      body: '${1|name,:name|}="$2"',
    },
    vis: {
      name: "is property",
      body: '${1|is,:is|}="$2"',
    },
    vb: {
      name: "bind attribute",
      body: ':${1:prop}="${2:$1}"',
    },
    va: {
      name: "attribute",
      body: '${1:prop}="$2"',
    },
    vclass: {
      name: "Vue classes",
      body: `:class="$1"`,
      alt: ["vc"],
    },
    "vclass:list": {
      name: "Vue classes list",
      body: `:class="[$1]"`,
      alt: ["vca"],
    },
    "vclass:cond": {
      name: "Vue conditional classes",
      body: `:class="{ $1: $2 }"`,
      alt: ["vcc"],
    },
    vstyle: {
      name: "Vue inline style",
      body: `:style="{ $1: $2 }"`,
    },
    "vstyle:list": {
      name: "Vue inline style list",
      body: `:style="[$1]"`,
    },
    vv: {
      name: "Vue ",
      body: "{{ $1 }}",
    },
    vvt: {
      name: "Vue i18n translation",
      body: "{{ t('$1') }}",
    },
    "vif:slot": {
      name: "v-if slot defined",
      body: 'v-if="\\$slots.${1:default}"',
    },
    "vif:slot-prop": {
      name: "v-if slot or prop defined",
      body: 'v-if="\\$slots.${1:label} || ${2:$1}"',
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
    "vtif": {
      name: "template with v-if",
      body: [
        '<template v-if="$2">',
        "\t$0",
        "</template>",
      ],
    },
    "vdif": {
      name: "div with v-if",
      body: [
        '<div v-if="$2">',
        "\t$0",
        "</div>",
      ],
    },
  },
};
