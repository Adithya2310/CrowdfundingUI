import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {back} from "../assets";
import { Link } from 'react-router-dom';
import SideCard from '../components/SideCard';
import { getBarPercentage,daysLeft } from '../utils';
import FundCard from '../components/FundCard';
import { useStateContext } from '../context';
import { ethers } from 'ethers';

const CampaignDetails = () => {
  // to get the fundtion to donate form the state
  const {donateToCampaigns,getDonators,contract}=useStateContext();
  const {state}=useLocation();
  const {Cid,Title,Description,Target,AmountCollected,Owner,DeadLine}=state;

  // to store an object of donators
  const [donators,setDonators]=useState([]);

  // to get the list of donators
  const getDonatorsList=async (Cid)=>{
    const data=await getDonators(Cid);
    console.log(data);
    const arr=[];
    // to convert the array from [[donators],[donation]] to a [{address:,amount:}]
    for(let i=0;i<data.length;i++)
    {
      arr.push({
        address: data[0][i],
        amount: ethers.utils.formatEther(data[1][i].toString())
      });
    }
    setDonators(arr);
    console.log("Donators",donators);
    // console.log(data);
  }
  useEffect(()=>{
    getDonatorsList(Cid);
  },[contract])

  
  return (
    <div className='px-5 max-w-[1500px] text-white'>
      <div className='flex justify-between font-epilogue align-center text-3xl font-bold capitalize'>
      <Link to={`/`}>
        <img className='bg-[#2b2e2e] p-2 hover:bg-[#949494] transition-bg duration-300 ease-in-out rounded-full' width={40} height={40} src={back} alt="Go back"/>
      </Link>
      <div className='mr-[150px] '>{Title}</div>
      </div>
      <div className='flex gap-4 mt-[30px]'>
        <div className=' flex-1 min-h-[336px] bg-[#949494] rounded-[10px] my-5 ml-5 p-3'>
        <h1 className='text-2xl font-bold my-2 font-epilogue text-slate-300'>Story:</h1>
        <p className=' mx-4'>
          {Description}
        </p>
        </div>
        <div className='flex flex-col gap-3 my-5 ml-5'>
        <SideCard name="Days Left" value={daysLeft(DeadLine)}/>
        <SideCard name={`Raised(${Target})`} value={AmountCollected}/>
        <SideCard name="Backers" value={donators.length}/>
        </div>
      </div>
      <div className=' relative mr-40 mt-5'>
        <div className='absolute mx-5 w-full bg-[#2b2e2e] rounded-[10px] h-[8px]'></div>
        <div style={{width: `${getBarPercentage(parseFloat(AmountCollected),parseFloat(Target))}%`}} className=' absolute z-10 mx-5 bg-[#46ec80] rounded-[10px] h-[8px]'></div>
      </div>
      <div className='flex justify-between items-center'>
      <div className='my-14 mx-8  flex flex-col gap-5'>
        <div>
          <h3 className=' font-epilogue text-slate-300 text-lg'>CREATED BY</h3>
          <p className=''>{Owner}</p>
        </div>
        <div >
          <h3 className='font-epilogue text-slate-300 text-lg mb-1'>DONATORS</h3>
          {donators.map((donor)=>{
            return <p>{donor.address.slice(0,10)}... &nbsp;&nbsp;&nbsp;&nbsp; {donor.amount} Eth</p>
          })}
          {/* <p>{Owner.slice(0,10)}... &nbsp;&nbsp;&nbsp;&nbsp; {0.1} Eth</p> */}
        </div>
      </div>
      <div className='lg:mr-32 my-10'>
        <div>
            <h3 className='font-epilogue text-slate-300 text-lg'>FUND</h3>
            <FundCard
              Cid={Cid}
              donate={donateToCampaigns}
            />
        </div>
      </div>
      </div>
    </div>
  )
}

export default CampaignDetails