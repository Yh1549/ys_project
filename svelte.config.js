import staticAdapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";
const dev = process.argv.includes("dev");
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: staticAdapter({
      pages: "docs",
      assets: "docs",
      fallback: "index.html",
      precompress: false,
      strict: true,
    }),
    paths: {
      base: dev ? "" : "/ys_project",
    },
  },
  preprocess: vitePreprocess(),
};

export default config;
