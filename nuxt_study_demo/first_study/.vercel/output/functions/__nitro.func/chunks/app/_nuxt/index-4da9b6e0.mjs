import { computed, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { _ as _export_sfc, e as useRouter } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './Button-fd527451.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'ufo';
import 'defu';
import '../../nitro/vercel.mjs';
import 'node-fetch-native/polyfill';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'vooks';
import 'seemly';
import './light-5608818b.mjs';
import 'lodash-es';
import 'css-render';
import '@css-render/plugin-bem';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    let list = computed(() => {
      return router.getRoutes().reverse();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NButton = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-3c84bee6><div data-v-3c84bee6>`);
      _push(ssrRenderComponent(_component_NButton, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`hello`);
          } else {
            return [
              createTextVNode("hello")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--[-->`);
      ssrRenderList(unref(list), (item) => {
        _push(`<ul data-v-3c84bee6><li data-v-3c84bee6>${ssrInterpolate(item.name)}</li></ul>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3c84bee6"]]);

export { index as default };
//# sourceMappingURL=index-4da9b6e0.mjs.map
