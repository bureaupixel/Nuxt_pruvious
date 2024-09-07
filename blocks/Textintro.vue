<template>
  <Container>
    <div class="max-w-content pb-10">
      <h1 class="text-post-title font-bold animate-fade animate-once animate-delay-[300ms]">{{ basetitle }}
      </h1>
      <h3 class="text-xl font-bold animate-fade animate-once animate-delay-[400ms]" v-if="title">{{ title }}</h3>
      <PruviousHTML :html="text" class="text-sm animate-fade animate-once animate-delay-[500ms]" v-if="text">{{ text }}</PruviousHTML>
    </div>
  </Container>
</template>

<script lang="ts" setup>
import { defineBlock, textField, editorField } from '#pruvious'

defineBlock({
  icon: 'H1',
})

defineProps({
  basetitle: textField({  }),
  title: textField({ }),
  text: editorField({
    toolbar: ['bold', 'italic', 'link', 'heading2', 'heading3', 'paragraph', 'link', 'bulletList'],
  }),
})
</script>
