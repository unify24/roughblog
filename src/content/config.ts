// src/content/config.ts
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default("zero"),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  blog,
};
