import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
    fields: [
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
    }),
    defineField({
        name: 'image',
        title: 'Image',
        type: 'string',
    }),
    defineField({
        name: 'nameProject',
        title: 'NameProject',
        type: 'string',
    }),
    defineField({
        name: 'skills',
        title: 'Skills',
        type: 'string',
    }),
    defineField({
        name: 'link',
        title: 'Link',
        type: 'string',
    }),
    defineField({
        name: 'git',
        title: 'Git',
        type: 'string',
    }),
    defineField({
        name: 'about',
        title: 'About',
        type: 'string',
    }),
    defineField({
        name: 'video',
        title: 'Video',
        type: 'string',
      }),
  ]
})
