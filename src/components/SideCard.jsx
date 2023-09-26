import React from 'react'

const SideCard = ({name,value}) => {
  return (
    <div className='flex flex-col max-w-[100px] items-center'>
        <div className='p-4 bg-[#2b2e2e] w-[100px] text-center rounded-t-[10px] font-epilogue font-bold text-2xl '>
            {value}
        </div>
        <div className='bg-[#949494] w-[100px] text-center p-2 rounded-b-[10px]'>
            {name} 
        </div>
    </div>
  )
}

export default SideCard