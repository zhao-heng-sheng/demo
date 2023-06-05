import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "E:/myProject/demo/node_modules/.pnpm/nuxt@3.1.2/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}