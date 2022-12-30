import { XSnippetDefinition } from "../../models/app.ts";

export const vue: XSnippetDefinition = {
  meta: {
    title: "Vue SFC",
    description: ".vue` files",
    lang: "html",
  },
  snippets: {
    vbase: {
      name: "script setup with ts & template",
      body: [
        '<script lang="ts" setup>',
        "$2",
        "</script>",
        "",
        "<template>",
        "\t$1",
        "</template>",
        "",
      ],
    },
    "vbase-script": {
      name: "script setup with ts",
      body: [
        '<script lang="ts" setup>',
        "$0",
        "</script>",
        "",
      ],
    },
    "vbase-template": {
      name: "vue template",
      body: [
        "<template>",
        "\t$0",
        "</template>",
        "",
      ],
    },
    "vbase-style": {
      name: "scoped style | postcss",
      body: [
        '<style lang="postcss" scoped>',
        "\t$0",
        "</style>",
        "",
      ],
    },
    "vbase-style:css": {
      name: "scoped style | css",
      body: [
        "<style scoped>",
        "\t$0",
        "</style>",
        "",
      ],
    },
    "vbase-style:scss": {
      name: "scoped style | scss",
      body: [
        '<style lang="scss" scoped>',
        "\t$0",
        "</style>",
        "",
      ],
    },
  },
};
