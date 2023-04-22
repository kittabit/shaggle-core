import { CollectionConfig } from 'payload/types';

const Media: CollectionConfig = {
	slug: 'media',
	fields: [
		{
			name: 'alt',
			label: 'Alt Text',
			type: 'text',
		},
	],
    upload: true,
};

export default Media;