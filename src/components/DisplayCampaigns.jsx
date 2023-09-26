import React from 'react'
import CampaignCard from './CampaignCard';
import { useNavigate } from 'react-router-dom';

const DisplayCampaigns = ({campaigns}) => {
    const navigate=useNavigate();
    console.log(campaigns);
  return (
    <div>
    <div className=' font-bold text-white py-5'>
        Campaigns ({campaigns?campaigns.length:0}) 
    </div>
    <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-[20px] grid-cols-1'>
        {(campaigns)&&campaigns.map((campaign)=>{
            return (<CampaignCard
                key={campaign.Cid}
                {...campaign}
                handleClick={()=>navigate(`/campaign/${campaign.Cid}`,{state:campaign})}
            />)
        })}
    </div>
    </div>
  )
}

export default DisplayCampaigns