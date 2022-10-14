export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
    },

    {
      title: "Categories",
      name: "category",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            { type: "category" },
            // etc
          ],
        },
      ],
    },
  ],
}
