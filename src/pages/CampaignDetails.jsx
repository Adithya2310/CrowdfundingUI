import React from 'react'
import { useLocation } from 'react-router-dom'

const CampaignDetails = () => {

  const {state}=useLocation();
  console.log(state);
  
  return (
    <div>CampaignDetails</div>
  )
}

export default CampaignDetails