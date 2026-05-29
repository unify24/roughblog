import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
  }),
});

const lessons = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/lessons" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    topic: z.string().optional(),
  }),
});

export const collections = { blog, lessons };
