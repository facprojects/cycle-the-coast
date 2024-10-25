import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { availability } from 'sanity-plugin-availability'

export default defineConfig({
  name: 'default',
  title: 'Cycle the Coast',

  projectId: '3iq2cmvf',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), availability()],

  schema: {
    types: schemaTypes,
  },
})
