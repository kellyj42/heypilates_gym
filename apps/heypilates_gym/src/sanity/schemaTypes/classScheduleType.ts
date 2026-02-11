// sanity/schema/classSchedule.ts
export default {
  name: 'classSchedule',
  title: 'Class Schedule',
  type: 'document',
  fields: [
    {
      name: 'weekStart',
      title: 'Week Starting',
      type: 'date',
      description: 'Start date of the schedule week',
    },
    {
      name: 'days',
      title: 'Weekly Schedule',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'day',
              title: 'Day',
              type: 'string',
              options: {
                list: [
                  { title: 'Monday', value: 'monday' },
                  { title: 'Tuesday', value: 'tuesday' },
                  { title: 'Wednesday', value: 'wednesday' },
                  { title: 'Thursday', value: 'thursday' },
                  { title: 'Friday', value: 'friday' },
                  { title: 'Saturday', value: 'saturday' },
                  { title: 'Sunday', value: 'sunday' },
                ],
              },
            },
            {
              name: 'date',
              title: 'Date',
              type: 'date',
            },
            {
              name: 'classes',
              title: 'Classes',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'time',
                      title: 'Time',
                      type: 'string',
                    },
                    {
                      name: 'classType',
                      title: 'Class',
                      type: 'reference',
                      to: [{ type: 'classType' }],
                    },
                    {
                      name: 'instructor',
                      title: 'Instructor',
                      type: 'string',
                    },
                    {
                      name: 'spots',
                      title: 'Spots Available',
                      type: 'number',
                    },
                    {
                      name: 'room',
                      title: 'Room',
                      type: 'string',
                      options: {
                        list: [
                          { title: 'Main Studio', value: 'main' },
                          { title: 'Reformer Room', value: 'reformer' },
                        ],
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'isActive',
      title: 'Active Schedule',
      type: 'boolean',
      initialValue: true,
    },
  ],
};