import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "world!!!1",
    answer: 42,
  },
});

export default app;
