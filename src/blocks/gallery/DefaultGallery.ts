import { Block, CollectionConfig } from 'payload/types';

export const DefaultGallery: Block = {
    slug: 'defaultGallery',
    labels: {
        singular: 'Default Gallery', 
        plural: 'Default Galleries',       
    },
    fields: [
        {
            name: 'imgGallery',
            labels: {
                singular: 'Gallery Image',
                plural: 'Gallery Image(s)',
            },
            type: 'array',
            fields: [
                {
                    name: 'photoImg',
                    label: "Image",
                    type: 'upload',
                    relationTo: 'media',
                    required: false,
                },
                {
                    name: 'photoCaption',
                    label: 'Caption',
                    type: 'text',
                },
            ],
        },
    ],
  };