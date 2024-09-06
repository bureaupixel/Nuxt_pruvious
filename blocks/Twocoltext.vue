<template>
  <Container>
    <div class="flex space-x-4">
      <div class="max-w-content space-y-2">
        <h2 class="font-bold">{{ titleLeft }}</h2>
        <p v-if="kickerLeft" class="text-lg">{{ kickerLeft }}</p>
      </div>
      <div class="max-w-content space-y-2">
        <h2 class="font-bold">{{ titleRight }}</h2>
        <p v-if="kickerRight" class="text-lg">{{ kickerRight }}</p>
      </div>
    </div>
  </Container>
</template>

<script lang="ts" setup>
import { defineBlock, textField } from '#pruvious'

defineBlock({
  icon: 'H1',
})

defineProps({
  titleLeft: textField({  }),
  kickerLeft: textField(),
  titleRight: textField({  }),
  kickerRight: textField(),
})
</script>
