import { defineComponent, withCtx, createTextVNode, useSSRContext } from 'vue';
import { s as storeToRefs, e as useRouter, b as useRoute } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useUser } from './user-d87f4025.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useUser();
    const { isLogin } = storeToRefs(store);
    const router = useRouter();
    const route = useRoute();
    const onLogin = () => {
      var _a;
      isLogin.value = true;
      const callback = ((_a = route.query.callback) == null ? void 0 : _a.toString()) || "";
      router.push(callback);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NButton = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NButton, { onClick: onLogin }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u767B\u5F55`);
          } else {
            return [
              createTextVNode("\u767B\u5F55")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-8e28b10d.mjs.map