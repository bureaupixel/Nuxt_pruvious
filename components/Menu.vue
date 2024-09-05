<template>
  <nav
    v-if="menu.length"
    class="relative pt-10 pb-20"
    :class="{ }"
  >
    <ul @mouseleave="updateDotPosition()" class="flex-row gap-15">
      <li v-for="({ label, link }, i) of menu" ref="menuItemEls">
        <NuxtLink
          :to="link"
          @click="mobileMenuVisible = false"
          @mouseenter="updateDotPosition(i)"
          class="text-xl font-bold text-heading transition dark:text-white"
        >
          <h1 class="text-2xl font-bold">{{ label }}</h1>
        </NuxtLink>
      </li>
    </ul>

   
  </nav>
</template>

<script lang="ts" setup>
import { getCollectionData } from '#pruvious/client'
import { useEventListener } from '@vueuse/core'

// Fetch menu data from the Settings collection
const { menu } = await getCollectionData('settings')

const mobileMenuVisible = useMobileMenuVisible()
const menuItemEls = ref<HTMLElement[]>([])
const dotPosition = ref<number | null>(null)
const route = useRoute()

let activeMenuIndex = 0

onMounted(() => {
  activeMenuIndex = menu.findIndex(({ link }) => link === route.path || route.path.startsWith(`${link}/`))
  updateDotPosition()
})

useEventListener('resize', () => updateDotPosition())

function updateDotPosition(index?: number) {
  if (activeMenuIndex > -1) {
    menuItemEls.value[index ?? activeMenuIndex].offsetLeft
    dotPosition.value = menuItemEls.value[index ?? activeMenuIndex].offsetLeft
  }
}
</script>


<style>
li{display: block;}
</style>