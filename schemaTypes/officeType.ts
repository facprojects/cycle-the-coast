import {defineField, defineType} from 'sanity';

export const officeType = defineType({
    name: 'office',
    title: 'Office',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
        }),
        defineField({
            name: 'description',
            type: 'string'
        }),
        defineField({
            title: 'Location',
            name: 'location',
            type: 'geopoint'
        })
    ]
})