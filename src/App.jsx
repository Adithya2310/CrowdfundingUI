import React from 'react'
import { Route,Routes } from 'react-router-dom';
import { NavBar,SideBar } from './components';
import {Home,CampaignDetails,CreateCampaign,Profile} from "./pages";
// import { Home } from './pages';

const App = () => {
  return (
    <div className=' relative p-4 flex bg-[#141313] h-screen'>
    <div className='sm:flex hidden sm:pr-5'>
      <SideBar/>
    </div>
    <div className='flex-1'>
    <div className='max-w-[1280px] max-sm:w-full mx-auto'>
      <NavBar/>
    </div>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
    </div>
  )
}

export default App;