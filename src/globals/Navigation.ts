import { GlobalConfig } from "payload/types";

const Navigation: GlobalConfig = {
  slug: "nav",
  label: "Navigation",
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Header', 
          fields: [ 
            {
              name: "globalMainMenu",
              label: "Header",
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
                    {
                      name: 'subNavEnabled',
                      type: 'checkbox',
                      label: 'Enable Sub Navigation',
                      defaultValue: false,
                    },   
                    {
                      type: 'row',
                      fields: [
                        {
                          name: "subNav",
                          label: "Secondary Navigation",
                          type: "array",
                          required: false,
                          maxRows: 32,
                          labels: {
                            singular: 'Item',
                            plural: 'Items',
                          },                          
                          fields : [
                            {
                              type: "row",
                              fields: [
                                {
                                  name: "subNavText",
                                  label: "Label",
                                  type: "text",
                                  required: true,
                                },        
                                {
                                  name: "subNavUrl",
                                  label: "URL",
                                  type: "text",
                                  required: true,
                                },
                                {
                                  name: "subNavImage",
                                  label: "Image",
                                  type: 'upload',
                                  relationTo: 'media',
                                  required: false,
                                },        
                              ],
                            },
                          ],
                        }
                      ],
                      admin: {
                        condition: (data, siblingData) => {
                          if (siblingData.subNavEnabled) {
                            return true;
                          } else {
                            return false;
                          }
                        },
                      },                      
                    },            
                  ],  
                }
              ],
            },
          ],
        },
        {
          label: 'Mobile', 
          fields: [ 
            {
              name: "globalMobileMenu",
              label: "Mobile",
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
                    {
                      name: 'subNavEnabled',
                      type: 'checkbox',
                      label: 'Enable Sub Navigation',
                      defaultValue: false,
                    },  
                    {
                      type: 'row',
                      fields: [
                        {
                          name: "subNav",
                          label: "Secondary Navigation",
                          type: "array",
                          required: false,
                          maxRows: 32,
                          labels: {
                            singular: 'Item',
                            plural: 'Items',
                          },                          
                          fields : [
                            {
                              type: "row",
                              fields: [
                                {
                                  name: "subNavText",
                                  label: "Label",
                                  type: "text",
                                  required: true,
                                },        
                                {
                                  name: "subNavUrl",
                                  label: "URL",
                                  type: "text",
                                  required: true,
                                },        
                              ],
                            },
                          ],
                        }
                      ],
                      admin: {
                        condition: (data, siblingData) => {
                          if (siblingData.subNavEnabled) {
                            return true;
                          } else {
                            return false;
                          }
                        },
                      },                      
                    },                  
                  ],  
                },
              ],
            },
          ],
        },
        {
          label: 'Footer', 
          fields: [ 
            {
              name: "globalFooterColumns",
              label: "Footer",
              type: "array",
              required: false,
              maxRows: 4,
              labels: {
                singular: 'Column',
                plural: 'Columns',                
              },              
              fields: [
                {
                  name: "columnHeadline",
                  label: "Headline",
                  type: "text",
                  required: false,
                },        
                {
                  type: "array",
                  name: "columnNav",
                  label: "Column Navigation",
                  required: false,
                  maxRows: 4,
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
          ],
        }        
      ]
    },           
  ],
};

export default Navigation;