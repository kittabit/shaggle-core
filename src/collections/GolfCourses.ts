import { CollectionConfig } from 'payload/types';

const GolfCourses: CollectionConfig = {
	slug: 'golf-courses',
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
                            name: 'intro',
                            label: "Intro Text/Description",
                            type: 'textarea',
                            required: false,
                        },  
                    ],
                },
                {
                    label: 'Detailed', 
                    fields: [ 
                        {
                            name: 'description',
                            label: "Description",
                            type: 'richText',
                            required: false,
                        },
                        {
                            name: 'courseDetails',
                            label: "Course Details",
                            type: 'group',
                            fields: [ 
                                {
                                    type: 'row',
                                    fields: [
                                        {
                                            name: 'priceRangeMin',
                                            label: "Price Range Minimum", 
                                            type: 'number',
                                            required: false,
                                            admin: {
                                                step: 1,
                                                width: "50%",
                                            }
                                        },
                                        {
                                            name: 'priceRangeMin',
                                            label: "Price Range Maximum", 
                                            type: 'number',
                                            required: false,
                                            admin: {
                                                step: 1,
                                                width: "50%",
                                            }
                                        },
                                        {
                                            name: 'par',
                                            label: "Par", 
                                            type: 'text',
                                            required: false,
                                            admin: {
                                                width: "33%",
                                            }
                                        },
                                        {
                                            name: 'slope',
                                            label: "Slope", 
                                            type: 'text',
                                            required: false,
                                            admin: {
                                                width: "33%",
                                            }
                                        },
                                        {
                                            name: 'yardage',
                                            label: "Yardage", 
                                            type: 'text',
                                            required: false,
                                            admin: {
                                                width: "33%",
                                            }
                                        },
                                        {
                                            name: 'kidsPlayFree',
                                            type: 'checkbox',
                                            label: 'Kids Play Free',
                                            defaultValue: false,
                                            admin: {
                                                width: "50%",
                                            }
                                        },
                                        {
                                            name: 'acceptSingles',
                                            type: 'checkbox',
                                            label: 'Accept Singles',
                                            defaultValue: false,
                                            admin: {
                                                width: "50%",
                                            }
                                        },
                                    ],
                                },
                            ],
                        },  
                        {
                            name: 'courseRates',
                            label: "Course Rates",
                            type: 'group',
                            fields: [ 
                                {
                                    type: 'row',
                                    fields: [
                                        {
                                            name: 'rateEarlyAm',
                                            label: "Early AM Rate", 
                                            type: 'number',
                                            required: false,
                                            admin: {
                                                step: 1,
                                                width: "50%",
                                            }
                                        },
                                        {
                                            name: 'rateAm',
                                            label: "AM Rate", 
                                            type: 'number',
                                            required: false,
                                            admin: {
                                                step: 1,
                                                width: "50%",
                                            }
                                        },
                                        {
                                            name: 'ratePm',
                                            label: "PM Rate", 
                                            type: 'number',
                                            required: false,
                                            admin: {
                                                step: 1,
                                                width: "50%",
                                            }
                                        },
                                        {
                                            name: 'rateLatePm',
                                            label: "Late PM Rate", 
                                            type: 'number',
                                            required: false,
                                            admin: {
                                                step: 1,
                                                width: "50%",
                                            }
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            name: 'features',
                            label: "Course Features",
                            minRows: 0,
                            maxRows: 24,            
                            type: 'array',
                            labels: {
                                singular: 'Feature',
                                plural: 'Features',
                            },
                            fields: [
                                {
                                    name: 'icon',
                                    type: 'text',
                                },
                                {
                                    name: 'label',
                                    type: 'text',
                                },
                                {
                                    name: 'featured',
                                    label: "Featured Feature",
                                    type: 'checkbox',
                                    defaultValue: false,
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
                {
                    label: 'Photography', 
                    fields: [ 
                        {
                            name: 'smallThumbnail',
                            label: "Small Thumbail",
                            type: 'upload',
                            relationTo: 'media',
                            required: false,
                        },                                  
                        {
                            name: 'largeThumbnail',
                            label: "Large Thumbail",
                            type: 'upload',
                            relationTo: 'media',
                            required: false,
                        },  
                        {
                            name: 'courseLogo',
                            label: "Course Logo",
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
                        {
                            name: 'videoEmbed',
                            label: "Video Embed Code",
                            type: 'code',
                            required: false,
                            admin: {
                              language: 'html'
                            }
                        }
                    ],
                }, 
                {
                    label: 'Booking Engine', 
                    fields: [ 
                        {
                            type: 'row',
                            fields: [
                                {
                                    name: 'bookingUrl',
                                    label: "Booking URL",
                                    type: 'text',
                                    required: false,
                                    admin: {
                                        width: "75%",
                                    },                                     
                                },                  
                                {
                                    name: 'bookingId',
                                    label: "Course ID",
                                    type: 'text',
                                    required: false,
                                    admin: {
                                        width: "25%",
                                    },                                     
                                },          
                            ],
                        }
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

export default GolfCourses;