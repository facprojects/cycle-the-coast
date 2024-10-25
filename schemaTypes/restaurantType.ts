import {defineField, defineType} from 'sanity';

export const restaurantType = defineType({
    name: 'restaurant',
    title: 'Restaurant',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
        }),
        defineField({
            title: 'Cost',
            name: 'cost',
            type: 'string',
            options: {
                list: ['£', '££', '£££'],
                layout: 'radio'
            }
        }),
        defineField({
            name: 'description',
            type: 'string'
        }),
        defineField({
            title: 'Location',
            name: 'location',
            type: 'geopoint'
        }),
        defineField({
            title: 'Opening Times',
            name: 'openingTimes',
            type: 'availability'
        })
    ]
})