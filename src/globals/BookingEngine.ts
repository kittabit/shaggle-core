import { GlobalConfig } from "payload/types";

const BookingEngineSettings: GlobalConfig = {
  slug: "bookingEngine",
  label: "Booking Engine",
  fields: [
    {
        name: 'beForm', 
        label: "Booking Engine Widget",
        type: 'group', 
        fields: [
            {
                name: 'beFormUrl',
                label: "Form URL",
                type: 'text',
            },
            {
                name: 'beFormMethod',
                label: "Form Method",
                type: 'select',
                options: [
                    {
                        label: 'GET',
                        value: 'get',
                    },
                    {
                        label: 'POST',
                        value: 'post',
                    },
                ],
                defaultValue: 'get',
            },  
            {
                type: "row",
                fields: [
                    {
                        name: 'beFormArrivalDateFieldName',
                        label: "Arrival Date Field Name",
                        type: 'text',
                        admin: { 
                            width: "50%",
                        }                        
                    },
                    {
                        name: 'beFormArrivalDateFieldId',
                        label: "Arrival Date Field ID",
                        type: 'text',
                        admin: { 
                            width: "50%",
                        }
                    },
                ],
            },
            {
                type: "row",
                fields: [
                    {
                        name: 'beFormDepartureDateFieldName',
                        label: "Departure Date Field Name",
                        type: 'text',
                        admin: { 
                            width: "35%",
                        }                        
                    },
                    {
                        name: 'beFormDepartureDateFieldId',
                        label: "Departure Date Field ID",
                        type: 'text',
                        admin: { 
                            width: "35%",
                        }
                    },
                    {
                        name: 'beFormDepartureDateMinDays',
                        label: "Minimum Days",
                        type: 'number',
                        min: 1,
                        max: 365,
                        admin: { 
                            width: "30%",
                        }
                    },                    
                ],
            },
            {
                type: "row",
                fields: [
                    {
                        name: 'beFormGuestsFieldName',
                        label: "Guests Field Name",
                        type: 'text',
                        admin: { 
                            width: "25%",
                        }                        
                    },
                    {
                        name: 'beFormGuestsFieldId',
                        label: "Guests Field ID",
                        type: 'text',
                        admin: { 
                            width: "25%",
                        }
                    },
                    {
                        name: 'beFormGuestsMin',
                        label: "Minimum Guests",
                        type: 'number',
                        min: 1,
                        max: 365,
                        admin: { 
                            width: "25%",
                        }
                    },                    
                    {
                        name: 'beFormGuestsMax',
                        label: "Maximum Guests",
                        type: 'number',
                        min: 1,
                        max: 365,
                        admin: { 
                            width: "25%",
                        }
                    },                                        
                ],
            },               
            {
                type: "text",
                name: 'beFormSubmitButtonText',
                label: "Submit Button Text",
            },
        ],
    }
  ],
};

export default BookingEngineSettings;