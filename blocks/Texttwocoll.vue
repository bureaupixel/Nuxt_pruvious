<template>
  <Container>
    <div class="flex space-x-4 pb-10">
      <div class="max-w-content space-y-2">
        <h2 class="font-bold">{{ titleLeft }}</h2>
        <PruviousHTML :html="textLeft" v-if="textLeft" >{{ textLeft }}</PruviousHTML>
      </div>
      <div class="max-w-content space-y-2">
        <h2 class="font-bold">{{ titleRight }}</h2>
        <PruviousHTML :html="textRight" v-if="textRight" >{{ textRight }}</PruviousHTML>
      </div>
    </div>
  </Container>
</template>

<script lang="ts" setup>
import { defineBlock, textField, editorField } from '#pruvious'

defineBlock({
  icon: 'H1',
})

defineProps({
  titleLeft: textField({  }),
  textLeft: textField(),
  titleRight: textField({  }),
  textRight: textField(),
})
</script>
