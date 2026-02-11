// sanity/schema/classType.ts
export default {
  name: 'classType',
  title: 'Class Type',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Class Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Class Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'maxParticipants',
      title: 'Maximum Participants',
      type: 'number',
      initialValue: 12,
    },
    {
      name: 'duration',
      title: 'Class Duration',
      type: 'string',
      initialValue: '60 minutes',
    },
    {
      name: 'level',
      title: 'Difficulty Level',
      type: 'string',
      options: {
        list: [
          { title: 'Beginner', value: 'beginner' },
          { title: 'All Levels', value: 'all' },
          { title: 'Intermediate', value: 'intermediate' },
          { title: 'Advanced', value: 'advanced' },
        ],
      },
      initialValue: 'all',
    },
    {
  name: 'category',
  title: 'Category',
  type: 'string',
  options: {
    list: [
      { title: 'Pilates', value: 'pilates' },
      { title: 'Strength', value: 'strength' },
      { title: 'Cardio', value: 'cardio' },
      { title: 'Fusion', value: 'fusion' },
    ],
  },
  validation: (Rule: any) => Rule.required(), // Add this line
},
    {
      name: 'equipment',
      title: 'Equipment Needed',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'benefits',
      title: 'Key Benefits',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'singlePrice',
      title: 'Single Class Price',
      type: 'string',
      initialValue: '35,000 UGX',
    },
    {
      name: 'packagePrice',
      title: '10-Class Package Price',
      type: 'string',
      initialValue: '250,000 UGX',
    },
    {
      name: 'packageValidity',
      title: 'Package Validity',
      type: 'string',
      initialValue: '4 weeks',
    },
    {
      name: 'color',
      title: 'Display Color',
      type: 'string',
      initialValue: '#A9B79A',
    },
  ],
};