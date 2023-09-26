import React, { useState } from 'react'

const FundCard = ({Cid,donate}) => {

    const [amount,setAmount]=useState();

    const updateChange=(e)=>{
        setAmount(e.target.value);
    }
    const handleSubmit=async (e)=>{
        e.preventDefault();
        await donate(Cid,amount);
        setAmount(0);
    }
  return (
    <div className=' py-4 rounded-[10px] min-w-[300px] max-w-[350px] bg-[#2b2e2e]'>
        <form onSubmit={handleSubmit} className='flex flex-col'>
        <label className=' flex flex-col items-center gap-4'>
        <h1 className=' text-xl font-bold font-epilogue'>Back The Campaign:</h1>
        <div className=' text-slate-300'>
        <p className='text-sm my-2'>DONATE:</p>
        <div className='p-1 border border-1 border-slate-400 rounded-[5px] my-2'>
            <input className=' outline-none
             p-1  h-10 rounded-[5px] bg-transparent' type="text" placeholder='0.1 Eth' onChange={updateChange} value={amount}/>
        </div>
        </div>
            <button className= 'rounded-[5px] py-2 px-3 bg-[#46ec80]' type='submit'>Submit</button>
        </label>
        </form>
    </div>
  )
}

export default FundCard