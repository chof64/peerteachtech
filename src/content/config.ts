// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content"

const pythonCourse = defineCollection({
  type: "content",
  schema: z.object({
    chapter: z.number(),
    lesson: z.number(),

    title: z.string(),
  }),
})

export const collections = {
  python: pythonCourse,
}
