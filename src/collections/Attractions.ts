import { CollectionConfig } from 'payload/types';

const Attractions: CollectionConfig = {
	slug: 'attractions',
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
			type: 'tabs',
			tabs: [
			  {
				label: 'Basic', 
				fields: [ 
					{
						name: 'headline',
						label: "Headline",
						type: 'text',
						required: false,
					}, 
					{
						name: 'externalURL',
						label: "External URL",
						type: 'text',
						required: false,
					}, 						                 
					{
						name: 'intro',
						label: "Intro Text/Description",
						type: 'textarea',
						required: false,
					}, 				 					
				],
			  },
			  {
				label: 'Photography', 
				fields: [ 
					{
                    	name: 'smallThumbnail',
                    	label: "Small Thumbnail",
                    	type: 'upload',
                    	relationTo: 'media',
                    	required: false,
                	},				
					{
                    	name: 'largeThumbnail',
                    	label: "Large Thumbnail",
                    	type: 'upload',
                    	relationTo: 'media',
                    	required: false,
                	},	
					{
						name: 'imageGallery',
						label: "Image Gallery",
						minRows: 0,
						maxRows: 50,            
						type: 'array',
						labels: {
							singular: 'Image',
							plural: 'Images',
						},
						fields: [
							{
								name: 'altText',
								type: 'text',
							},
							{
								name: 'galleryImage',
								type: 'upload',
								relationTo: 'media',
								required: false,
							},
						],
					},  								
				],
			  },
			  {
				label: 'Location', 
				fields: [ 
					{
						type: 'row',
						fields: [ 
							{
								name: 'streetAddress1',
								label: "Street Address",
								type: 'text',
								admin: {
									width: "50%",
								},
							  },
							  {
								name: 'streetAddress2',
								label: "Street Address 2",
								type: 'text',
								admin: {
									width: "50%",
								},                
							  },              
							  {
								name: 'city',
								label: "City",
								type: 'text',
								admin: {
									width: "50%",
								},                                    
							  },           
							  {
								name: 'state',
								label: "State",
								type: 'text',
								admin: {
									width: "25%",
								},                                    
							  },                 
							  {
								name: 'postalCode',
								label: "Postal Code",
								type: 'text',
								admin: {
									width: "25%",
								},                                    
							  },  
						],
					},
					{
						name: 'geoSpatialInformation',
						label: "Geospatial",
						type: 'group',
						fields: [ 
							{
								type: 'row',
								fields: [
									{
										name: 'latitude',
										type: 'text',
									},
									{
										name: 'longitude',
										type: 'text',
									},    
								],
							}          
						],
					}, 
				],
			  },			  
			]
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

export default Attractions;