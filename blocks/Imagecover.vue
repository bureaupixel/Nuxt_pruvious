<template>
  <div class="bg-fixed bg-cover mb-10 relative">
    <PruviousPicture :image="image" class="h-auto w-full overflow-hidden" />
    <p class="absolute inset-0 flex justify-center items-center text-white text-sm animate-fade animate-once animate-delay-[300ms]">
      <Container class="animate-fade animate-once animate-delay-[600ms]">
      <h1 class="text-post-title font-bold text-white" v-if="title">{{ title }}</h1>
      <h4 class=" text-white leading-6"  v-if="kicker">{{ kicker }}</h4>
    </Container>

    </p>
  </div>
</template>

<script lang="ts" setup>
import { defineBlock, imageField , textField} from '#pruvious'

defineBlock({
  icon: 'Photo',
})

defineProps({
  title: textField({ required: true }),
  kicker: textField(),
  image: imageField({
    required: true,
    minWidth: 1440,
    sources: [
      { media: '(max-width: 400px)', format: 'webp', width: 720 },
      { media: '(max-width: 400px)', format: 'jpeg', width: 720 },
      { format: 'webp', width: 1440 },
      { format: 'jpeg', width: 1440 },
    ],
  }),
})
</script>
