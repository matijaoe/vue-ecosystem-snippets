# Vue Ecosystem Snippets

> Snippets for the modern Vue ecosystem - including Nuxt 3, Pinia, VueUse, Vue Router & Vue Macros.

![Vue](https://img.shields.io/badge/vue-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![Nuxt](https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxtdotjs&logoColor=#00DC82)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

## Features
- Only the latest Vue syntax (including [Reactivity Transform](https://vuejs.org/guide/extras/reactivity-transform.html))
- Over **200** snippets 
- TypeScript-first
- Nuxt 3, Pinia, VueUse, Vue Router & Vue Macros support
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
<td>Vue SFC with style | postcss</td>
<td>

```html
<script lang="ts" setup>
$0
</script>

<template>
  $1
</template>

<style lang="postcss" scoped>
  
</style>

```

</td>
</tr>

<tr>
<td><code>vbase:full:css</code></td>
<td>Vue SFC with style | css</td>
<td>

```html
<script lang="ts" setup>
$0
</script>

<template>
  $1
</template>

<style lang="css" scoped>
  
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

<style lang="scss" scoped>
  
</style>

```

</td>
</tr>

<tr>
<td><code>vbase:full:less</code></td>
<td>Vue SFC with style | less</td>
<td>

```html
<script lang="ts" setup>
$0
</script>

<template>
  $1
</template>

<style lang="less" scoped>
  
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
<td><code>vstyle:lang</code></td>
<td>Vue style with language option</td>
<td>

```html
<style lang="${1|css,postcss,...|}"${2|scoped,|}>
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
<style lang="css" scoped>
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
<td><code>vstyle:less</code></td>
<td>scoped style | less</td>
<td>

```html
<style lang="less" scoped>
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
<td><code>component</code></td>
<td>component</td>
<td>

```html
<component>$0</component>
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
<td><code>vKeepAlive</code></td>
<td>Vue KeepAlive</td>
<td>

```html
<KeepAlive $1>
  $0
</KeepAlive>
```

</td>
</tr>

<tr>
<td><code>vTeleport</code></td>
<td>Vue teleport</td>
<td>

```html
<Teleport to="$1">
  $0
</Teleport>
```

</td>
</tr>

<tr>
<td><code>vTransition</code></td>
<td>Vue Transition</td>
<td>

```html
<Transition $1>
  $0
</Transition>
```

</td>
</tr>

<tr>
<td><code>vTransition:name</code> / <code>nTransition</code></td>
<td>Vue Transition with name</td>
<td>

```html
<Transition name="$1" $2>
  $0
</Transition>
```

</td>
</tr>

<tr>
<td><code>vTransition:type</code></td>
<td>Vue Transition with type</td>
<td>

```html
<Transition type="${1|transition,animation|}" $2>
  $0
</Transition>
```

</td>
</tr>

<tr>
<td><code>vTransition:appear</code></td>
<td>Vue Transition with appear</td>
<td>

```html
<Transition appear $1>
  $0
</Transition>
```

</td>
</tr>

<tr>
<td><code>vTransitionGroup</code></td>
<td>Vue TransitionGroup</td>
<td>

```html
<TransitionGroup name="$1" as="${2|ul,div,...|}" $3>
  $0
</TransitionGroup>
```

</td>
</tr>

<tr>
<td><code>vSuspense</code></td>
<td>Vue Suspense</td>
<td>

```html
<Suspense>
  $0
</Suspense>
```

</td>
</tr>

<tr>
<td><code>vSuspense:fallback</code></td>
<td>Vue Suspense with fallback</td>
<td>

```html
<Suspense>
  $0
  <template #fallback>
    $1
  </template>
</Suspense>
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
<td><code>vif</code> / <code>if</code></td>
<td>v-if</td>
<td>

```html
v-if="$1"
```

</td>
</tr>

<tr>
<td><code>velse</code> / <code>else</code></td>
<td>v-else</td>
<td>

```html
v-else
```

</td>
</tr>

<tr>
<td><code>velif</code> / <code>elif</code></td>
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
<td><code>vbind:attrs</code></td>
<td>v-bind attrs</td>
<td>

```html
v-bind="\$attrs"
```

</td>
</tr>

<tr>
<td><code>vbind:props</code></td>
<td>v-bind props</td>
<td>

```html
v-bind="\$props"
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
<td><code>vmodel:number</code></td>
<td>v-model.number</td>
<td>

```html
v-model.number="$1"
```

</td>
</tr>

<tr>
<td><code>vmodel:trim</code></td>
<td>v-model.trim</td>
<td>

```html
v-model.trim="$1"
```

</td>
</tr>

<tr>
<td><code>vmodel:custom</code></td>
<td>custom v-model</td>
<td>

```html
v-model:${1:custom}="$2"
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
<td><code>vname</code></td>
<td>name property</td>
<td>

```html
${1|name,:name|}="$2"
```

</td>
</tr>

<tr>
<td><code>vis</code></td>
<td>is property</td>
<td>

```html
${1|is,:is|}="$2"
```

</td>
</tr>

<tr>
<td><code>vb</code></td>
<td>bind property</td>
<td>

```html
:${1:prop}="${2:$1}"
```

</td>
</tr>

<tr>
<td><code>vclass</code> / <code>vc</code></td>
<td>Vue classes</td>
<td>

```html
:class="[$1]"
```

</td>
</tr>

<tr>
<td><code>vclass:cond</code> / <code>vcc</code></td>
<td>Vue conditional classes</td>
<td>

```html
:class="{ $1: $2 }"
```

</td>
</tr>

<tr>
<td><code>vstyle</code></td>
<td>Vue inline style</td>
<td>

```html
:style="{ $1: $2 }"
```

</td>
</tr>

<tr>
<td><code>vstyle:list</code></td>
<td>Vue inline style list</td>
<td>

```html
:style="[$1]"
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
<td><code>vemit</code></td>
<td>Vue emit event</td>
<td>

```html
@${1|click,input,...|}="\$emit('${2:$1}', \$event)"
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
<${1|template,div,...|} v-for="${3:item} in ${2:items}" :key="$3$4">
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
<${1|template,div,...|} v-for="(${3:item}, ${4:i}) in ${2:items}" :key="${5:$4}">
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
<${1|template,div,...|} v-if="$2">
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
<td><code>vref:ts</code> / <code>vrt</code></td>
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
<td><code>vcomputed:ts</code> / <code>vct</code></td>
<td>Vue computed (typed)</td>
<td>

```javascript
const ${1:name} = computed<$2>(() => $3)
```

</td>
</tr>

<tr>
<td><code>vcomputed-gs</code> / <code>vcgs</code></td>
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
<td><code>vreactive</code> / <code>vra</code></td>
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
const ${1:name} = toRef(${2:object}, '$3')
```

</td>
</tr>

<tr>
<td><code>vtoRefs</code></td>
<td>Vue toRefs</td>
<td>

```javascript
const ${1:name} = toRefs(${2:object})
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
const ${1:unwrapped} = unref($2)
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
const ${1:elem} = ref<${2|HTMLInputElement,HTMLInputElement,...|} | null>(null)
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
<td><code>vwatch:multiple</code></td>
<td>Vue watch multiple</td>
<td>

```javascript
watch([${1:source1}, ${2:source2}], ([new${1/(.*)/${1:/capitalize}/}, new${2/(.*)/${1:/capitalize}/}]) => {
  $0
})
```

</td>
</tr>

<tr>
<td><code>vwatch:immediate</code></td>
<td>Vue watch immediate</td>
<td>

```javascript
watch(${1:source}, (${2:val}) => {
  $0
}, { immediate: true })
```

</td>
</tr>

<tr>
<td><code>vwatch:deep</code></td>
<td>Vue watch deep</td>
<td>

```javascript
watch(${1:source}, (${2:val}) => {
  $0
}, { deep: true })
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
<td><code>vprops:defaults</code></td>
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
<td><code>vmodel</code></td>
<td>Vue defineModel</td>
<td>

```javascript
const ${1:modelValue} = defineModel<${2:string}>($3)
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
onBeforeMount(() => {
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
provide(${1:key}, ${2:value})
```

</td>
</tr>

<tr>
<td><code>vprovide:ts</code></td>
<td>Vue provide (typed)</td>
<td>

```javascript
provide<${1:string}>(${2:key}, ${3:value})
```

</td>
</tr>

<tr>
<td><code>vinject</code></td>
<td>Vue inject</td>
<td>

```javascript
const ${1:value}  = inject(${2:key})
```

</td>
</tr>

<tr>
<td><code>vinject:default</code></td>
<td>Vue inject with default</td>
<td>

```javascript
const ${1:value}  = inject(${2:key}, ${3:defaultValue})
```

</td>
</tr>

<tr>
<td><code>vinject:ts</code></td>
<td>Vue inject (typed)</td>
<td>

```javascript
const ${1:value} = inject<${2:string}}>(${3:key}, ${4:defaultValue})
```

</td>
</tr>

<tr>
<td><code>vinjectkey</code></td>
<td>Vue injection key</td>
<td>

```javascript
const ${1:key} = Symbol('$2') as InjectionKey<${3:string}>
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
<td><code>vimport</code></td>
<td>Import from vue</td>
<td>

```javascript
import { $1 } from 'vue'
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
export const use${1/(.*)/${1:/capitalize}/} = () => {
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
const ${2:$1} = use${1/(.*)/${1:/capitalize}/}($3)
```

</td>
</tr>

<tr>
<td><code>vused</code> / <code>vud</code></td>
<td>Use composable with destructuring</td>
<td>

```javascript
const { $2 } = use${1/(.*)/${1:/capitalize}/}($3)
```

</td>
</tr>

<tr>
<td><code>vmodel:manual</code></td>
<td>Implement v-model manually</td>
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

### Reactivity Transform
[Reactivity Transform](https://vuejs.org/guide/extras/reactivity-transform.html) is currently an experimental feature. It is disabled by default and requires [explicit opt-in](https://vuejs.org/guide/extras/reactivity-transform.html#explicit-opt-in).
<table width="100%">

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td><code>vref$</code></td>
<td>Vue $ref</td>
<td>

```javascript
const ${1:name} = \$ref($2)
```

</td>
</tr>

<tr>
<td><code>vcomputed$</code></td>
<td>Vue $computed</td>
<td>

```javascript
const ${1:name} = \$computed(() => $2)
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
<td><code>v$</code></td>
<td>Vue $() destructuring</td>
<td>

```javascript
$($1)
```

</td>
</tr>

<tr>
<td><code>v$</code></td>
<td>Vue $$() escape hint</td>
<td>

```javascript
$($1)
```

</td>
</tr>
</table>


### Vue Router (script)

<table width="100%">

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
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
<td><code>vrouter:create</code></td>
<td>Create Vue router</td>
<td>

```javascript
const router = createRouter({
  history: createWebHashHistory(),
  routes: ${1:routes},
  scrollBehavior(to, from, savedPosition) {
    $2
  }
})
```

</td>
</tr>
</table>


### Vue Router (template)

<table width="100%">

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td><code>vto</code></td>
<td>Vue Router to</td>
<td>

```html
${1|to,:to|}="$2"
```

</td>
</tr>

<tr>
<td><code>vto:param</code></td>
<td>Vue Router :to with param</td>
<td>

```html
:to="`$1${${2:id}}$3`"
```

</td>
</tr>

<tr>
<td><code>vto:obj</code></td>
<td>Vue Router :to object</td>
<td>

```html
:to="{ $1 }"
```

</td>
</tr>

<tr>
<td><code>vto:name</code></td>
<td>Vue Router :to name</td>
<td>

```html
:to="{ name: '$1',$2 }"
```

</td>
</tr>

<tr>
<td><code>vto:path</code></td>
<td>Vue Router :to path</td>
<td>

```html
:to="{ path: '$1',$2 }"
```

</td>
</tr>

<tr>
<td><code>vview</code></td>
<td>RouterView</td>
<td>

```html
<RouterView>
  $0
</RouterView>
```

</td>
</tr>

<tr>
<td><code>vlink</code></td>
<td>RouterLink</td>
<td>

```html
<RouterLink ${1|to,:to|}="$2">$3</RouterLink>
```

</td>
</tr>

<tr>
<td><code>vlink:param</code></td>
<td>RouterLink with param</td>
<td>

```html
<RouterLink :to="`$1${${2:id}}$3`">$4</RouterLink>
```

</td>
</tr>

<tr>
<td><code>vlink:obj</code></td>
<td>RouterLink with object</td>
<td>

```html
<RouterLink :to="{ $1 }">$2</RouterLink>
```

</td>
</tr>

<tr>
<td><code>vlink:name</code></td>
<td>RouterLink with name</td>
<td>

```html
<RouterLink :to="{ name: '$1'$2 }">$3</RouterLink>
```

</td>
</tr>

<tr>
<td><code>vlink:path</code></td>
<td>RouterLink with path</td>
<td>

```html
<RouterLink :to="{ path: '$1'$2 }">$3</RouterLink>
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
import { defineStore } from 'pinia'

export const use${1/(.*)/${1:/capitalize}/} = defineStore('${2:key}', () => {
  $0
  
  return {
   
  }
})

```

</td>
</tr>

<tr>
<td><code>pstore:options</code></td>
<td>Setup Pinia store (Options)</td>
<td>

```javascript
import { defineStore } from 'pinia'

export const use${1/(.*)/${1:/capitalize}/} = defineStore('${2:key}', {
  state: () => ({
    
  }),
  getters: {
    
  },
  actions: {
    
  },
})

```

</td>
</tr>

<tr>
<td><code>vuseStore</code> / <code>vus</code></td>
<td>Use store</td>
<td>

```javascript
const ${2:$1Store} = use${1/(.*)/${1:/capitalize}/}Store()
```

</td>
</tr>
</table>


### Nuxt (script)

<table width="100%">

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td><code>nfetch</code></td>
<td>Nuxt useFetch</td>
<td>

```javascript
const { data: ${1:data} } = await useFetch('$2'$3)
```

</td>
</tr>

<tr>
<td><code>nfetch:cb</code></td>
<td>Nuxt useFetch with callback</td>
<td>

```javascript
const { data: ${1:data} } = await useFetch(() => '$2'$3)
```

</td>
</tr>

<tr>
<td><code>nfetch:lazy</code></td>
<td>Nuxt useLazyFetch</td>
<td>

```javascript
const { pending, data: ${1:data} } = useLazyFetch('$2'$3)
```

</td>
</tr>

<tr>
<td><code>nfetch:lazy:cb</code></td>
<td>Nuxt useLazyFetch callback</td>
<td>

```javascript
const { pending, data: ${1:data} } = useLazyFetch(() => '$2'$3)
```

</td>
</tr>

<tr>
<td><code>nfetch:post</code></td>
<td>Nuxt useFetch POST</td>
<td>

```javascript
const { data: ${1:data} } = await useFetch('$2', {
  method: 'POST',
  body: ${3:body},$4
})
```

</td>
</tr>

<tr>
<td><code>nasyncdata</code></td>
<td>Nuxt useAsyncData</td>
<td>

```javascript
const { data: ${1:data} } = await useAsyncData('${2:key}', () => $fetch('$3')$4)
```

</td>
</tr>

<tr>
<td><code>nasyncdata:lazy</code></td>
<td>Nuxt useLazyAsyncData</td>
<td>

```javascript
const { pending, data: ${1:data} } = useLazyAsyncData('${2:key}', () => $fetch('$3')$4)
```

</td>
</tr>

<tr>
<td><code>napp</code></td>
<td>Nuxt useNuxtApp</td>
<td>

```javascript
const app = useNuxtApp()
```

</td>
</tr>

<tr>
<td><code>nappConfig</code></td>
<td>Nuxt useAppConfig</td>
<td>

```javascript
const appConfig = useAppConfig()
```

</td>
</tr>

<tr>
<td><code>nruntimeConfig</code></td>
<td>Nuxt useRuntimeConfig</td>
<td>

```javascript
const config = useRuntimeConfig()
```

</td>
</tr>

<tr>
<td><code>ncookie</code></td>
<td>Nuxt useCookie</td>
<td>

```javascript
const ${1:cookie} = useCookie('${2:$1}'$3)
```

</td>
</tr>

<tr>
<td><code>ncookie:opts</code></td>
<td>Nuxt useCookie with options</td>
<td>

```javascript
const ${1:cookie} = useCookie('${2:$1}', { $3 })
```

</td>
</tr>

<tr>
<td><code>ndata</code></td>
<td>Nuxt useNuxtData</td>
<td>

```javascript
const { data: ${2:$1} } = useNuxtData('${1:key}')
```

</td>
</tr>

<tr>
<td><code>nerror</code></td>
<td>Nuxt useError</td>
<td>

```javascript
const ${1:error} = useError()
```

</td>
</tr>

<tr>
<td><code>nstate</code></td>
<td>Nuxt useState</td>
<td>

```javascript
const ${1:state} = useState('${2:$1}'$3)
```

</td>
</tr>

<tr>
<td><code>nstate:init</code></td>
<td>Nuxt useState (init)</td>
<td>

```javascript
const ${1:state} = useState('${2:$1}', () => $3)
```

</td>
</tr>

<tr>
<td><code>nhead</code></td>
<td>Nuxt useHead</td>
<td>

```javascript
useHead({
  $1
})
```

</td>
</tr>

<tr>
<td><code>nhead:title</code></td>
<td>Nuxt useHead title</td>
<td>

```javascript
useHead({
  title: $1,$0
})
```

</td>
</tr>

<tr>
<td><code>npageMeta</code></td>
<td>Nuxt definePageMeta</td>
<td>

```javascript
definePageMeta({
  $1
})
```

</td>
</tr>

<tr>
<td><code>npageMeta:title</code></td>
<td>Nuxt definePageMeta title</td>
<td>

```javascript
definePageMeta({
  title: '$1',$0
})
```

</td>
</tr>

<tr>
<td><code>npageMeta:layout</code></td>
<td>Nuxt definePageMeta layout</td>
<td>

```javascript
definePageMeta({
  layout: '$1',$0
})
```

</td>
</tr>

<tr>
<td><code>npageMeta:middleware</code></td>
<td>Nuxt definePageMeta middleware</td>
<td>

```javascript
definePageMeta({
  middleware: ['$1'$2],$0
})
```

</td>
</tr>

<tr>
<td><code>nto</code></td>
<td>Nuxt navigateTo</td>
<td>

```javascript
navigateTo('$1'$2)
```

</td>
</tr>

<tr>
<td><code>nto:obj</code></td>
<td>Nuxt navigateTo object</td>
<td>

```javascript
navigateTo({ $1 }$2)
```

</td>
</tr>

<tr>
<td><code>nto:replace</code></td>
<td>Nuxt navigateTo replace</td>
<td>

```javascript
navigateTo('$1', { replace: true })
```

</td>
</tr>

<tr>
<td><code>nto:external</code></td>
<td>Nuxt navigateTo external</td>
<td>

```javascript
navigateTo('$1', { external: true })
```

</td>
</tr>

<tr>
<td><code>nto:redirect</code></td>
<td>Nuxt navigateTo redirect</td>
<td>

```javascript
navigateTo('$1', { redirectCode: ${2|301,302,...|} })
```

</td>
</tr>

<tr>
<td><code>nto:name</code></td>
<td>Nuxt navigateTo name</td>
<td>

```javascript
navigateTo({
  name: '$1',$0
})
```

</td>
</tr>

<tr>
<td><code>nto:path</code></td>
<td>Nuxt navigateTo path</td>
<td>

```javascript
navigateTo({
  path: '$1',$0
})
```

</td>
</tr>

<tr>
<td><code>nplugin</code></td>
<td>Nuxt plugin</td>
<td>

```javascript
export default defineNuxtPlugin((nuxtApp) => {
  $1
})
```

</td>
</tr>

<tr>
<td><code>nplugin:vue</code></td>
<td>Nuxt plugin use vue package</td>
<td>

```javascript
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use($1)
})
```

</td>
</tr>

<tr>
<td><code>nmiddleware:route</code></td>
<td>Nuxt route middleware</td>
<td>

```javascript
export default defineNuxtRouteMiddleware((to, from) => {
  $1
})
```

</td>
</tr>

<tr>
<td><code>nmiddleware:server</code></td>
<td>Nuxt server middleware</td>
<td>

```javascript
export default defineEventHandler((event) => {
  $1
})
```

</td>
</tr>

<tr>
<td><code>napi</code></td>
<td>Nuxt api route</td>
<td>

```javascript
export default defineEventHandler(${1:async }(event) => {
  $2
  
  return {
    $3
  }
})
```

</td>
</tr>

<tr>
<td><code>nplugin:server</code></td>
<td>Nuxt server plugin</td>
<td>

```javascript
export default defineNitroPlugin((nitroApp) => {
  $1
})
```

</td>
</tr>

<tr>
<td><code>nreadBody</code></td>
<td>Nuxt readBody</td>
<td>

```javascript
const ${1:body} = await readBody(event)
```

</td>
</tr>

<tr>
<td><code>ngetQuery</code></td>
<td>Nuxt getQuery</td>
<td>

```javascript
const { $1 } = getQuery(event)
```

</td>
</tr>

<tr>
<td><code>ngetCookie</code></td>
<td>Nuxt getCookie</td>
<td>

```javascript
getCookie(event, '${1:cookie}')
```

</td>
</tr>

<tr>
<td><code>nsetCookie</code></td>
<td>Nuxt setCookie</td>
<td>

```javascript
setCookie(event, '${1:cookie}', ${2:value})
```

</td>
</tr>
</table>


### Nuxt (template)

<table width="100%">

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td><code>nlink</code></td>
<td>NuxtLink</td>
<td>

```html
<NuxtLink ${1|to,:to|}="$2">$3</NuxtLink>
```

</td>
</tr>

<tr>
<td><code>nlink:blank</code></td>
<td>NuxtLink with target _blank</td>
<td>

```html
<NuxtLink ${1|to,:to|}="$2" target="_blank" $3>$4</NuxtLink>
```

</td>
</tr>

<tr>
<td><code>nlink:external</code></td>
<td>NuxtLink with target external</td>
<td>

```html
<NuxtLink ${1|to,:to|}="$2" external target="${3|_blank,_self|}" $4>$5</NuxtLink>
```

</td>
</tr>

<tr>
<td><code>nlink:param</code></td>
<td>NuxtLink with param</td>
<td>

```html
<NuxtLink :to="`$1${${2:id}}$3`" $4>$5</NuxtLink>
```

</td>
</tr>

<tr>
<td><code>nlink:obj</code></td>
<td>NuxtLink with object</td>
<td>

```html
<NuxtLink :to="{ $1 }" $2>$3</NuxtLink>
```

</td>
</tr>

<tr>
<td><code>nlink:name</code></td>
<td>NuxtLink with name</td>
<td>

```html
<NuxtLink :to="{ name: '$1'$2 }" $3>$4</NuxtLink>
```

</td>
</tr>

<tr>
<td><code>nlink:path</code></td>
<td>NuxtLink with path</td>
<td>

```html
<NuxtLink :to="{ path: '$1'$2 }" $3>$4</NuxtLink>
```

</td>
</tr>

<tr>
<td><code>nloading</code></td>
<td>NuxtLoadingIndicator</td>
<td>

```html
<NuxtLoadingIndicator $1/>
```

</td>
</tr>

<tr>
<td><code>nlayout</code></td>
<td>NuxtLayout</td>
<td>

```html
<NuxtLayout $1>$2</NuxtLayout>
```

</td>
</tr>

<tr>
<td><code>nlayout:name</code></td>
<td>NuxtLayout with name</td>
<td>

```html
<NuxtLayout ${2|name,:name|}="$3">$4</NuxtLayout>
```

</td>
</tr>

<tr>
<td><code>npage</code></td>
<td>NuxtPage</td>
<td>

```html
<NuxtPage $1/>
```

</td>
</tr>

<tr>
<td><code>npage:static</code></td>
<td>NuxtPage with static key</td>
<td>

```html
<NuxtPage page-key="static" $1/>
```

</td>
</tr>

<tr>
<td><code>nclient</code></td>
<td>ClientOnly</td>
<td>

```html
<ClientOnly $1>$2</ClientOnly>
```

</td>
</tr>

<tr>
<td><code>nclient:fallbacks</code></td>
<td>ClientOnly with fallback props</td>
<td>

```html
<ClientOnly fallback-tag="${1:span}" fallback="${2:Loading...}">$3</ClientOnly>
```

</td>
</tr>

<tr>
<td><code>nclient:fallback</code></td>
<td>ClientOnly with fallback template</td>
<td>

```html
<ClientOnly>
  <template #fallback>
    $0
  </template>
</ClientOnly>
```

</td>
</tr>

<tr>
<td><code>nTeleport</code></td>
<td>Nuxt Teleport</td>
<td>

```html
<Teleport to="$1">
  $0
</Teleport>
```

</td>
</tr>
</table>


### VueUse (script)

<table width="100%">

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td><code>vwatchArray</code></td>
<td>VueUse watchArray</td>
<td>

```javascript
watchArray(${1:list}, (new${1/(.*)/${1:/capitalize}/}, old${1/(.*)/${1:/capitalize}/}, ${4:added}, ${5:removed}) => {
  $0
})
```

</td>
</tr>

<tr>
<td><code>vwatchAtMost</code></td>
<td>VueUse watchAtMost</td>
<td>

```javascript
watchAtMost(${1:source}, (${2:val}) => {
  $0
}, { max: ${3:3} })
```

</td>
</tr>

<tr>
<td><code>vwatchDebounced</code></td>
<td>VueUse watchDebounced</td>
<td>

```javascript
watchDebounced(${1:source}, (${2:val}) => {
  $0
}, { debounce: ${3:500}, maxWait: ${4:1000} })
```

</td>
</tr>

<tr>
<td><code>vwatchIgnorable</code></td>
<td>VueUse watchIgnorable</td>
<td>

```javascript
const { stop:$3, ignoreUpdates:$4 } =  = watchIgnorable(${1:source}, (${2:val}) => {
  $0
})
```

</td>
</tr>

<tr>
<td><code>vwatchOnce</code></td>
<td>VueUse watchOnce</td>
<td>

```javascript
watchOnce(${1:source}, (${2:val}) => {
  $0
})
```

</td>
</tr>

<tr>
<td><code>vwatchPausable</code></td>
<td>VueUse watchPausable</td>
<td>

```javascript
const { stop$3, pause$4, resume$5 } = watchPausable(${1:source}, (${2:val}) => {
  $0
})
```

</td>
</tr>

<tr>
<td><code>vwatchThrottled</code></td>
<td>VueUse watchThrottled</td>
<td>

```javascript
watchThrottled(${1:source}, (${2:val}) => {
  $0
}, { throttle: ${3:500} })
```

</td>
</tr>

<tr>
<td><code>vwatchTriggerable</code></td>
<td>VueUse watchTriggerable</td>
<td>

```javascript
const { trigger$3, ignoreUpdates$4 } = watchTriggerable(${1:source}, (${2:val}) => {
  $0
})
```

</td>
</tr>

<tr>
<td><code>vwatchWithFilter</code></td>
<td>VueUse watchWithFilter</td>
<td>

```javascript
watchWithFilter(${1:source}, (${2:val}) => {
  $0
}, { eventFilter: $3 })
```

</td>
</tr>

<tr>
<td><code>vwhenever</code></td>
<td>VueUse whenever</td>
<td>

```javascript
whenever(${1:source}, (${2:val}) => {
  $0
})
```

</td>
</tr>

<tr>
<td><code>vuse:vmodel</code></td>
<td>Implement v-model using useVModel</td>
<td>

```javascript
const ${2:value} = useVModel(props, '${1:modelValue}', emit)
```

</td>
</tr>

<tr>
<td><code>vuse:vmodels</code></td>
<td>Implement v-model using useVModels</td>
<td>

```javascript
const { ${1:modelValue}$2 } = useVModels(props, emit)
```

</td>
</tr>

<tr>
<td><code>vuse:hover</code></td>
<td>VueUse useElementHover</td>
<td>

```javascript
const ${1:elem} = ref<${2|HTMLInputElement,HTMLDivElement,...|} | null>(null)
const ${3:isHovered} = useElementHover($1)
```

</td>
</tr>

<tr>
<td><code>vuse:fetch</code> / <code>vuf</code></td>
<td>VueUse useFetch</td>
<td>

```javascript
const { data: ${1:data} } = useFetch('$2'$3)
```

</td>
</tr>

<tr>
<td><code>vget</code></td>
<td>VueUse get</td>
<td>

```javascript
get($1)
```

</td>
</tr>

<tr>
<td><code>vset</code></td>
<td>VueUse set</td>
<td>

```javascript
set($1, $2)
```

</td>
</tr>

<tr>
<td><code>vdef</code></td>
<td>VueUse isDefined</td>
<td>

```javascript
isDefined($1)
```

</td>
</tr>

<tr>
<td><code>vuse:toggle</code></td>
<td>VueUse useToggle</td>
<td>

```javascript
const [${1:value}, ${2:toggle}] = useToggle()
```

</td>
</tr>

<tr>
<td><code>vuse:toggle:fn</code></td>
<td>VueUse useToggle function</td>
<td>

```javascript
const toggle${2/(.*)/${1:/capitalize}/} = useToggle($1)
```

</td>
</tr>
</table>


### Vue Macros

<table width="100%">

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td><code>vdefineModels</code> / <code>vmacro:model</code></td>
<td>Define models</td>
<td>

```javascript
const { modelValue$2 } = defineModels<{
  modelValue: ${1:string}
}>()
```

</td>
</tr>

<tr>
<td><code>vdefinePropsRefs</code> / <code>vmacro:props</code></td>
<td>Define props refs</td>
<td>

```javascript
const { $2 } = definePropsRefs<{
  $1
}>()
```

</td>
</tr>

<tr>
<td><code>vdefineOptions</code> / <code>vmacro:options</code></td>
<td>Define options</td>
<td>

```javascript
defineOptions({
  $0
})
```

</td>
</tr>

<tr>
<td><code>vdefineSlots</code> / <code>vmacro:slots</code></td>
<td>Define slots</td>
<td>

```javascript
defineSlots<{
  $0
}>()
```

</td>
</tr>

<tr>
<td><code>vdefineRender</code> / <code>vmacro:render</code></td>
<td>Define render</td>
<td>

```javascript
defineRender(
  $0
)
```

</td>
</tr>

<tr>
<td><code>vdefineRender:fn</code> / <code>vmacro:render:fn</code></td>
<td>Define render function</td>
<td>

```javascript
defineRender(() => {
  return (
    $0
  )
})
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
deno task generate
```
