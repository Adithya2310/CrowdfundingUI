import React, { useEffect, useState } from 'react'
import {DisplayCampaigns} from '../components'
import { useStateContext } from '../context';
import Loader from '../components/Loader';

const Home = () => {
  const {getCampaigns,contract}=useStateContext();
  const [campaigns,setCampaigns]=useState([]);
  const [isLoading,setIsLoading]=useState(false);

  const handleCampaigns=async ()=>{
    setIsLoading(true);
    setCampaigns(await getCampaigns());
    setIsLoading(false);
  }
  // console.log(message);
  useEffect(()=>{
    handleCampaigns();
  },[contract]);


  return (
    <div>
    {
      isLoading?<Loader/>
      :<DisplayCampaigns
        campaigns={campaigns}
      />

    }
    </div>
  )
}

export default Home