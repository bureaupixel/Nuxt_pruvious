<template>
  <ClientOnly>
  <Container>  

  <div class="flex animate-fade animate-once animate-delay-[500ms]">
    <div class="flex-auto w-1 pt-3"></div>
    <div class="flex-row p-5 justify-end">
      <button style="margin-left: 16px" @click="drawer = true">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
          <path fill="currentColor" d="M4.5 17.27q-.213 0-.356-.145T4 16.768t.144-.356t.356-.143h15q.213 0 .356.144q.144.144.144.357t-.144.356t-.356.143zm0-4.77q-.213 0-.356-.144T4 11.999t.144-.356t.356-.143h15q.213 0 .356.144t.144.357t-.144.356t-.356.143zm0-4.77q-.213 0-.356-.143Q4 7.443 4 7.23t.144-.356t.356-.143h15q.213 0 .356.144T20 7.23t-.144.356t-.356.144z"></path>
        </svg>
      </button>
    </div>
  </div>

  <el-drawer
  v-model="drawer"
  class="drawer bg-white dark:bg-zinc-900 opacity-95 dark:opacity-98"
  :direction="direction"
  size="50%"
>
  <!-- Drawer content goes here -->
    <div class="animate-fade animate-once animate-delay-[300ms] ">
      <h1 class="text-4xl font-extrabold">BUREAUPIXEL Example</h1>
      <p class="text-lg animate-fade animate-once animate-delay-[500ms]
      ">PRUVIOUS CMS with a NUXT frontend and Github markdown files.</p>
      

    </div>

    <div class="animate-fade animate-once animate-delay-[600ms]">
      <Menu class="ml-auto" />
    </div>

    <div class="mt-auto m-0 p-0 animate-fade animate-once animate-delay-[800ms]">
      <Footer />
    </div>
</el-drawer>
</Container>
</ClientOnly>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { DrawerProps } from 'element-plus'

const drawer = ref(false)
const direction = ref<DrawerProps['direction']>('rtl')
</script>
