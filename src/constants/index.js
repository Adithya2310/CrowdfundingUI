import {createCampaign,dashboard,payment,profile,logout} from "../assets";

export const navLinks=[
    {
        name:"dashboard",
        imgUrl:dashboard,
        link:"/"
    },
    {
        name:"createCampaign",
        imgUrl:createCampaign,
        link:"/createCampaign"
    },
    {
        name:"Payments",
        imgUrl:payment,
        link:"/payments"
    },
    {
        name:"Profile",
        imgUrl:profile,
        link:"/profile"
    },
    {
        name:"logout",
        imgUrl:logout,
        link:"/logout"
    }
]