    <template>
        <Container >
            <NuxtLink :to="homepageLink">
                <h1 class="text-4xl font-bold">{{ label }}</h1>
                <div class="">{{ kicker }}</div>
            </NuxtLink>
        </Container>
    </template>
  
  <script lang="ts" setup>
  import { linkField, textField } from '#pruvious'
  
  defineProps({
    homepageLink: linkField({
      required: true,
      placeholder: 'Select a page',
    }),
    label: textField({  }),
    kicker: textField()
  })
  </script>