<template>
    <div class="container">
      <span v-for="{ category } of categoryBoxes">
        <span class="pr-1 text-xs">{{ category }}</span>
      </span>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { selectField, repeaterField, } from '#pruvious'
  
  defineProps({
    categoryBoxes: repeaterField({

      subfields: {
        category: selectField ({
        choices: {
          software: 'Software',
          data: 'Data',
          hard: 'Hardware',
          images: 'Images',
          sounds: 'Sounds',
        },
        required: true,
        placeholder: 'Select a category',
      }),
    },
    addLabel: 'Add category',
  })

    
  })
  </script>