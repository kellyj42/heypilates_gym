import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'pricing',
  title: 'Pricing',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category (e.g. Fitness Classes, Reformer)',
      type: 'string',
    }),
    defineField({
      name: 'items',
      title: 'Pricing Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'price', title: 'Price', type: 'string' },
            { name: 'note', title: 'Note', type: 'string' },
          ],
        },
      ],
    }),
  ],
})
