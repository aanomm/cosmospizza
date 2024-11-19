import { defineCollection, z } from 'astro:content';

const menuCollection = defineCollection({
  type: 'data',
  schema: z.object({
    sections: z.array(z.object({
      title: z.string(),
      items: z.array(z.object({
        name: z.string(),
        price: z.number(),
        description: z.string().optional(),
        subsections: z.array(z.object({
          title: z.string(),
          items: z.array(z.object({
            name: z.string(),
            price: z.number(),
          }))
        })).optional()
      }))
    }))
  })
});

export const collections = {
  'menu': menuCollection,
};
