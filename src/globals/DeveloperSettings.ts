import { GlobalConfig } from "payload/types";

const DeveloperSettings: GlobalConfig = {
  slug: "developers",
  label: "Developers",
  fields: [
    {
        type: 'tabs',
        tabs: [
            {
                label: 'Basic',
                fields: [
                    {
                        name: 'gtmID',
                        label: "Google Tag Manager ID",
                        type: 'text',
                    },
                ],
            },
            {
                label: 'Advanced',
                fields: [
                    {
                        name: 'externalStyles',
                        label: "External Stylesheets",
                        type: 'array',
                        labels: {
                            singular: 'Stylesheet',
                            plural: 'Stylesheets',
                        },				                        
                        fields: [
                            {
                                name: 'cssUrl',
                                label: "CSS URL",
                                type: 'text',
                            }
                        ]
                    },
                    {
                        name: 'externalScripts',
                        label: "External Scripts",
                        type: 'array',
                        labels: {
                            singular: 'Script',
                            plural: 'Scripts',
                        },				                        
                        fields: [
                            {
                                name: 'scriptUrl',
                                label: "Script URL",
                                type: 'text',
                            }
                        ]
                    },            
                ],
            },
        ],
    },
  ],
};

export default DeveloperSettings;