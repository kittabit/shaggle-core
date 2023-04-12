import { CollectionConfig } from 'payload/types';

const News: CollectionConfig = {
	slug: 'news',
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
							label: 'Blocks',
							type: 'blocks', 
							minRows: 0,
							maxRows: 20,
                            labels: {
                                singular: 'Block',
                                plural: 'Blocks',
                            },							
							blocks: []
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
						{
                            name: 'smallThumbnail',
                            label: "Small Thumbnail Image",
                            type: 'upload',
                            relationTo: 'media',
                            required: false,
                        },						
						{
                            name: 'largeThumbnail',
                            label: "Large Thumbnail Image",
                            type: 'upload',
                            relationTo: 'media',
                            required: false,
                        },												
					],
				},				
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

export default News;