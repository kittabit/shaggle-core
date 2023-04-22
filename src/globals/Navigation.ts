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
        }        
      ]
    },           
  ],
};

export default Navigation;