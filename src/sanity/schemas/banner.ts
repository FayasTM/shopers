import { defineField, defineType } from "sanity";

export default defineType({
    type: 'document',
    name: 'banner',
    title: 'Banner',
    fields: [
       defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
       }),

       defineField({
        name: 'subtitle',
        title: 'Sub title',
        type: 'string',
        }),

        defineField({
            name: 'price',
            title: 'Starting Form',
            type: 'number',
        }),

        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
        }),

        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            description: 'Image of the banner',
            options: {
                hotspot: true,
            },
            preview: {
                select: {
                    imageUrl: 'image.asset.url',
                    title: 'caption',
                },
            },
        }),

    ]

});    
