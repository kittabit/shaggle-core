import { CollectionConfig } from 'payload/types';

import { DefaultSider } from '../blocks/sliders/DefaultSlider';
import { DefaultContent } from '../blocks/content/DefaultContent';
import { ThreeColumnGrid } from '../blocks/content/ThreeColumnGrid';
import { TwoColumnWithImage } from '../blocks/content/TwoColumnWithImage';
import { DefaultCTA } from '../blocks/cta/DefaultCTA';
import { DefaultFAQs } from '../blocks/faqs/DefaultFAQs';
import { DefaultGallery } from '../blocks/gallery/DefaultGallery';

const Pages: CollectionConfig = {
	slug: 'pages',
	versions: true,
	admin: {
		defaultColumns: ['title', 'author', 'status'],
		useAsTitle: 'title',
	},		
	fields: [
		{
			name: 'title',
			type: 'text',
			required: true,
		},
		{
            type: 'tabs',
            tabs: [
                {
                    label: 'Post Content', 
                    fields: [ 
						{
							name: 'layout', 
							type: 'blocks', 
							label: 'Blocks',
							minRows: 0,
							maxRows: 20,
                            labels: {
                                singular: 'Block',
                                plural: 'Blocks',
                            },														
							blocks: [ 
								DefaultSider,
								DefaultContent,
								ThreeColumnGrid,
								TwoColumnWithImage,
								DefaultCTA,
								DefaultFAQs,
								DefaultGallery,
							],
						},		
					],
				},
				{	
					label: 'Post Media',
					fields: [
						{
                            name: 'pageHeader',
                            label: "Page Header Image",
                            type: 'upload',
                            relationTo: 'media',
                            required: false,
                        },
					],
				}
			],
		},
		{
			name: 'slug',
			type: 'text',
			required: true,
			admin: {
				position: 'sidebar',
			},			
		},		
		{
			name: 'status',
			type: 'select',
			options: [
				{
					value: 'draft',
					label: 'Draft',
			  	},
			  	{
					value: 'private',
					label: 'Private',
			  	},				
			  	{
					value: 'published',
					label: 'Published',
			  	},
			],
			defaultValue: 'draft',
			admin: {
				position: 'sidebar',
			}
		},
		{
			name: 'publishedDate',
			type: 'date',
			admin: {
				position: 'sidebar',
			}
		},
		{
			name: 'author',
			type: 'relationship',
			relationTo: 'users',
			admin: {
			  position: 'sidebar',
			}
		},			
	]
};

export default Pages;