export const style = {
  meta: {
    title: "Style",
    description: "Vue style",
    lang: "css",
  },
  snippets: {
    vbind: {
      name: "v-bind",
      body: "v-bind($0)",
    },
    deep: {
      name: ":deep()",
      body: ":deep($1)",
    },
    slot: {
      name: ":slotted()",
      body: ":slotted($1)",
    },
    global: {
      name: ":global()",
      body: ":global($1)",
    },
  },
};
