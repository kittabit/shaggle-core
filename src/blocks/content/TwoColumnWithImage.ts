import { Block, CollectionConfig } from 'payload/types';

export const TwoColumnWithImage: Block = {
    slug: 'twoColumnWithImage',
    labels: {
        singular: 'Two Column With Image',
        plural: 'Two Column With Images',
    },
    fields: [
        {
            name: 'contentImage',
            label: "Image",
            type: 'upload',
            relationTo: 'media',
            required: false,
        },
        {
            type: "row",
            fields: [                
                {
                    name: 'headline',
                    label: 'Headline',
                    type: 'text',
                    admin: {
                        width: '50%',
                    },
                },
                {
                    name: 'content',
                    label: 'Content',
                    type: 'richText',
                    admin: {
                        width: '100%',
                    },
                },
                {
                    name: 'btnText',
                    label: 'Button Text',
                    type: 'text',
                    admin: {
                        width: '50%',
                    },
                },
                {
                    name: 'btnUrl',
                    label: 'Button URL',
                    type: 'text',
                    admin: {
                        width: '50%',
                    },
                },                
            ],
        },
    ],
  };