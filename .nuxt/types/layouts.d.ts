import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "E:/myProject/demo/node_modules/.pnpm/nuxt@3.1.2/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}