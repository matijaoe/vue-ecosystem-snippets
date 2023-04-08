import { XSnippetDefinition } from "../../models/app.ts";

export const vueSfc: XSnippetDefinition = {
  meta: {
    title: "Vue SFC",
    description: "`.vue` files",
    lang: "html",
  },
  snippets: {
    vbase: {
      name: "Vue SFC",
      body: [
        '<script lang="ts" setup>',
        "$0",
        "</script>",
        "",
        "<template>",
        "\t$1",
        "</template>",
        "",
      ],
    },
    "vbase:full": {
      name: "Vue SFC with style",
      body: [
        '<script lang="ts" setup>',
        "$0",
        "</script>",
        "",
        "<template>",
        "\t$1",
        "</template>",
        "",
        "<style scoped>",
        "\t",
        "</style>",
        "",
      ],
    },
    "vbase:full:postcss": {
      name: "Vue SFC with style | postcss",
      body: [
        '<script lang="ts" setup>',
        "$0",
        "</script>",
        "",
        "<template>",
        "\t$1",
        "</template>",
        "",
        '<style style="postcss" scoped>',
        "\t",
        "</style>",
        "",
      ],
    },
    "vbase:full:scss": {
      name: "Vue SFC with style | scss",
      body: [
        '<script lang="ts" setup>',
        "$0",
        "</script>",
        "",
        "<template>",
        "\t$1",
        "</template>",
        "",
        '<style style="scss" scoped>',
        "\t",
        "</style>",
        "",
      ],
    },
    "vbase:full:less": {
      name: "Vue SFC with style | less",
      body: [
        '<script lang="ts" setup>',
        "$0",
        "</script>",
        "",
        "<template>",
        "\t$1",
        "</template>",
        "",
        '<style lang="less" scoped>',
        "\t",
        "</style>",
        "",
      ],
    },
    vscript: {
      name: "Vue script setup | ts",
      body: [
        '<script lang="ts" setup>',
        "$0",
        "</script>",
        "",
      ],
    },
    "vscript:js": {
      name: "Vue script setup | js",
      body: [
        "<script setup>",
        "$0",
        "</script>",
        "",
      ],
    },
    vtemplate: {
      name: "Vue template",
      body: [
        "<template>",
        "\t$0",
        "</template>",
        "",
      ],
    },
    vstyle: {
      name: "Vue scoped style",
      body: [
        "<style scoped>",
        "$0",
        "</style>",
        "",
      ],
    },
    "vstyle:lang": {
      name: "Vue style with language option",
      body: [
        '<style lang="${1|css,postcss,scss,less|}"${2| scoped, |}>',
        "$0",
        "</style>",
        "",
      ],
    },
    "vstyle:postcss": {
      name: "Vue scoped style | postcss",
      body: [
        '<style lang="postcss" scoped>',
        "$0",
        "</style>",
        "",
      ],
    },
    "vstyle:scss": {
      name: "scoped style | scss",
      body: [
        '<style lang="scss" scoped>',
        "$0",
        "</style>",
        "",
      ],
    },
    "vstyle:less": {
      name: "scoped style | less",
      body: [
        '<style lang="less" scoped>',
        "$0",
        "</style>",
        "",
      ],
    },
    "vstyle:module": {
      name: "Vue style with CSS modules",
      body: [
        "<style module$1>",
        "$0",
        "</style>",
        "",
      ],
    },
    "vstyle:src": {
      name: "Vue scoped style with src",
      body: [
        `<style scoped src="$1">`,
        "$0",
        "</style>",
        "",
      ],
    },
  },
};
