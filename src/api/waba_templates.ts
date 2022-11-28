import service from '@/utils/request'

export type WabaTemplateComponent = {
  type: 'BODY' | 'HEADER' | 'BUTTONS' | string
  example?: object
} & any

export type WabaTemplate = {
  id: number
  category: string
  components: WabaTemplateComponent[]
  language: string
  name: string
  namespace: string
  rejected_reason: string
  status: string
}

export const getWabaTemplate = (id: number) =>
  service.get<WabaTemplate>(`/waba_templates/${id}`)

export const getWabaTemplates = () =>
  service.get<WabaTemplate[]>(`/waba_templates`)
