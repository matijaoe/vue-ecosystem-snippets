import { XSnippetDefinition } from "../../models/app.ts";

export const template: XSnippetDefinition = {
  meta: {
    title: "Vue Router template",
    lang: "html",
  },
  snippets: {
    vto: {
      name: "Vue Router to",
      body: '${1|to,:to|}="$2"',
    },
    "vto:param": {
      name: "Vue Router :to with param",
      body: ':to="`$1${${2:id}}$3`"',
    },
    "vto:obj": {
      name: "Vue Router :to object",
      body: ':to="{ $1 }"',
    },
    "vto:name": {
      name: "Vue Router :to name",
      body: `:to="{ name: '$1',$2 }"`,
    },
    "vto:path": {
      name: "Vue Router :to path",
      body: `:to="{ path: '$1',$2 }"`,
    },
    vview: {
      name: "RouterView",
      body: "<RouterView>\n\t$0\n</RouterView>",
    },
    vlink: {
      name: "RouterLink",
      body: '<RouterLink ${1|to,:to|}="$2">$3</RouterLink>',
    },
    "vlink:param": {
      name: "RouterLink with param",
      body: '<RouterLink :to="`$1${${2:id}}$3`">$4</RouterLink>',
    },
    "vlink:obj": {
      name: "RouterLink with object",
      body: '<RouterLink :to="{ $1 }">$2</RouterLink>',
    },
    "vlink:name": {
      name: "RouterLink with name",
      body: `<RouterLink :to="{ name: '$1'$2 }">$3</RouterLink>`,
    },
    "vlink:path": {
      name: "RouterLink with path",
      body: `<RouterLink :to="{ path: '$1'$2 }">$3</RouterLink>`,
    },
  },
};
