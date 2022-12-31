# Vue Ecosystem Snippets

> Snippets for the modern Vue ecosystem - including Nuxt 3, Pinia, VueUse & VueRouter.

<br>

    🚧 Work in progress 🚧

<br>


![Vue](https://img.shields.io/badge/vue-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![Nuxt](https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxtdotjs&logoColor=#00DC82)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

## Features
- Only the latest Vue syntax (including [Reactivity Transform](https://vuejs.org/guide/extras/reactivity-transform.html))
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
<!-- START:docgen -->
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
<td><code>vteleport</code></td>
<td>Vue teleport</td>
<td>

```html
<Teleport to="$1"$2>
  $0
</Teleport>
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
<td><code>vref</code> / <code>vr</code></td>
<td>Vue ref</td>
<td>

```javascript
const ${1:name} = ref($2)
```

</td>
</tr>

<tr>
<td><code>vref:ts</code> / <code>vrts</code></td>
<td>Vue ref (typed)</td>
<td>

```javascript
const ${1:name} = ref<$2>($3)
```

</td>
</tr>

<tr>
<td><code>vcomputed</code> / <code>vc</code></td>
<td>Vue computed</td>
<td>

```javascript
const ${1:name} = computed(() => $2)
```

</td>
</tr>

<tr>
<td><code>vcomputed:ts</code> / <code>vcts</code></td>
<td>Vue computed (typed)</td>
<td>

```javascript
const ${1:name} = computed<$2>(() => $3)
```

</td>
</tr>

<tr>
<td><code>vcomputed-gs</code></td>
<td>Vue computed (get/set)</td>
<td>

```javascript
const ${1:name} = computed({
  get: () => ${2},
  set: (${3:value}: ${4:string}) => {
    ${5}
  },
})
```

</td>
</tr>

<tr>
<td><code>vreactive</code> / <code>vrea</code></td>
<td>Vue reactive</td>
<td>

```javascript
const ${1:name} = reactive({$2})
```

</td>
</tr>

<tr>
<td><code>vreactive:ts</code></td>
<td>Vue reactive (typed)</td>
<td>

```javascript
const ${1:name}: ${2:type} = reactive({$3})
```

</td>
</tr>

<tr>
<td><code>vtoRef</code></td>
<td>Vue toRef</td>
<td>

```javascript
const ${1:name} = toRef(${2:object}, '${3}')
```

</td>
</tr>

<tr>
<td><code>vtoRefs</code></td>
<td>Vue toRefs</td>
<td>

```javascript
const $1 = toRefs(${2:object})
```

</td>
</tr>

<tr>
<td><code>vshallowRef</code></td>
<td>Vue shallowRef</td>
<td>

```javascript
const ${1:name} = shallowRef($2)
```

</td>
</tr>

<tr>
<td><code>vunref</code></td>
<td>Vue unref</td>
<td>

```javascript
const ${1:unwrapped} = unref(${2:ref})
```

</td>
</tr>

<tr>
<td><code>vreadonly</code></td>
<td>Vue readonly</td>
<td>

```javascript
const ${1:copy} = readonly(${2:object})
```

</td>
</tr>

<tr>
<td><code>vref:elem</code></td>
<td>Vue element ref</td>
<td>

```javascript
const ${1:elem} = ref<${2|HTMLInputElement,...|} | null>(null)
```

</td>
</tr>

<tr>
<td><code>vwatchEffect</code></td>
<td>Vue watchEffect</td>
<td>

```javascript
watchEffect(() => {
  $0
})
```

</td>
</tr>

<tr>
<td><code>vwatch</code></td>
<td>Vue watch source</td>
<td>

```javascript
watch(${1:source}, (${2:val}) => {
  $0
})
```

</td>
</tr>

<tr>
<td><code>vwatch:inline</code></td>
<td>Vue watch inline</td>
<td>

```javascript
watch(${1:source}, ${2:fn})
```

</td>
</tr>

<tr>
<td><code>vwatch:getter</code></td>
<td>Vue watch getter</td>
<td>

```javascript
watch(() => ${1:source}, (${2:val}) => {
  $0
})
```

</td>
</tr>

<tr>
<td><code>vwatch:array</code></td>
<td>Vue watch array</td>
<td>

```javascript
watch([${1:source1}, ${2:source2}], ([new${1/(.*)/${1:/capitalize}/}, new${2/(.*)/${1:/capitalize}/}]) => {
  $0
})
```

</td>
</tr>

<tr>
<td><code>vwatch:log</code></td>
<td>Vue watch source | log</td>
<td>

```javascript
watch(${1:source}, (${2:val}) => {
  console.log('$1:', $2)
})
```

</td>
</tr>

<tr>
<td><code>vprops</code></td>
<td>Vue defineProps</td>
<td>

```javascript
${1:const props = }defineProps<${2:Props}>()
```

</td>
</tr>

<tr>
<td><code>vprops:withDefaults</code></td>
<td>Vue defineProps with defaults</td>
<td>

```javascript
${1:const props = }withDefaults(defineProps<${2:Props}>(), {
  $0
})
```

</td>
</tr>

<tr>
<td><code>vemits</code></td>
<td>Vue defineEmits</td>
<td>

```javascript
${1:const emit = }defineEmits(['$2'])
```

</td>
</tr>

<tr>
<td><code>vemits:ts</code></td>
<td>Vue defineEmits (typed)</td>
<td>

```javascript
${1:const emit = }defineEmits<{
  (e: '${2:click}', ${3:payload}: ${4:string}): void,$5
}>()
```

</td>
</tr>

<tr>
<td><code>vemit</code></td>
<td>Vue emit event</td>
<td>

```javascript
emit('$1', $2)
```

</td>
</tr>

<tr>
<td><code>vexpose</code></td>
<td>Vue defineExpose</td>
<td>

```javascript
defineExpose({
  $1
})
```

</td>
</tr>

<tr>
<td><code>v:onMounted</code></td>
<td>Vue onMounted</td>
<td>

```javascript
onMounted(() => {
  $0
})
```

</td>
</tr>

<tr>
<td><code>v:onBeforeMount</code></td>
<td>Vue onBeforeMount</td>
<td>

```javascript
onBeforeMounted(() => {
  $0
})
```

</td>
</tr>

<tr>
<td><code>v:onUnmounted</code></td>
<td>Vue onUnmounted</td>
<td>

```javascript
onUnmounted(() => {
  $0
})
```

</td>
</tr>

<tr>
<td><code>v:onBeforeUnmount</code></td>
<td>Vue onBeforeUnmount</td>
<td>

```javascript
onBeforeUnmount(() => {
  $0
})
```

</td>
</tr>

<tr>
<td><code>v:onUpdated</code></td>
<td>Vue onUpdated</td>
<td>

```javascript
onUpdated(() => {
  $0
})
```

</td>
</tr>

<tr>
<td><code>v:onBeforeUpdate</code></td>
<td>Vue onBeforeUpdate</td>
<td>

```javascript
onBeforeUpdate(() => {
  $0
})
```

</td>
</tr>

<tr>
<td><code>v:onErrorCaptured</code></td>
<td>Vue onErrorCaptured</td>
<td>

```javascript
onErrorCaptured(() => {
  $0
})
```

</td>
</tr>

<tr>
<td><code>v:onActivated</code></td>
<td>Vue onActivated</td>
<td>

```javascript
onActivated(() => {
  $0
})
```

</td>
</tr>

<tr>
<td><code>v:onDeactivated</code></td>
<td>Vue onDeactivated</td>
<td>

```javascript
onDeactivated(() => {
  $0
})
```

</td>
</tr>

<tr>
<td><code>vprovide</code></td>
<td>Vue provide</td>
<td>

```javascript
provide(${1:name}, ${2:value})
```

</td>
</tr>

<tr>
<td><code>vinject</code></td>
<td>Vue inject</td>
<td>

```javascript
const $1 = inject(${2:key}, ${3:defaultValue})
```

</td>
</tr>

<tr>
<td><code>vprovide:ts</code></td>
<td>Vue provide (typed)</td>
<td>

```javascript
provide<${1:string}}>(${2:name}, ${3:value})
```

</td>
</tr>

<tr>
<td><code>vinject:ts</code></td>
<td>Vue inject (typed)</td>
<td>

```javascript
const $1 = inject<${2:string}}>(${3:key}, ${4:defaultValue})
```

</td>
</tr>

<tr>
<td><code>vinjectkey</code></td>
<td>Vue injection key</td>
<td>

```javascript
const ${1:key} = Symbol() as InjectionKey<${2:string}>
```

</td>
</tr>

<tr>
<td><code>vslots</code></td>
<td>Vue useSlots</td>
<td>

```javascript
const slots = useSlots()
```

</td>
</tr>

<tr>
<td><code>vattrs</code></td>
<td>Vue useAttrs</td>
<td>

```javascript
const attrs = useAttrs()
```

</td>
</tr>

<tr>
<td><code>vrouter</code></td>
<td>Vue router</td>
<td>

```javascript
const ${1:router} = useRouter()
```

</td>
</tr>

<tr>
<td><code>vroute</code></td>
<td>Vue route</td>
<td>

```javascript
const ${1:route} = useRoute()
```

</td>
</tr>

<tr>
<td><code>vimport</code></td>
<td>Import from vue</td>
<td>

```javascript
import { $1 } from 'vue'
```

</td>
</tr>
</table>

### Reactivity Transform
[Reactivity Transform](https://vuejs.org/guide/extras/reactivity-transform.html) is currently an experimental feature. It is disabled by default and requires [explicit opt-in](https://vuejs.org/guide/extras/reactivity-transform.html#explicit-opt-in).
<table width="100%">

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td><code>vref$</code> / <code>vrt</code></td>
<td>Vue $ref</td>
<td>

```javascript
const ${1:name} = \$ref($2)
```

</td>
</tr>

<tr>
<td><code>vref$:ts</code></td>
<td>Vue $ref (typed)</td>
<td>

```javascript
const ${1:name} = \$ref<$2>($3)
```

</td>
</tr>

<tr>
<td><code>vcomputed$</code> / <code>vcrt</code></td>
<td>Vue $computed</td>
<td>

```javascript
const ${1:name} = \$computed(() => $2)
```

</td>
</tr>

<tr>
<td><code>vcomputed$:ts</code></td>
<td>Vue $computed (typed)</td>
<td>

```javascript
const ${1:name} = \$computed<$2>(() => $3)
```

</td>
</tr>

<tr>
<td><code>vcomputed-gs$</code></td>
<td>Vue $computed (get/set)</td>
<td>

```javascript
const ${1:name} = \$computed({
  get: () => ${2},
  set: (${3:value}: ${4:type}) => {
    ${5}
  },
})
```

</td>
</tr>

<tr>
<td><code>vtoRef$</code></td>
<td>Vue $toRef</td>
<td>

```javascript
const ${1:name} = $toRef(${2:object}, '${3}')
```

</td>
</tr>

<tr>
<td><code>vshallowRef$</code></td>
<td>Vue $shallowRef</td>
<td>

```javascript
const ${1:name} = \$shallowRef($2)
```

</td>
</tr>

<tr>
<td><code>v$</code></td>
<td>Vue $() </td>
<td>

```javascript
$($1)
```

</td>
</tr>

<tr>
<td><code>v$</code></td>
<td>Vue $()</td>
<td>

```javascript
$($1)
```

</td>
</tr>
</table>

### Code snippets
Useful vue snippets and helpers
<table width="100%">

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td><code>vcomposable</code> / <code>vdc</code></td>
<td>Vue define composable</td>
<td>

```javascript
export const ${1:useComposable} = () => {
  $0
  
  return {
    
  }
}

```

</td>
</tr>

<tr>
<td><code>vuse</code> / <code>vu</code></td>
<td>Use composable</td>
<td>

```javascript
const { $3 } = use${1/(.*)/${1:/capitalize}/}($2)
```

</td>
</tr>

<tr>
<td><code>vuse-nd</code> / <code>vua</code></td>
<td>Use composable without destructuring</td>
<td>

```javascript
const ${3:$1} = use${1/(.*)/${1:/capitalize}/}($2)
```

</td>
</tr>

<tr>
<td><code>vmodel</code></td>
<td>Implement v-model</td>
<td>

```javascript
const props = defineProps<{
  ${1:modelValue}: ${2:string}
}>()

const emit = defineEmits<{
  (e: 'update:$1', ${3:value}?: $2): void
}>()

const ${4:value} = computed({
  get: () => props.$1,
  set: (val: $2) => emit('update:$1', val),
})
```

</td>
</tr>

<tr>
<td><code>v:has-slot</code></td>
<td>Vue check for slots</td>
<td>

```javascript
const slots = useSlots()
const hasSlot = (name: string) => !!slots[name]
```

</td>
</tr>
</table>


### Pinia

<table width="100%">

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td><code>pstore</code></td>
<td>Setup Pinia store</td>
<td>

```javascript
import { acceptHMRUpdate, defineStore } from 'pinia'

export const ${1:useStore} = defineStore('${2:unique-id}', () => {
  $0
  
  return {
   
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate($1, import.meta.hot))

```

</td>
</tr>

<tr>
<td><code>pstore:options</code></td>
<td>Setup Pinia store (Options)</td>
<td>

```javascript
import { acceptHMRUpdate, defineStore } from 'pinia'

export const ${1:useStore} = defineStore('${2:unique-id}', {
  state: () => ({
    name: 'Evan',
    count: 1,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate($1, import.meta.hot))

```

</td>
</tr>

<tr>
<td><code>vuseStore</code></td>
<td>Use store</td>
<td>

```javascript
const ${2:$1Store} = use${1/(.*)/${1:/capitalize}/}Store()
```

</td>
</tr>
</table>


### VueUse

<table width="100%">

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td><code>vuse:vmodel</code></td>
<td>Define custom v-model using useVModel</td>
<td>

```javascript
const props = defineProps<{
  ${1:modelValue}: ${2:string}
}>()

const emit = defineEmits<{
  (e: 'update:$1', ${3:value}?: $2): void
}>()

const ${4:value} = useVModel(props, '$1', emit)
```

</td>
</tr>

<tr>
<td><code>vuse:hover</code></td>
<td>VueUse Element hover</td>
<td>

```javascript
const ${1:elem} = ref<${2|HTMLInputElement,...|} | null>(null)
const ${3:isHovered} = useElementHover($1)
```

</td>
</tr>

<tr>
<td><code>vuse:fetch</code></td>
<td>VueUse useFetch</td>
<td>

```javascript
const { data$2 } = useFetch('$1')
```

</td>
</tr>
</table>

<!-- END:docgen -->

## Running locally

```bash
# ensure Deno is installed
# https://deno.land/manual@v1.29.1/getting_started/installation

# generate .code-snippets and documentation
npm run generate
```
