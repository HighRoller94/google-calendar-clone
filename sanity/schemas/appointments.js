import {defineField, defineType} from 'sanity'
import lessonTypes from './lessonTypes'

export default defineType({
  name: 'appointments',
  title: 'Appointments',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Lesson Type',
      type: 'string',
      options: {
        list: [...lessonTypes],
      },
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
    },
    {
      name: 'notes',
      title: 'Additional Notes',
      type: 'text',
    },
  ],
})
