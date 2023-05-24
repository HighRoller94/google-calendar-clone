import {defineField, defineType} from 'sanity'

export default defineType ({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Site Title',
            type: 'string'
        },
        {
            name: 'logo',
            title: 'Site Logo',
            type: 'image'
        },
        {
            name: 'description',
            title: 'Meta Description',
            type: 'text'
        },
        {
            name: 'socials',
            title: "Socials",
            type: "array",
            of: [{ type: "reference", to: { type: "social" } }],
        },
    ],
})