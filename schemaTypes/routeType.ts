import {defineField, defineType} from 'sanity';

export const routeType = defineType({
    name: 'route',
    title: 'Route',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
        }),
        defineField({
            title: 'Duration (minutes)',
            name: 'duration',
            type: 'number'
            // type: 'datetime',
            // options: {timeFormat: 'HH:mm'},
        }),
        defineField({
            title: 'Difficulty Level',
            name: 'difficultyLevel',
            type: 'string',
            options: {
                list: ['beginner', 'intermediate', 'expert'],
                layout: 'radio'
            }
        }),
        defineField({
            name: 'description',
            type: 'string'
        }),
        defineField({
            title: 'Start',
            name: 'start',
            type: 'geopoint'
        }),
        defineField({
            title: 'End',
            name: 'end',
            type: 'geopoint'
        }),
        defineField({
            title: 'Coordinates',
            name: 'coordinates',
            type: 'array',
            of: [{type: 'geopoint'}]
        })
    ]
})