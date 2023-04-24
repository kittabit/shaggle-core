import { Block, CollectionConfig } from 'payload/types';

export const DefaultSider: Block = {
    slug: 'defaultSlider',
    labels: {
        singular: 'Default Slider', 
        plural: 'Default Sliders',       
    },
    fields: [
        {
            name: 'sliders',
            labels: {
                singular: 'Slider',
                plural: 'Sliders',
            },
            type: 'array',
            fields: [
                {
                    name: 'sliderImg',
                    label: "Slider Image",
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
                            name: 'subheader',
                            label: 'Subheader',
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
        },
    ],
  };