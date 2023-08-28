import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'info',
  title: 'Info',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'info',
      title: 'Info',
      type: 'string',
    })
  ]
})
