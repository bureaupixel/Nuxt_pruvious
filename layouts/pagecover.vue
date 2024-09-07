<template>

  <div class="mb-23 
  animate-fade animate-once animate-delay-[300ms]
  " :class="{ '': page?.fields.footerBorder }">
  
    <!-- Our page blocks will be rendered here -->
    <slot />
  </div>

  <Footer class="mb-23" />

</template>

<script lang="ts" setup>
import { usePage } from '#pruvious/client'

const page = usePage()
</script>
