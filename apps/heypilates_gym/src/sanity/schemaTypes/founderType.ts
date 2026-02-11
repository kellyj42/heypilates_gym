import { defineType, defineField } from "sanity"

export const founderType = defineType({
  name: "founder",
  title: "Founder",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),

    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "bio",
      title: "Short Bio",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "credentials",
      title: "Credentials / Highlights",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "vision",
      title: "Vision Statement",
      type: "text",
      rows: 4,
    }),

    defineField({
      name: "image",
      title: "Founder Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
})
