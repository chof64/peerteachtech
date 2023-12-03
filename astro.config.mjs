import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    mdx(),
  ],
});
