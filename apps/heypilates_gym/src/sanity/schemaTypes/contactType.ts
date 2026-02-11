import { defineType, defineField } from "sanity"

export const contactType = defineType({
  name: "contact",
  title: "Contact Information",
  type: "document",

  fields: [
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
    }),

    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
    }),

    defineField({
      name: "address",
      title: "Address",
      type: "text",
      rows: 2,
    }),

    defineField({
      name: "hoursText",
      title: "Hours of Operation",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "socialLinks",
      title: "Social Media Links",
      type: "array",
      of: [
        defineField({
          name: "social",
          type: "object",
          fields: [
            defineField({
              name: "platform",
              title: "Platform",
              type: "string",
              options: {
                list: ["Instagram", "Facebook", "Twitter", "LinkedIn"],
              },
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "string",
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "mapEmbed",
      title: "Google Maps Embed URL",
      type: "string",
    }),
  ],
})
