<script setup lang="ts">
import {
  getWabaTemplates,
  WabaTemplate,
} from '@/api/waba_templates'



const waba_templates = ref<WabaTemplate[]>([])
const selected_template = ref<WabaTemplate>()
getWabaTemplates().then((promise) => (waba_templates.value = promise.data))
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-select label="select one of waba templates"  v-model="selected_template" :items="waba_templates" item-text="name" return-object></v-select>
      </v-col>
      <v-col cols="12">
        <v-alert dark color="red">todo replace this with your own code</v-alert>
        <code>
          {{selected_template}}
        </code>
      </v-col>
    </v-row>
  </v-container>
</template>

<route lang="json">
{
  "meta": {
    "title": "whatsapp-templates",
    "icon": "$mdi-whatsapp",
    "drawerIndex": 0
  }
}
</route>
