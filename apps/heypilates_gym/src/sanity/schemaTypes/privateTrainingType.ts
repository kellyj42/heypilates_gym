export default {
  name: "privateTraining",
  title: "Private Training Page",
  type: "document",
  fields: [
    {
      name: "heroHeadline",
      title: "Hero Headline",
      type: "string",
    },
    {
      name: "heroSubtext",
      title: "Hero Subtext",
      type: "text",
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    },

    {
      name: "introText",
      title: "Intro Paragraph",
      type: "text",
    },

    {
      name: "reformer",
      title: "Private Reformer Pilates",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Title" },
        { name: "description", type: "text", title: "Description" },
        { name: "priceSingle", type: "string", title: "Single Session Price" },
        { name: "pricePack", type: "string", title: "Package Price" },
        { name: "image", type: "image", title: "Image", options: { hotspot: true } },
      ],
    },

    {
      name: "personalTraining",
      title: "Personal Training",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Title" },
        { name: "description", type: "text", title: "Description" },
        {
          name: "packages",
          type: "array",
          title: "Packages",
          of: [{ 
            type: "object",
            fields: [
              { name: "label", type: "string", title: "Package Name" },
              { name: "amount", type: "string", title: "Price" },
              { name: "note", type: "string", title: "Note" },
            ]
          }],
        },
        { name: "image", type: "image", title: "Image", options: { hotspot: true } },
      ],
    },

    {
      name: "philosophy",
      title: "Training Philosophy",
      type: "text",
    },

    {
      name: "ctaText",
      title: "CTA Text",
      type: "string",
    },
  ],
};