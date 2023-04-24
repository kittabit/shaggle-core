import { Block, CollectionConfig } from 'payload/types';

export const DefaultCTA: Block = {
    slug: 'defaultCta',
    labels: {
        singular: 'Default Call to Action',
        plural: 'Default Call to Action(s)',
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