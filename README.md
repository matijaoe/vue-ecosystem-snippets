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
<td>Vue script setup | ts</td>
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
<td>Vue script setup | js</td>
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
<td>Vue style</td>
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
<td>Vue scoped style | css</td>
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
<td>Vue scoped style | postcss</td>
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
<td>Vue style with CSS modules</td>
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
<td>Vue scoped style with src</td>
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
<td><code>slot</code></td>
<td>slot</td>
<td>

```html
<slot$1>$0</slot>
```

</td>
</tr>

<tr>
<td><code>template</code></td>
<td>template</td>
<td>

```html
<template>$0</template>
```

</td>
</tr>

<tr>
<td><code>nslot</code></td>
<td>named slot</td>
<td>

```html
<slot name="${1:default}">
	$0
</slot>
```

</td>
</tr>

<tr>
<td><code>ntemplate</code></td>
<td>named template</td>
<td>

```html
<template #${1:default}>
	$0
</template>
```

</td>
</tr>

<tr>
<td><code>vcomponent</code></td>
<td>Vue component</td>
<td>

```html
<component :is="$1">$0</component>
```

</td>
</tr>

<tr>
<td><code>vkeepAlive</code></td>
<td>Vue KeepAlive</td>
<td>

```html
<KeepAlive$1>
	$0
</KeepAlive>
```

</td>
</tr>

<tr>
<td><code>vtext</code></td>
<td>v-text</td>
<td>

```html
v-text="$1"
```

</td>
</tr>

<tr>
<td><code>vhtml</code></td>
<td>v-html</td>
<td>

```html
v-html="$1"
```

</td>
</tr>

<tr>
<td><code>vshow</code></td>
<td>v-show</td>
<td>

```html
v-show="$1"
```

</td>
</tr>

<tr>
<td><code>vif</code></td>
<td>v-if</td>
<td>

```html
v-if="$1"
```

</td>
</tr>

<tr>
<td><code>velse</code></td>
<td>v-else</td>
<td>

```html
v-else
```

</td>
</tr>

<tr>
<td><code>velif</code></td>
<td>v-else-if</td>
<td>

```html
v-else-if="$1"
```

</td>
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

<tr>
<td><code>vfori</code></td>
<td>v-for (indexed)</td>
<td>

```html
v-for="(${2:item}, ${3:i}) in ${1:items}" :key="${4:$3}"
```

</td>
</tr>

<tr>
<td><code>vforr</code></td>
<td>v-for range</td>
<td>

```html
v-for="${1:n} in ${2:5}" :key="$1"
```

</td>
</tr>

<tr>
<td><code>von</code></td>
<td>v-on</td>
<td>

```html
v-on="${1:emits}"
```

</td>
</tr>

<tr>
<td><code>vbind</code></td>
<td>v-bind</td>
<td>

```html
v-bind="$1"
```

</td>
</tr>

<tr>
<td><code>vmodel</code></td>
<td>v-model</td>
<td>

```html
v-model="$1"
```

</td>
</tr>

<tr>
<td><code>vmodel-number</code></td>
<td>v-model.number</td>
<td>

```html
v-model.number="$1"
```

</td>
</tr>

<tr>
<td><code>vmodel-trim</code></td>
<td>v-model.trim</td>
<td>

```html
v-model.trim="$1"
```

</td>
</tr>

<tr>
<td><code>vmodel-custom</code></td>
<td>custom v-model</td>
<td>

```html
v-model:${1:custom}="${2:value}"
```

</td>
</tr>

<tr>
<td><code>vslot</code></td>
<td>scoped slot</td>
<td>

```html
v-slot="{$1}"
```

</td>
</tr>

<tr>
<td><code>vpre</code></td>
<td>v-pre</td>
<td>

```html
v-pre="$1"
```

</td>
</tr>

<tr>
<td><code>vonce</code></td>
<td>v-once</td>
<td>

```html
v-once
```

</td>
</tr>

<tr>
<td><code>vmemo</code></td>
<td>v-memo</td>
<td>

```html
v-memo="[$1]"
```

</td>
</tr>

<tr>
<td><code>vcloak</code></td>
<td>v-cloak</td>
<td>

```html
v-cloak
```

</td>
</tr>

<tr>
<td><code>vkey</code></td>
<td>Vue key</td>
<td>

```html
:key="$1"
```

</td>
</tr>

<tr>
<td><code>vref</code></td>
<td>Vue ref</td>
<td>

```html
ref="$1"
```

</td>
</tr>

<tr>
<td><code>vto</code></td>
<td>router link :to prop</td>
<td>

```html
${1|to,...|}="$2"
```

</td>
</tr>

<tr>
<td><code>vname</code></td>
<td>name property</td>
<td>

```html
name="$1"
```

</td>
</tr>

<tr>
<td><code>vis</code></td>
<td>is property</td>
<td>

```html
${1|is,...|}="$2"
```

</td>
</tr>

<tr>
<td><code>vb</code></td>
<td>bind property</td>
<td>

```html
:${1:prop}="$2"
```

</td>
</tr>

<tr>
<td><code>von-emit</code></td>
<td>emit event</td>
<td>

```html
@${1|click,...|}="\$emit('${2:$1}', \$event)"
```

</td>
</tr>

<tr>
<td><code>vif:slot</code></td>
<td>v-if slot defined</td>
<td>

```html
v-if="\$slots.${1:default}"
```

</td>
</tr>

<tr>
<td><code>vif:slot-prop</code></td>
<td>v-if slot or prop defined</td>
<td>

```html
v-if="\$slots.${1:label} || ${2:$1}"
```

</td>
</tr>

<tr>
<td><code>vti</code></td>
<td>Vue text interpolation</td>
<td>

```html
{{ $1 }}
```

</td>
</tr>

<tr>
<td><code>vform</code></td>
<td>form submit.prevent</td>
<td>

```html
<form @submit${1:.prevent}="${2:onSubmit}">
	$0
</form>
```

</td>
</tr>

<tr>
<td><code>vfor:template</code></td>
<td>v-for in template</td>
<td>

```html
<${1|template,...|} v-for="${3:item} in ${2:items}" :key="$3$4">
	$0
</$1>
```

</td>
</tr>

<tr>
<td><code>vfori:template</code></td>
<td>v-for (indexed) in template</td>
<td>

```html
<${1|template,...|} v-for="(${3:item}, ${4:i}) in ${2:items}" :key="${5:$4}">
	$0
</$1>
```

</td>
</tr>

<tr>
<td><code>vif:template</code></td>
<td>v-if in template</td>
<td>

```html
<${1|template,...|} v-if="$2">
	$0
</$1>
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

```css
v-bind($0)
```

</td>
</tr>

<tr>
<td><code>deep</code></td>
<td>:deep()</td>
<td>

```css
:deep($1)
```

</td>
</tr>

<tr>
<td><code>slot</code></td>
<td>:slotted()</td>
<td>

```css
:slotted($1)
```

</td>
</tr>

<tr>
<td><code>global</code></td>
<td>:global()</td>
<td>

```css
:global($1)
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
