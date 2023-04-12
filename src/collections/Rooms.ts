import { CollectionConfig } from 'payload/types';

const Rooms: CollectionConfig = {
	slug: 'rooms',
	fields: [
		{
			name: 'title',
			type: 'text',            
			required: true,
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
                            name: 'features',
                            label: "Room Features",
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
                            name: 'floorplan',
                            label: "Floorplan",
                            type: 'upload',
                            relationTo: 'media',
                            required: false,
                        },
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
                                    label: "Booking ID",
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
	]
};

export default Rooms;