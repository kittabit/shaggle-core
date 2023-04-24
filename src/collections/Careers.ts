import { CollectionConfig } from 'payload/types';

const Careers: CollectionConfig = {
	slug: 'careers',
    versions: true,
    admin: {
        useAsTitle: 'title',
    },
	fields: [
		{
			name: 'title',
			type: 'text',            
			required: true,
		}, 
        { 
            type: "row",
            fields: [
                {
                    name: 'headline',
                    label: "Headline",
                    type: 'text',            
                    required: false,
                    admin: {
                        width: "50%",
                    },
                }, 
                {
                    name: 'subheader',
                    label: "Subheader",
                    type: 'text',            
                    required: false,
                    admin: {
                        width: "50%",
                    },
                }, 
            ],
        },
        {
			name: 'applyUrl',
            label: "Application URL",
			type: 'text',            
			required: false,
		},
        {
			name: 'briefDescription',
            label: "Brief Description",
			type: 'textarea',            
			required: false,
		}, 
        {
			name: 'fullDescription',
            label: "Full Description",
			type: 'richText',            
			required: false,
		}, 
        {
			name: 'additionDetails',
            label: "Additional Details",
			type: 'richText',            
			required: false,
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

export default Careers;