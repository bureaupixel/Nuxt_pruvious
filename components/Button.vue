<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="group relative inline-flex h-4 items-center pl-6 font-heading text-lg transition"
  >
    <span
      class="absolute left-0 top-0 h-4 w-4  transition group-hocus:scale-75"
    >
  
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m13.692 17.308l-.707-.72l4.088-4.088H5v-1h12.073l-4.088-4.088l.707-.72L19 12z"></path></svg>

    </span>
    <span class="mt-px">
      <slot />
    </span>
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps({
  to: String,
})
</script>
