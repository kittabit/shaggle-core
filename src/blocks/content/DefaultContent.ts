import { Block, CollectionConfig } from 'payload/types';

export const DefaultContent: Block = {
    slug: 'defaultContent',
    labels: {
        singular: 'Default Content',
        plural: 'Default Content',
    },
    fields: [
        {
            name: 'headline',
            label: 'Headline',
            type: 'text',
        },
        {
            name: 'content',
            label: 'Content',
            type: 'richText',
        },
        {
            type: "row",
            fields: [
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