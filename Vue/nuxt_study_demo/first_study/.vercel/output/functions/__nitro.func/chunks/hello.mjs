import { defineEventHandler } from 'h3';

const hello = defineEventHandler((event) => {
  return {
    api: "works",
    message: "hello nuxtServer"
  };
});

export { hello as default };
//# sourceMappingURL=hello.mjs.map
