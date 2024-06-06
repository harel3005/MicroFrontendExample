import { createApp } from "vue";
import HelloWorld from "./HelloWorld.vue";

const mount = (el, props) => {
  const app = createApp(HelloWorld, props);
  app.mount(el);
};

export { mount };
