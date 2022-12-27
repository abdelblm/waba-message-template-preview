<script setup lang="ts">
import { Icon } from '@iconify/vue2'
import {
  getWabaTemplates,
  type WabaTemplateComponent,
} from '@/api/waba_templates'
import type { WabaTemplate } from '@/api/waba_templates'
const name = ref()
const waba_templates = ref<WabaTemplate[]>([])
const selected_template = ref<WabaTemplate>()

function getComponentByType(type: string): WabaTemplateComponent {
  return selected_template.value?.components.find((e) => e.type === type)
}

const body = computed(() => {
  return getComponentByType('BODY')
})
const header = computed(() => {
  return getComponentByType('HEADER')
})
const footer = computed(() => {
  return getComponentByType('FOOTER')
})
const buttons = computed(() => {
  return getComponentByType('BUTTONS')
})
getWabaTemplates().then(({ data }) => (waba_templates.value = data))
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-text-field v-model="name" label="user name"></v-text-field>
      <!-- <h1>my name : {{ name }}</h1> -->
      <v-col cols="12">
        <v-select
          v-model="selected_template"
          label="select one of waba templates"
          :items="waba_templates"
          item-text="name"
          return-object
        ></v-select>
      </v-col>

      <v-col cols="12" v-if="selected_template">
        <template>
          <v-card class="mx-auto" max-width="344" outlined>
            <v-card-text>
              <template class="header" v-if="header">
                <template v-if="header.formate === 'IMAGE'"></template>
                <template v-else-if="header.formate === 'DOCUMENT'"></template>
              </template>
              <p class="body" v-if="body">
                {{ body.text }}
              </p>
              <h4 class="footer" v-if="footer">
                {{ footer.text }}
              </h4>
            </v-card-text>
            <hr />

            <v-card-actions class="btn"  v-if="buttons">
              <v-btn class="button" v-for="btn in buttons.buttons">
                {{ btn.text }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </template>
        <!-- <v-alert dark color="red">todo replace this with your own code</v-alert>
        <code>
          {{ selected_template }}
        </code> -->
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
<style scoped>

.v-btn {
  color: blue;
  
}
.btn{
 display: flex;
 justify-content: center;
}
</style>
