import { XSnippetDefinition } from "../../models/app.ts";

export const script: XSnippetDefinition = {
  meta: {
    title: "Nuxt Script",
  },
  snippets: {
    nfetch: {
      name: "Nuxt useFetch",
      body: "const { data: ${1:data} } = await useFetch('$2'$3)",
    },
    "nfetch:cb": {
      name: "Nuxt useFetch with callback",
      body: "const { data: ${1:data} } = await useFetch(() => '$2'$3)",
    },
    "nfetch:lazy": {
      name: "Nuxt useLazyFetch",
      body: "const { pending, data: ${1:data} } = useLazyFetch('$2'$3)",
    },
    "nfetch:lazy:cb": {
      name: "Nuxt useLazyFetch callback",
      body: "const { pending, data: ${1:data} } = useLazyFetch(() => '$2'$3)",
    },
    "nfetch:post": {
      name: "Nuxt useFetch POST",
      body: [
        "const { data: ${1:data} } = await useFetch('$2', {",
        "\tmethod: 'POST',",
        "\tbody: ${3:body},$4",
        "})",
      ],
    },
    nasyncdata: {
      name: "Nuxt useAsyncData",
      body:
        "const { data: ${1:data} } = await useAsyncData('${2:key}', () => $$fetch('$3')$4)",
    },
    "nasyncdata:lazy": {
      name: "Nuxt useLazyAsyncData",
      body:
        "const { pending, data: ${1:data} } = useLazyAsyncData('${2:key}', () => $$fetch('$3')$4)",
    },
    napp: {
      name: "Nuxt useNuxtApp",
      body: "const app = useNuxtApp()",
    },
    nappConfig: {
      name: "Nuxt useAppConfig",
      body: "const appConfig = useAppConfig()",
    },
    nruntimeConfig: {
      name: "Nuxt useRuntimeConfig",
      body: "const config = useRuntimeConfig()",
    },
    ncookie: {
      name: "Nuxt useCookie",
      body: "const ${1:cookie} = useCookie('${2:$1}'$3)",
    },
    "ncookie:opts": {
      name: "Nuxt useCookie with options",
      body: "const ${1:cookie} = useCookie('${2:$1}', { $3 })",
    },
    ndata: {
      name: "Nuxt useNuxtData",
      body: "const { data: ${2:$1} } = useNuxtData('${1:key}')",
    },
    nerror: {
      name: "Nuxt useError",
      body: "const ${1:error} = useError()",
    },
    nstate: {
      name: "Nuxt useState",
      body: "const ${1:state} = useState('${2:$1}'$3)",
    },
    "nstate:init": {
      name: "Nuxt useState (init)",
      body: "const ${1:state} = useState('${2:$1}', () => $3)",
    },
    nhead: {
      name: "Nuxt useHead",
      body: [
        "useHead({",
        "\t$1",
        "})",
      ],
    },
    "nhead:title": {
      name: "Nuxt useHead title",
      body: [
        "useHead({",
        "\ttitle: $1,$0",
        "})",
      ],
    },
    npageMeta: {
      name: "Nuxt definePageMeta",
      body: [
        "definePageMeta({",
        "\t$1",
        "})",
      ],
    },
    "npageMeta:title": {
      name: "Nuxt definePageMeta title",
      body: [
        "definePageMeta({",
        "\ttitle: '$1',$0",
        "})",
      ],
    },
    "npageMeta:layout": {
      name: "Nuxt definePageMeta layout",
      body: [
        "definePageMeta({",
        "\tlayout: '$1',$0",
        "})",
      ],
    },
    "npageMeta:middleware": {
      name: "Nuxt definePageMeta middleware",
      body: [
        "definePageMeta({",
        "\tmiddleware: ['$1'$2],$0",
        "})",
      ],
    },
    nto: {
      name: "Nuxt navigateTo",
      body: "navigateTo('$1'$2)",
    },
    "nto:obj": {
      name: "Nuxt navigateTo object",
      body: "navigateTo({ $1 }$2)",
    },
    "nto:replace": {
      name: "Nuxt navigateTo replace",
      body: "navigateTo('$1', { replace: true })",
    },
    "nto:external": {
      name: "Nuxt navigateTo external",
      body: "navigateTo('$1', { external: true })",
    },
    "nto:redirect": {
      name: "Nuxt navigateTo redirect",
      body: "navigateTo('$1', { redirectCode: ${2|301,302,307|} })",
    },
    "nto:name": {
      name: "Nuxt navigateTo name",
      body: [
        "navigateTo({",
        "\tname: '$1',$0",
        "})",
      ],
    },
    "nto:path": {
      name: "Nuxt navigateTo path",
      body: [
        "navigateTo({",
        "\tpath: '$1',$0",
        "})",
      ],
    },
    nplugin: {
      name: "Nuxt plugin",
      body: [
        "export default defineNuxtPlugin((nuxtApp) => {",
        "\t$1",
        "})",
      ],
    },
    "nplugin:vue": {
      name: "Nuxt plugin use vue package",
      body: [
        "export default defineNuxtPlugin((nuxtApp) => {",
        "\tnuxtApp.vueApp.use($1)",
        "})",
      ],
    },
    "nmiddleware:route": {
      name: "Nuxt route middleware",
      body: [
        "export default defineNuxtRouteMiddleware((to, from) => {",
        "\t$1",
        "})",
      ],
    },
    "nmiddleware:server": {
      name: "Nuxt server middleware",
      body: [
        "export default defineEventHandler((event) => {",
        "\t$1",
        "})",
      ],
    },
    napi: {
      name: "Nuxt api route",
      body: [
        "export default defineEventHandler(${1:async }(event) => {",
        "\t$2",
        "\t",
        "\treturn {",
        "\t\t$3",
        "\t}",
        "})",
      ],
    },
    "nplugin:server": {
      name: "Nuxt server plugin",
      body: [
        "export default defineNitroPlugin((nitroApp) => {",
        "\t$1",
        "})",
      ],
    },
    nreadBody: {
      name: "Nuxt readBody",
      body: "const ${1:body} = await readBody(event)",
    },
    ngetQuery: {
      name: "Nuxt getQuery",
      body: "const { $1 } = getQuery(event)",
    },
    ngetCookie: {
      name: "Nuxt getCookie",
      body: "getCookie(event, '${1:cookie}')",
    },
    nsetCookie: {
      name: "Nuxt setCookie",
      body: "setCookie(event, '${1:cookie}', ${2:value})",
    },
  },
};
