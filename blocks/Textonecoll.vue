<template>
  <Container>
    <div class="flex-row pb-10">
      <h2 class="font-bold">{{ title }}</h2>
      <PruviousHTML :html="text" v-if="text" >{{ text }}</PruviousHTML>
    </div>
  </Container>
</template>

<script lang="ts" setup>
import { defineBlock, textField, editorField } from '#pruvious'

defineBlock({
  icon: 'H1',
})

defineProps({
  title: textField({  }),
  text: editorField({
    toolbar: ['bold', 'italic', 'link', 'heading2', 'heading3', 'paragraph', 'link', 'bulletList'],
  }),
})
</script>
