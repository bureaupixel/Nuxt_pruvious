<template>
  <Container>
    <div class="max-w-content space-y-2">
      <h1 class="text-post-title font-bold">{{ basetitle }}
       <div class="capitalize opacity-50" >{{ title }}</div>
      </h1>
      <p v-if="kicker" class="text-sm">{{ kicker }}</p>
    </div>
  </Container>
</template>

<script lang="ts" setup>
import { defineBlock, textField } from '#pruvious'

defineBlock({
  icon: 'H1',
})

defineProps({
  basetitle: textField({  }),
  title: textField({ required: true }),
  kicker: textField(),
})
</script>
