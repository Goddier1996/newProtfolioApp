import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'recommends',
  title: 'Recommends',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'string',
    }),
    defineField({
      name: 'linkedin',
      title: 'Linkedin',
      type: 'string',
    }),
  ],
})
