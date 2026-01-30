import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'introText',
      title: 'Intro Text',
      type: 'text',
    }),
    defineField({
      name: 'conceptText',
      title: 'Concept Description',
      type: 'text',
    }),
    defineField({
      name: 'uniquePoints',
      title: 'What Makes Hey Pilates Unique',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'ctaText',
      title: 'Call To Action Button Text',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})
