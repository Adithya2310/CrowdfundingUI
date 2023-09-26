import { useAddress, useContract, useContractWrite, useMetamask, useDisconnect } from '@thirdweb-dev/react'
import { ethers } from 'ethers';
import React, { createContext, useContext } from 'react'
import { createCampaign, profile } from '../assets';

const StateContext=createContext();

const StateContextProvider = ({children}) => {
    // testing context code
    // const address=useAddress();
    // return (
    //     <StateContext.Provider value={{message:"hello",connect,address}}>
    //         {children}
    //     </StateContext.Provider>
    // )

    // hooks to connect and disconnect to the wallet in metamask
    const connect=useMetamask();
    const disconnect=useDisconnect();

   // give the contract of the smart contracts
    const {contract}=useContract('0xa518cd1757dE5A0216C5acC87Bb1B286f8B7d668');
    // console.log("Contract is"+contract);
    const { mutateAsync: createCampaign } = useContractWrite(contract, 'createCampaign');
    const address=useAddress();
    const test=()=>{
        console.log("Test successfull");
    }

    // to pass the campaign data to the blockchain
    const publishCampaign=async (form)=>{
        // console.log("Ya i am at the publish campaign "+form);
        // console.log(address,
        //     form.Title,
        //     form.Description,
        //     form.Target,
        //     "image string",
        //     new Date(form.DeadLine).getTime());
        try{
            const data=await createCampaign({
                args:[
                    address,
                    form.Title,
                    form.Description,
                    ethers.utils.parseUnits(form.Target,18),
                    "image string",
                    new Date(form.DeadLine).getTime()
                ]
            });
        }
        catch(error){
            console.log(error);
        }
    }

    // to get the list of campaigns from the blockchain 
    const getCampaigns=async ()=>{
        if(contract)
        {
            const campaigns=await contract.call('getCampaigns');
            const parsedCampaigns=campaigns.map((campaign,i)=>({
                Cid: i,
                Title: campaign.title,
                Description: campaign.story,
                DeadLine: campaign.deadline.toNumber(),
                Owner: campaign.owner,
                Target: ethers.utils.formatEther(campaign.target.toString()),
                AmountCollected: ethers.utils.formatEther(campaign.amountCollected.toString())
            }));
            return parsedCampaigns;
        }
    }

    // to get only those campaigns related to the created profile
    const getProfileCampaigns=async ()=>{
        const campaigns=await getCampaigns();
        console.log(campaigns);
        const profileCampaigns=campaigns.filter((campaign)=>{
            return campaign.Owner===address;
        })
        return profileCampaigns;
    }

    const donateToCampaigns=async (Cid,amount)=>{
        const data=await contract.call('donateToCampaign',[Cid],{
            value:ethers.utils.parseEther(amount)
        });
        console.log(data);
    }

    const getDonators=async(Cid)=>{
        try{
            const donators=await contract.call('getDonators',[Cid]);
            // console.log(donators);
            return donators
        }
        catch(e)
        {
            console.log(e);
        }
    }

    return (
      <StateContext.Provider value={{connect,disconnect,contract,address,message:"Ya its working",publishCampaign,test,getCampaigns,getProfileCampaigns,donateToCampaigns,getDonators}}>
        {children}
      </StateContext.Provider>)
    }

    const useStateContext=()=>useContext(StateContext);
    export {StateContextProvider,useStateContext};
