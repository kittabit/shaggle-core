import { GlobalConfig } from "payload/types";

const Navigation: GlobalConfig = {
  slug: "nav",
  label: "Navigation",
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Main Menu', 
          fields: [ 
            {
              name: "globalMainMenu",
              label: "Main Menu",
              type: "array",
              required: false,
              maxRows: 32,
              labels: {
                singular: 'Navigation Item',
                plural: 'Navigation Items',
              },
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "navText",
                      label: "Label",
                      type: "text",
                      required: true,
                    },        
                    {
                      name: "navUrl",
                      label: "URL",
                      type: "text",
                      required: true,
                    },  
                  ],  
                }
              ],
            },
          ],
        },
        {
          label: 'Mobile Menu', 
          fields: [ 
            {
              name: "globalMobileMenu",
              label: "Mobile Menu",
              type: "array",
              required: false,
              maxRows: 32,
              labels: {
                singular: 'Navigation Item',
                plural: 'Navigation Items',
              },              
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "navText",
                      label: "Label",
                      type: "text",
                      required: true,
                    },        
                    {
                      name: "navUrl",
                      label: "URL",
                      type: "text",
                      required: true,
                    },  
                  ],  
                },
              ],
            },
          ],
        },
        {
          label: 'Footer Menu', 
          fields: [ 
            {
              name: "globalFooterMenu",
              label: "Footer Menu",
              type: "array",
              required: false,
              maxRows: 32,
              labels: {
                singular: 'Navigation Item',
                plural: 'Navigation Items',
              },              
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "navText",
                      label: "Label",
                      type: "text",
                      required: true,
                    },        
                    {
                      name: "navUrl",
                      label: "URL",
                      type: "text",
                      required: true,
                    },  
                  ],  
                },
              ],
            }, 
          ],
        }        
      ]
    },           
  ],
};

export default Navigation;