import { Block, CollectionConfig } from 'payload/types';

export const ThreeColumnGrid: Block = {
    slug: 'threeColumnGrid',
    labels: {
        singular: 'Three Column Grid', 
        plural: 'Three Column Grids',       
    },
    fields: [
        {
            name: 'gridItems',
            labels: {
                singular: 'Grid Item',
                plural: 'Grid Items',
            },
            type: 'array',
            fields: [
                {
                    name: 'gridImg',
                    label: "Grid Image",
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
                            name: 'url',
                            label: 'URL',
                            type: 'text',
                            admin: {
                                width: '50%',
                            },
                        },
                    ],
                },
            ],
        },
    ],
  };