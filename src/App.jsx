import React from 'react'
import { Route,Routes } from 'react-router-dom';
import { NavBar,SideBar } from './components';
import {Home,CampaignDetails,CreateCampaign,Profile} from "./pages";
import ConnectModal from './components/ConnectModal';
// import { Home } from './pages';

const App = () => {
  return (
    <div className=' relative p-4 flex bg-[#141313] min-h-screen'>
    <div className='sm:flex hidden sm:pr-5'>
      <SideBar/>
    </div>
    <div className='flex-1'>
    <div className='max-w-[1280px] max-sm:w-full mx-auto'>
      <NavBar/>
    </div>
    <div className='my-10 mx-10'>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/create-campaign" element={<CreateCampaign/>}></Route>
        <Route path="/campaign/:id" element={<CampaignDetails/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/connect-prompt" element={<ConnectModal/>}></Route>
      </Routes>
    </div>

    </div>
    </div>
  )
}

export default App;