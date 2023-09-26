import React, { useEffect, useState } from 'react'
import { useStateContext } from '../context';
import { profile } from '../assets';
import { DisplayCampaigns } from '../components';
import Loader from '../components/Loader';

const Profile = () => {
  // to get all the details necessary for the profile campaigns
  const {getProfileCampaigns,contract}=useStateContext();
  const [campaigns,setCampaigns]=useState([]);
  const [isLoading,setIsLoading]=useState(false);

  // to get the campaigns created by a particular profile
  const handleProfileCampaigns=async ()=>{
    setIsLoading(true);
    setCampaigns(await getProfileCampaigns());
    setIsLoading(false);
  }
  useEffect(()=>{
    handleProfileCampaigns();
  },[contract]);
  
  return (
    <div>
    {
      isLoading?<Loader/>
      :
      <DisplayCampaigns
        campaigns={campaigns}
      />
    }
    </div>  )
}

export default Profile