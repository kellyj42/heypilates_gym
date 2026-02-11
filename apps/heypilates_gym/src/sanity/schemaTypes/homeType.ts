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
      of: [{
        type: 'object',
        fields: [
          {
            name: 'title',
            title: 'Point Title',
            type: 'string',
          },
          {
            name: 'description',
            title: 'Point Description',
            type: 'text',
          },
          {
            name: 'icon',
            title: 'Icon Type',
            type: 'string',
            options: {
              list: [
                { title: 'Sparkles', value: 'sparkles' },
                { title: 'Users', value: 'users' },
                { title: 'Heart', value: 'heart' },
                { title: 'Target', value: 'target' },
                { title: 'Shield', value: 'shield' },
                { title: 'TrendingUp', value: 'trendingUp' },
                { title: 'Calendar', value: 'calendar' },
                { title: 'Award', value: 'award' },
              ]
            }
          }
        ]
      }],
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
    defineField({
      name: "uniqueGallery",
      title: "Unique Section Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            }
          ]
        },
      ],
    }),
  ],
})