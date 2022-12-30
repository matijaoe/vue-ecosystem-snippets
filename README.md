# Vue Ecosystem Snippets

![Vue](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![Nuxt](https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxtdotjs&logoColor=#00DC82)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

## Features
- Only the latest Vue syntax
- Nuxt 3, Pinia, VueUse, Vite support
- TypeScript-first
- Strategically placed tabstops
- Prefixes created with exact-match in mind 
- (Mostly) GitHub Copilot compliant
- Auto-generated documentation

## Setup
The following is not mandatory, but could provide a nicer experience. Test them out and see what works best for you.

Look for it in user settings, or edit the settings.json directly:
```jsonc
"editor.formatOnSave": true,

// Tab complete snippets when their prefix match. Works best when 'quickSuggestions' aren't enabled.
"editor.tabCompletion": "onlySnippets"
```

## Snippet syntax

### Tabstops
- `$1`, `$2`, `$3` specify cursor locations, in order in which tabstops will be visited
- `$0` denotes the final cursor position
- Multiple occurrences of the same tabstop are linked and updated in sync

### Placeholders
- Tabstops with default values → `${1:name}` 

### Choices
- Tabstops with multiple values → `${1|one,two,three|}`. 
- Truncated in documentation, for easier viewing → `${1|one,...|}`. 

## Snippets
<!-- START:docs-gen -->
### Vue SFC
.vue` files
<table width="100%">

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td><code>vbase</code></td>
<td>script setup with ts & template</td>
<td>

```html
<script lang="ts" setup>
$2
</script>

<template>
	$1
</template>

```

</td>
</tr>

<tr>
<td><code>vbase-script</code></td>
<td>script setup with ts</td>
<td>

```html
<script lang="ts" setup>
$0
</script>

```

</td>
</tr>

<tr>
<td><code>vbase-template</code></td>
<td>vue template</td>
<td>

```html
<template>
	$0
</template>

```

</td>
</tr>

<tr>
<td><code>vbase-style</code></td>
<td>scoped style | postcss</td>
<td>

```html
<style lang="postcss" scoped>
	$0
</style>

```

</td>
</tr>

<tr>
<td><code>vbase-style:css</code></td>
<td>scoped style | css</td>
<td>

```html
<style scoped>
	$0
</style>

```

</td>
</tr>

<tr>
<td><code>vbase-style:scss</code></td>
<td>scoped style | scss</td>
<td>

```html
<style lang="scss" scoped>
	$0
</style>

```

</td>
</tr>
</table>


### Template

<table width="100%">

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td><code>vfor</code></td>
<td>v-for</td>
<td>

```html
v-for="${2:item} in ${1:items}" :key="$2$3"
```

</td>
</tr>
</table>


### Script
Script setup and composables
<table width="100%">

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td><code>vref</code></td>
<td>ref</td>
<td>

```javascript
const ${1:name} = ref($2)
```

</td>
</tr>
</table>

<!-- END:docs-gen -->

## Running locally

```bash
# ensure Deno is installed
# https://deno.land/manual@v1.29.1/getting_started/installation

# generate .code-snippets and documentation
npm run generate

```
