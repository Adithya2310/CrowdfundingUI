import React from 'react'
import { useNavigate } from 'react-router-dom'

const ConnectModal = () => {
    const navigate=useNavigate();
  return (
    <div className='p-2 bg-(rgb(0,0,0,0.7)) fixed inset-0 flex flex-col justify-center items-center mr-36 mb-24'>
    <div className='relative flex flex-col items-center bg-[#2b2e2e] p-2 px-3 rounded-[10px]'>
        <p className='text-lg text-white font-epilogue font-semibold capitalize p-1 my-3'>To continue using our Platform <br />please Connect your MetaMask</p>
        <button onClick={()=>{navigate("/")}} className=' bg-[#46ec80] px-5 py-1 rounded-[5px]'>Ok</button>
    </div>
    </div>
  )
}

export default ConnectModal