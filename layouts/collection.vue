<template>

  <div class="my-23 space-y-23 border-b pb-23 dark:border-white/10 animate-fade animate-once animate-delay-[300ms]">
    <Container>
      <div class="max-w-content">
        <BackButton :to="collectionLandingPage">Collections</BackButton>
        <h1 class="mt-3 text-post-title font-bold">{{ page?.fields.headline || page?.title }}</h1>
        <WrittenOn :author="page?.fields.author" :publishDate="page?.publishDate" class="mt-2 text-sm" />
      </div>
    </Container>

    <!-- Our post blocks will be rendered here -->
    <slot />
  </div>

  <Footer class="mb-23" />
</template>

<script lang="ts" setup>
import { defineLayout } from '#pruvious'
import { getCollectionData, usePage } from '#pruvious/client'

defineLayout({
  allowedBlocks: ['Image', 'Prose', 'Collectionitem', 'Link', 'Textintro', 'Textonecoll', 'Texttwocoll', 'Textthreecoll',],
})

const page = unref(usePage())
const { collectionLandingPage } = await getCollectionData('settings')
</script>

<style lang="postcss" scoped>
:deep() .prose > h2 {
  @apply text-2xl;
}

:deep() .prose > h3 {
  @apply text-xl;
}
</style>
