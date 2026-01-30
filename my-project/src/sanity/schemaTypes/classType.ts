import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'classType',
  title: 'Classes',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Class Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'maxParticipants',
      title: 'Maximum Participants',
      type: 'string',
    }),
  ],
})
