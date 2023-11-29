import { useSSRContext, defineComponent, ref, mergeProps, unref, withCtx, createTextVNode } from 'vue';
import { d as defineStore, a as useState, s as storeToRefs } from '../server.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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

const useCounter = defineStore("count", {
  state: () => ({
    value: 1
  })
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Counter",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useCounter();
    const { value: count } = storeToRefs(store);
    const count2 = ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NButton = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-4" }, _attrs))}> Count: ${ssrInterpolate(unref(count))} Count2: ${ssrInterpolate(unref(count2))} <div class="mt-2">`);
      _push(ssrRenderComponent(_component_NButton, {
        onClick: ($event) => {
          count.value++;
          count2.value++;
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`+`);
          } else {
            return [
              createTextVNode("+")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NButton, {
        onClick: ($event) => {
          count.value--;
          count2.value--;
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`-`);
          } else {
            return [
              createTextVNode("-")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Counter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "counter",
  __ssrInlineRender: true,
  setup(__props) {
    const counterRef = ref(Math.round(Math.random() * 1e3));
    const counter = useState("counter", () => Math.round(Math.random() * 1e3));
    const store = useCounter();
    const { value: count } = storeToRefs(store);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NButton = __nuxt_component_0;
      const _component_Counter = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))}> Count: ${ssrInterpolate(unref(count))} Counter: ${ssrInterpolate(unref(counter))} CounterRef: ${ssrInterpolate(unref(counterRef))} <div class="mt-2">`);
      _push(ssrRenderComponent(_component_NButton, {
        onClick: ($event) => {
          counter.value++;
          counterRef.value++;
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`+`);
          } else {
            return [
              createTextVNode("+")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NButton, {
        onClick: ($event) => {
          counter.value--;
          counterRef.value--;
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`-`);
          } else {
            return [
              createTextVNode("-")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Counter, null, null, _parent));
      _push(ssrRenderComponent(_component_Counter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/counter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=counter-47aa41d6.mjs.map
