import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {structureTemplate} from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'calendar',

  projectId: 'nk5lerf2',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: structureTemplate,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
