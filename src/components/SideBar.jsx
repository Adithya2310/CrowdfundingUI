import React, { useState } from 'react'
import { navLinks } from '../constants';
import { Link,useNavigate } from 'react-router-dom';
import { logo } from "../assets";

const Icon=({name,styles,imageUrl,isActive,handleClick})=>(
    <div className={`bg-[#2b2e2e] flex w-[52px] h-[52px] rounded-[10px] ${isActive===name&&`bg-[#949494]`} ${styles}`} onClick={handleClick}>
        <img className={`mx-auto ${isActive===name&&'text-red'}`} src={imageUrl} alt={name}/>
    </div>
)

const SideBar = () => {
    const [isActive,setIsActive]=useState("dashboard");
    const navigate=useNavigate();
    console.log(navLinks);
    return (
        <div className='py-2 px-1 flex flex-col gap-20 rounded-[10px]'>
            <Icon 
                styles="p-2"
                name="Logo"
                imageUrl={logo}
            />
            <div className='bg-[#2b2e2e] flex flex-col gap-5 rounded-[10px] px-[5px] py-[10px]'>
                {navLinks.map((link)=>(
                    <Icon
                    isActive={isActive}
                    key={link.name}
                    name={link.name}
                    imageUrl={link.imgUrl}
                    handleClick={
                        ()=>{
                            navigate(link.link);
                            setIsActive(link.name);
                        }
                    }
                    />
                ))}
            </div>
        </div>
  )
}

export default SideBar