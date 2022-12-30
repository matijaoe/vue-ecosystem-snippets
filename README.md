# Vue Ecosystem Snippets

> Snippets for the modern Vue ecosystem - including Nuxt 3, Pinia, VueUse & Vue Router.

<br>

![Vue](https://img.shields.io/badge/vue-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![Nuxt](https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxtdotjs&logoColor=#00DC82)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

## Features
- Only the latest Vue syntax
- TypeScript-first
- Nuxt 3, Pinia, VueUse & Vue Router support
- Strategically placed tabstops
- Prefixes created with exact-match in mind 
- GitHub Copilot compliant
- Auto-generated documentation

## Setup
Not mandatory, but highly recommended.

Look for it in user settings, or edit the settings.json directly:
```jsonc
"editor.formatOnSave": true,

// Tab complete snippets when their prefix match.
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
`.vue` files
<table width="100%">

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td><code>vbase</code></td>
<td>Vue SFC</td>
<td>

```html
<script lang="ts" setup>
$0
</script>

<template>
	$1
</template>

```

</td>
</tr>

<tr>
<td><code>vbase:full</code></td>
<td>Vue SFC with style</td>
<td>

```html
<script lang="ts" setup>
$0
</script>

<template>
	$1
</template>

<style scoped>
	
</style>

```

</td>
</tr>

<tr>
<td><code>vbase:full:postcss</code></td>
<td>Vue SFC with style | postcss</td>
<td>

```html
<script lang="ts" setup>
$0
</script>

<template>
	$1
</template>

<style style="postcss" scoped>
	
</style>

```

</td>
</tr>

<tr>
<td><code>vbase:full:scss</code></td>
<td>Vue SFC with style | scss</td>
<td>

```html
<script lang="ts" setup>
$0
</script>

<template>
	$1
</template>

<style style="scss" scoped>
	
</style>

```

</td>
</tr>

<tr>
<td><code>vscript</code></td>
<td>script setup | ts</td>
<td>

```html
<script lang="ts" setup>
$0
</script>

```

</td>
</tr>

<tr>
<td><code>vscript:js</code></td>
<td>script setup | js</td>
<td>

```html
<script setup>
$0
</script>

```

</td>
</tr>

<tr>
<td><code>vtemplate</code></td>
<td>Vue template</td>
<td>

```html
<template>
	$0
</template>

```

</td>
</tr>

<tr>
<td><code>vstyle</code></td>
<td>style</td>
<td>

```html
<style lang="${1|css,...|}"${2|scoped,...|}>
	$0
</style>

```

</td>
</tr>

<tr>
<td><code>vstyle:css</code></td>
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
<td><code>vstyle:postcss</code></td>
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
<td><code>vstyle:scss</code></td>
<td>scoped style | scss</td>
<td>

```html
<style lang="scss" scoped>
	$0
</style>

```

</td>
</tr>

<tr>
<td><code>vstyle:module</code></td>
<td>style with CSS modules</td>
<td>

```html
<style module$1>
	$0
</style>

```

</td>
</tr>

<tr>
<td><code>vstyle:src</code></td>
<td>style with src</td>
<td>

```html
<style scoped src="$1">
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


### Style
Vue style
<table width="100%">

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td><code>vbind</code></td>
<td>v-bind</td>
<td>

```javascript
v-bind($0)
```

</td>
</tr>

<tr>
<td><code>deep</code></td>
<td>:deep()</td>
<td>

```javascript
:deep($1)
```

</td>
</tr>

<tr>
<td><code>slot</code></td>
<td>:slotted()</td>
<td>

```javascript
:slotted($1)
```

</td>
</tr>

<tr>
<td><code>global</code></td>
<td>:global()</td>
<td>

```javascript
:global($1)
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
