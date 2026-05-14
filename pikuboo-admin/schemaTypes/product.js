export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Product Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price (₹)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: 'rating',
      title: 'Rating (e.g., 4.6)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0).max(5),
    },
    {
      name: 'reviewsCount',
      title: 'Number of Reviews (e.g., 204)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: 'size',
      title: 'Size (e.g., Free Size)',
      type: 'string',
      initialValue: 'Free Size',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'bgColor',
      title: 'Background Color CSS Variable',
      type: 'string',
      description: 'e.g., var(--bg-card-1)',
      options: {
        list: [
          { title: 'Purple (card-1)', value: 'var(--bg-card-1)' },
          { title: 'Pink (card-2)', value: 'var(--bg-card-2)' },
          { title: 'Teal (card-3)', value: 'var(--bg-card-3)' },
          { title: 'Yellow (card-4)', value: 'var(--bg-card-4)' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'amazonLink',
      title: 'Amazon Purchase Link',
      type: 'url',
    },
    {
      name: 'flipkartLink',
      title: 'Flipkart Purchase Link',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'price',
      media: 'images.0',
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title,
        subtitle: `₹${subtitle}`,
        media,
      };
    },
  },
};
