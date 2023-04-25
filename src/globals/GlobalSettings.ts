import { GlobalConfig } from "payload/types";

const GlobalSettings: GlobalConfig = {
  slug: "settings",
  label: "Settings",
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Header', 
          fields: [ 
            {
              name: 'siteLogo',
              label: "Site Logo",
              type: 'upload',
              relationTo: 'media',
              required: false,
            },
          ],
        },
        {
          label: 'Footer', 
          fields: [ 
            {
              name: 'siteFooterLogo',
              label: "Site Footer Logo",
              type: 'upload',
              relationTo: 'media',
              required: false,
            },
            {
              name: 'siteFooterCopyrightText',
              label: "Copyright Text",
              type: 'textarea',
              required: false,
            },            
          ],
        },
        {
          label: 'News', 
          fields: [ 
            {
              name: 'newsPageHeader',
              label: "News (Single) Page Header Override",
              type: 'upload',
              relationTo: 'media',
              required: false,
            },
          ],
        },  
        {
            label: 'Rooms', 
            fields: [ 
              {
                name: 'roomsPageHeader',
                label: "Rooms (Single) Page Header Override",
                type: 'upload',
                relationTo: 'media',
                required: false,
              },
            ],
        },
        {
          label: 'Attractions', 
          fields: [ 
            {
              name: 'attractionsPageHeader',
              label: "Attractions (Single) Page Header Override",
              type: 'upload',
              relationTo: 'media',
              required: false,
            },
          ],
        },  
        {
          label: 'Social', 
          fields: [ 
            {
              type: "row",
              fields: [
                {
                  name: 'socialTwitter',
                  label: "Twitter URL",
                  type: 'text',
                  required: false,
                  admin: {
                    width: '50%',
                  },
                },
                {
                  name: 'socialFacebook',
                  label: "Facebook URL",
                  type: 'text',
                  required: false,
                  admin: {
                    width: '50%',
                  },
                },
                {
                  name: 'socialInstagram',
                  label: "Instagram URL",
                  type: 'text',
                  required: false,
                  admin: {
                    width: '50%',
                  },
                },
                {
                  name: 'socialLinkedin',
                  label: "LinkedIn URL",
                  type: 'text',
                  required: false,
                  admin: {
                    width: '50%',
                  },
                },
              ],
            },
          ],
        },      
      ]
    },           
  ],
};

export default GlobalSettings;