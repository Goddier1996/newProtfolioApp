import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'diploma',
  title: 'Diploma',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    })
  ]
})
