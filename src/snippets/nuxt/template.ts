import { XSnippetDefinition } from "../../models/app.ts";

export const template: XSnippetDefinition = {
  meta: {
    title: "Nuxt (template)",
    lang: "html",
  },
  snippets: {
    nlink: {
      name: "NuxtLink",
      body: '<NuxtLink to="$1">$3</NuxtLink>',
    },
    "nlink:blank": {
      name: "NuxtLink with target _blank",
      body: '<NuxtLink to="$1" target="_blank" $3>$4</NuxtLink>',
    },
    "nlink:external": {
      name: "NuxtLink with target external",
      body:
        '<NuxtLink to="$1" external target="${2|_blank,_self|}" $3>$4</NuxtLink>',
    },
    "nlink:param": {
      name: "NuxtLink with param",
      body: '<NuxtLink :to="`$1${${2:id}}$3`" $4>$5</NuxtLink>',
    },
    "nlink:obj": {
      name: "NuxtLink with object",
      body: '<NuxtLink :to="{ $1 }" $2>$3</NuxtLink>',
    },
    "nlink:name": {
      name: "NuxtLink with name",
      body: `<NuxtLink :to="{ name: '$1'$2 }" $3>$4</NuxtLink>`,
    },
    "nlink:path": {
      name: "NuxtLink with path",
      body: `<NuxtLink :to="{ path: '$1'$2 }" $3>$4</NuxtLink>`,
    },
    "nloading": {
      name: "NuxtLoadingIndicator",
      body: `<NuxtLoadingIndicator $1/>`,
    },
    nlayout: {
      name: "NuxtLayout",
      body: "<NuxtLayout $1>$2</NuxtLayout>",
    },
    "nlayout:name": {
      name: "NuxtLayout with name",
      body: '<NuxtLayout ${2|name,:name|}="$3">$4</NuxtLayout>',
    },
    npage: {
      name: "NuxtPage",
      body: "<NuxtPage $1/>",
    },
    "npage:static": {
      name: "NuxtPage with static key",
      body: '<NuxtPage page-key="static" $1/>',
    },
    nclient: {
      name: "ClientOnly",
      body: "<ClientOnly $1>$2</ClientOnly>",
    },
    "nclient:fallbacks": {
      name: "ClientOnly with fallback props",
      body:
        '<ClientOnly fallback-tag="${1:span}" fallback="${2:Loading...}">$3</ClientOnly>',
    },
    "nclient:fallback": {
      name: "ClientOnly with fallback template",
      body: [
        "<ClientOnly>",
        "\t<template #fallback>",
        "\t\t$0",
        "\t</template>",
        "</ClientOnly>",
      ],
    },
    nTeleport: {
      name: "Nuxt Teleport",
      body: '<Teleport to="$1">\n\t$0\n</Teleport>',
    },
  },
};
