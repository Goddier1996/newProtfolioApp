import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'diploma',
  title: 'Diploma',
  type: 'document',
  fields: [
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
