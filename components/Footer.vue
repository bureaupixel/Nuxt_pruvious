<template>
  <Container>
    <footer class="flex items-center justify-between gap-6 ph:flex-col pt-10">
      
      <DarkModeSwitch />
    
      <p class="text-sm">{{ copyrightText }}</p>


      <div class="flex basis-1/12">
          <div class="flex-1 basis-4/12 pr-2">
              <NuxtLink to="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M5.692 19V9.946L2.604 12.25L2 11.458L12 4l4.346 3.223V5h1.885v3.639l3.788 2.819l-.603.792l-3.089-2.304V19h-5.096v-5.23h-2.462V19zm1-1H9.77v-5.23h4.462V18h3.096V9.21L12 5.256L6.692 9.21zm3.5-7.994h3.616q0-.704-.542-1.159q-.543-.455-1.266-.455t-1.265.453t-.543 1.16M9.77 18v-5.23h4.462V18v-5.23H9.769z"></path>
                  </svg>
                  <span class="hidden-on-hover text-xs">Home</span>
              </NuxtLink> 
          </div>


          <div class="flex-1 basis-4/12 text-right">
              <NuxtLink to="https://github.com/bureaupixel/" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 256 256">
                      <path fill="currentColor" d="M203.94 76.16A55.73 55.73 0 0 0 199.46 30a4 4 0 0 0-3.46-2a55.78 55.78 0 0 0-46 24h-28a55.78 55.78 0 0 0-46-24a4 4 0 0 0-3.46 2a55.73 55.73 0 0 0-4.48 46.16A53.8 53.8 0 0 0 60 104v8a52.06 52.06 0 0 0 52 52h1.41A36 36 0 0 0 100 192v12H72a28 28 0 0 1-28-28a36 36 0 0 0-36-36a4 4 0 0 0 0 8a28 28 0 0 1 28 28a36 36 0 0 0 36 36h28v20a4 4 0 0 0 8 0v-40a28 28 0 0 1 56 0v40a4 4 0 0 0 8 0v-40a36 36 0 0 0-13.41-28H160a52.06 52.06 0 0 0 52-52v-8a53.8 53.8 0 0 0-8.06-27.84M204 112a44.05 44.05 0 0 1-44 44h-48a44.05 44.05 0 0 1-44-44v-8a45.76 45.76 0 0 1 7.71-24.89a4 4 0 0 0 .53-3.84a47.82 47.82 0 0 1 2.1-39.21a47.8 47.8 0 0 1 38.12 22.1a4 4 0 0 0 3.37 1.84h32.34a4 4 0 0 0 3.37-1.84a47.8 47.8 0 0 1 38.12-22.1a47.82 47.82 0 0 1 2.1 39.21a4 4 0 0 0 .53 3.83A45.85 45.85 0 0 1 204 104Z"></path>
                  </svg>
                  <span class="hidden-on-hover text-xs">Github</span>
              </NuxtLink>
          </div> 

          <div class="flex-1 basis-4/12 text-right">
              <NuxtLink to="/dashboard" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12 14.98q.214 0 .357-.142t.143-.357t-.143-.357t-.357-.143t-.357.143t-.143.357t.143.357t.357.143M12 13q.214 0 .357-.143t.143-.357V9q0-.213-.143-.357T12 8.5t-.357.143T11.5 9v3.5q0 .214.143.357T12 13m-1.04 8q-.349 0-.605-.229q-.257-.229-.319-.571l-.263-2.092q-.479-.145-1.036-.454q-.556-.31-.947-.664l-1.915.824q-.317.14-.644.03t-.504-.415L3.648 15.57q-.177-.305-.104-.638t.348-.546l1.672-1.25q-.045-.272-.073-.559q-.03-.288-.03-.559q0-.252.03-.53q.028-.278.073-.626l-1.672-1.25q-.275-.213-.338-.555t.113-.648l1.06-1.8q.177-.287.504-.406t.644.021l1.896.804q.448-.373.97-.673q.52-.3 1.013-.464l.283-2.092q.061-.342.318-.571T10.96 3h2.08q.349 0 .605.229q.257.229.319.571l.263 2.112q.575.202 1.016.463t.909.654l1.992-.804q.318-.14.645-.021t.503.406l1.06 1.819q.177.306.104.638t-.348.547L18.36 10.92q.082.31.092.569t.01.51q0 .233-.02.491q-.019.259-.088.626l1.69 1.27q.275.213.358.546t-.094.638l-1.066 1.839q-.176.306-.513.415q-.337.11-.654-.03l-1.923-.824q-.467.393-.94.673t-.985.445l-.264 2.111q-.061.342-.318.571t-.605.23zm.04-1h1.956l.369-2.708q.756-.2 1.36-.549q.606-.349 1.232-.956l2.495 1.063l.994-1.7l-2.189-1.644q.125-.427.166-.786q.04-.358.04-.72q0-.38-.04-.72t-.166-.747l2.227-1.683l-.994-1.7l-2.552 1.07q-.454-.499-1.193-.935q-.74-.435-1.4-.577L13 4h-1.994l-.312 2.689q-.756.161-1.39.52q-.633.358-1.26.985L5.55 7.15l-.994 1.7l2.169 1.62q-.125.336-.175.73t-.05.82q0 .38.05.755t.156.73l-2.15 1.645l.994 1.7l2.475-1.05q.589.594 1.222.953q.634.359 1.428.559zm1-8"></path>
                  </svg>

                  <span class="hidden-on-hover text-xs">Admin</span>
              </NuxtLink>
          </div> 




  </div>
      
    </footer>
  </Container>
</template>

<script lang="ts" setup>
import { getCollectionData } from '#pruvious/client'

// Fetch data from the Settings collection
const { copyrightText, socialMedia } = await getCollectionData('settings')
</script>


<style scoped>

/* Hide the text by default */
.hidden-on-hover {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.2s ease-in-out;
}
/* Show the text on hover */
.flex-1:hover .hidden-on-hover {
    visibility: visible;
    opacity: 1;
    position: relative;
}
</style>
