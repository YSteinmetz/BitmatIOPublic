import express from 'express';
import google from 'googleapis';
const Oauth2 = google.Auth.OAuth2;

import {smarthome} from 'actions-on-google';
const app = smarthome();

app.onSync((body, headers) =>{
    return {
        requestId: body.requestId,
        payload:{
            agentUserId: "1962702267",
            devices:[{
                id: "123",
                type: "action.devices.types.OUTLET",
                traits: [
                    "action.devices.traits.OnOff"
                ],
                name: {
                    defaultNames: ["My Outlet 1234"],
                    name: "Night light",
                    nicknames: ["wall plug"]
                },
                willReportState: false,
                roomHint: "kitchen",
                deviceInfo:{
                    manufacturer: "BitmatIO Technologies INC",
                    model: "ST01",
                    hwVersion: "1.0",
                    swVersion: "1.0
                }
            }]
        }
    }
})
