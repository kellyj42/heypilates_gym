import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'privateTraining',
  title: 'Private Training',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'pricing',
      title: 'Pricing Options',
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
