import { Block, CollectionConfig } from 'payload/types';

export const DefaultFAQs: Block = {
    slug: 'defaultFaqs',
    labels: {
        singular: 'Default FAQ', 
        plural: 'Default FAQs',       
    },
    fields: [
        {
            name: 'faqs',
            labels: {
                singular: 'FAQ',
                plural: 'FAQS',
            },
            type: 'array',
            fields: [
                {
                    name: 'question',
                    label: 'Question',
                    type: 'text',
                },
                {
                    name: 'answer',
                    label: 'Answer',
                    type: 'richText',
                },
            ],
        },
    ],
  };