import React from 'react'
import { search } from "../assets"
import CustomButton from './CustomButton'
import {dp} from "../assets";

const NavBar = ({}) => {
  return (
    <div className=' ml-[30px] flex  align-center justify-between'>
        <div className='ml-10 rounded-[100px] p-1.5 bg-[#2b2e2e] '>
            <div className='py-0.5 px-2 justify-center max-w-full flex gap-2 items-center  '>
                <div className= 'px-3 py-1 bg-transparent rounded-[100px] relative min-h-[40px] min-w-[52px] max-w-full flex  '>
                    <input className=' min-h-full min-w-[300px] bg-transparent text-white text-ellipsis rounded-[100px] pl-3 outline-none' type="text" placeholder='search for a campaign'/>                    
                </div>
                <div className='flex items-center min-h-[40px] min-w-[52px] bg-[#46ec80] rounded-[100px]'>
                    <img className='mx-auto object-contain' src={search} alt="Search" />
                </div>
            </div>
        </div>
        <div className='flex gap-6'>
            <CustomButton 
                name="Connect"
                styles={" bg-green-500 text-white rounded-[10px] py-3 px-5"}
                handleClick={()=>{
                    console.log("The button is clicked")
                }}
            />
            {/* <div className='max-w-[60px] p-1 rounded-full bg-[#2b2e2e]'>
                <img src={dp} alt="" />
            </div> */}
        </div>
    </div>
  )
}

export default NavBar