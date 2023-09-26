import React from 'react'

const CampaignCard = ({Title,Description,Target,AmountCollected,DeadLine,handleClick}) => {

  return (
    <div onClick={handleClick} className=' cursor-pointer bg-[#2b2e2e] h-[328px] rounded-[10px] text-white min-w-[250px] max-w-[300px] p-3  my-1'>
        <h1 className=' my-2 text-xl text-center font-semibold'>{Title.slice(0,15)}</h1>
        <div className='bg-[#949494] p-2 rounded-[10px]  h-[112px]'>
                <p className=' text-slate-300'>Description:</p>
                <p className=''>{Description.slice(0,90)}...</p>
        </div>
        <div className='p-2'>
        <div className='flex justify-between mr-4 my-2'>
            <div>
                <p className='text-slate-300'>Target:</p> 
                <p>{Target} Eth</p>
            </div>
            <div>
                <p className='text-slate-300'> Collected: </p>
                <p className='mx-4'>{AmountCollected} Eth</p>
            </div>
        </div>
        <div>
            <div>
                <p className='text-slate-300'>DeadLine:</p>
                <p>{DeadLine}</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default CampaignCard